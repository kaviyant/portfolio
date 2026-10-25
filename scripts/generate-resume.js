const fs = require('fs');
const path = require('path');

// Generate a valid minimal PDF with readable text streams for Kaviyan T.'s Resume
function createSimplePDF() {
  const content = `BT
/F1 22 Tf
50 780 Td
(KAVIYAN T. - RESUME) Tj
0 -24 Td
/F1 11 Tf
(Full-Stack Developer | Android Developer | Cybersecurity Enthusiast) Tj
0 -16 Td
(Email: kaviyanthennarasu@gmail.com | Location: Chennai, India) Tj
0 -14 Td
(GitHub: https://github.com/kaviyant | LeetCode: https://leetcode.com/u/kaviyant7/) Tj
0 -28 Td
/F1 14 Tf
(EDUCATION) Tj
0 -18 Td
/F1 10 Tf
(Chennai Institute of Technology - B.Tech Information Technology [2024 - 2028]) Tj
0 -14 Td
(CGPA: 8.12 / 10 [Verified]) Tj
0 -26 Td
/F1 14 Tf
(EXPERIENCE) Tj
0 -18 Td
/F1 10 Tf
(1. DNYX - Full-Stack Developer Intern [Nov 2025 - Jan 2026, Chennai]) Tj
0 -14 Td
(Built full-stack features with responsive UI, APIs, and MongoDB database logic.) Tj
0 -18 Td
(2. Eduskills - Google Android Developer Internship [May 2025 - Jun 2025]) Tj
0 -14 Td
(Developed Android applications with optimized UI, authentication, and Firebase sync.) Tj
0 -26 Td
/F1 14 Tf
(PROJECTS) Tj
0 -18 Td
/F1 10 Tf
(FORTRIX: Cyber Forensic Triage Software [Rust, Tauri, JavaScript, MongoDB]) Tj
0 -14 Td
(SecurePrompt AI: AI-Powered Prompt Security & Leak Prevention [Python, FastAPI, ML]) Tj
0 -14 Td
(QR Phishing Detector: Real-time QR scanner & VirusTotal threat analysis [Flutter, Dart]) Tj
0 -26 Td
/F1 14 Tf
(COMPETITIVE PROGRAMMING & RECOGNITION) Tj
0 -18 Td
/F1 10 Tf
(LeetCode: 550+ Solved | Top 11.96% Globally | Max Rating: 1749) Tj
0 -14 Td
(CodeChef: Division 2 | 1-Star Rating: 1022 | Contest Rank: 944) Tj
0 -14 Td
(DSCI Cyber Security Innovation Challenge 1.0: Top 50 Nationwide) Tj
0 -14 Td
(Tamilan Skill Ideathon: Top 10 Finalist) Tj
0 -14 Td
(CyberHackathon 4.0: Police Hackathon Finalist) Tj
0 -26 Td
/F1 14 Tf
(CERTIFICATIONS) Tj
0 -18 Td
/F1 10 Tf
(IBM SkillsBuild AI Fundamentals | Cisco Modern AI | MongoDB for Students) Tj
0 -14 Td
(NPTEL Python Data Analytics | Cisco CyberOps Associate | AWS Educate Cloud 101) Tj
ET`;

  const streamLength = Buffer.byteLength(content, 'utf-8');

  const pdfData = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000227 00000 n 
0000000300 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${370 + streamLength}
%%EOF`;

  const outDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'Kaviyan_T_Resume.pdf'), pdfData);
  console.log('Successfully generated public/Kaviyan_T_Resume.pdf');
}

createSimplePDF();
