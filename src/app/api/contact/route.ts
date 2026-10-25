import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // Check whether the environment variable exists.
  if (!apiKey || !apiKey.startsWith("re_")) {
    console.error("RESEND_API_KEY is missing or incorrectly configured.");

    return NextResponse.json(
      { error: "Email service configuration error. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !subject ||
      subject.length > 200 ||
      !message ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please enter valid contact details and a message." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kaviyanthennarasu@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      // Log the error returned by Resend, never the API key.
      console.error("Resend API error:", {
        name: error.name,
        message: error.message,
      });

      return NextResponse.json(
        { error: "Resend could not send the email. Check your Resend logs." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { error: "Unable to process your message. Please try again." },
      { status: 500 }
    );
  }
}
