import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ============================================================================
// RATE LIMITING CONFIGURATION (Sliding Window in-memory)
// ============================================================================
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 messages per 15m per IP

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up stale rate limit entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    const validTimestamps = record.timestamps.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, { timestamps: validTimestamps });
    }
  }
}, 10 * 60 * 1000);

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; retryAfterSec?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };
  
  // Filter out timestamps outside the active window
  const activeTimestamps = record.timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = activeTimestamps[0];
    const retryAfterSec = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSec };
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: activeTimestamps });

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - activeTimestamps.length,
  };
}

// ============================================================================
// HELPER: HTML Sanitization
// ============================================================================
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// POST /api/contact
// ============================================================================
export async function POST(req: NextRequest) {
  try {
    // 1. IP Extraction & Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwardedFor ? forwardedFor.split(",")[0].trim() : realIp) || "127.0.0.1";

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. Please wait ${rateLimit.retryAfterSec || 60} seconds before sending another message.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSec || 60),
          },
        }
      );
    }

    // 2. Parse request payload
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = body;

    // 3. Spam Honeypot Detection
    if (honeypot && String(honeypot).trim() !== "") {
      // Return 200 with generic response to avoid tipping off sophisticated bots
      return NextResponse.json(
        { success: true, message: "Message dispatched." },
        { status: 200 }
      );
    }

    // 4. Server-Side Validation
    // Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }
    if (name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Name is too long (maximum 100 characters)." },
        { status: 422 }
      );
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (e.g. name@company.com)." },
        { status: 422 }
      );
    }
    if (email.trim().length > 255) {
      return NextResponse.json(
        { success: false, error: "Email address is too long." },
        { status: 422 }
      );
    }

    // Subject
    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please provide a subject line (at least 3 characters)." },
        { status: 422 }
      );
    }
    if (subject.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: "Subject is too long (maximum 150 characters)." },
        { status: 422 }
      );
    }

    // Message
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please write a descriptive message (at least 10 characters).",
        },
        { status: 422 }
      );
    }
    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message is too long (maximum 5,000 characters)." },
        { status: 422 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    // 5. Check Resend Configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error(
        "[API/Contact] Missing RESEND_API_KEY in server environment variables."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is currently offline (RESEND_API_KEY not configured on server). Please configure RESEND_API_KEY in .env.local or deployment environment.",
        },
        { status: 500 }
      );
    }

    // 6. Initialize Resend
    const resend = new Resend(resendApiKey);

    const toEmail = process.env.CONTACT_TO_EMAIL || "kaviyanthennarasu@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Kaviyan Portfolio <onboarding@resend.dev>";

    const dateFormatted = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    // 7. Compose Email Content
    const emailSubject = `[Portfolio] ${cleanSubject} — from ${cleanName}`;

    const textContent = `
NEW PORTFOLIO INQUIRY
===============================================
From:    ${cleanName} <${cleanEmail}>
Date:    ${dateFormatted} (IST)
Subject: ${cleanSubject}
IP:      ${clientIp}

MESSAGE:
-----------------------------------------------
${cleanMessage}
-----------------------------------------------

Direct Reply: Hit reply to message ${cleanEmail} directly.
`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #08090B; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #101217; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
    
    <!-- Header Banner -->
    <div style="background: linear-gradient(135deg, #16181F 0%, #0d0f13 100%); padding: 24px 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 11px; font-weight: 700; font-family: monospace; letter-spacing: 2px; color: #C6FF4D; text-transform: uppercase;">
          ● PORTFOLIO INBOX INQUIRY
        </span>
        <span style="font-size: 11px; font-family: monospace; color: #71717A;">
          kaviyan.dev
        </span>
      </div>
      <h1 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1.3;">
        ${escapeHtml(cleanSubject)}
      </h1>
    </div>

    <!-- Sender Details -->
    <div style="padding: 24px 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); background-color: rgba(255, 255, 255, 0.02);">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; color: #71717A; width: 85px; font-family: monospace;">SENDER:</td>
          <td style="padding: 6px 0; color: #FFFFFF; font-weight: 600;">
            ${escapeHtml(cleanName)}
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #71717A; font-family: monospace;">EMAIL:</td>
          <td style="padding: 6px 0;">
            <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #55D6D0; text-decoration: none; font-weight: 500;">
              ${escapeHtml(cleanEmail)}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #71717A; font-family: monospace;">TIMESTAMP:</td>
          <td style="padding: 6px 0; color: #A1A1AA; font-family: monospace; font-size: 12px;">
            ${escapeHtml(dateFormatted)} (IST)
          </td>
        </tr>
      </table>
    </div>

    <!-- Message Body -->
    <div style="padding: 28px;">
      <div style="font-size: 11px; font-family: monospace; color: #C6FF4D; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;">
        MESSAGE CONTENT
      </div>
      <div style="background-color: #08090B; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #E4E4E7; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(cleanMessage)}
      </div>
    </div>

    <!-- Footer Action -->
    <div style="padding: 20px 28px; background-color: #0b0d10; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
      <a href="mailto:${escapeHtml(cleanEmail)}?subject=Re:%20${encodeURIComponent(cleanSubject)}" style="display: inline-block; background-color: #C6FF4D; color: #08090B; font-weight: 700; font-size: 13px; font-family: monospace; text-decoration: none; padding: 12px 24px; border-radius: 10px; letter-spacing: 0.5px;">
        REPLY TO ${escapeHtml(cleanName.toUpperCase())}
      </a>
      <p style="margin: 12px 0 0 0; font-size: 11px; color: #52525B; font-family: monospace;">
        Received via Kaviyan T. Portfolio Contact Form &bull; IP: ${escapeHtml(clientIp)}
      </p>
    </div>

  </div>
</body>
</html>
`;

    // 8. Dispatch Email via Resend
    const sendResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (sendResult.error) {
      console.error("[API/Contact] Resend delivery error:", sendResult.error);
      return NextResponse.json(
        {
          success: false,
          error:
            sendResult.error.message ||
            "The email delivery service could not deliver your message. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    // 9. Successfully accepted by email service
    return NextResponse.json(
      {
        success: true,
        messageId: sendResult.data?.id,
        message: "Your message has been received! Kaviyan will respond shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API/Contact] Unexpected server error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
