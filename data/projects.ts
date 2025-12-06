export interface Project {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  image?: string
  category: "web" | "mobile" | "ml" | "tools"
  featured: boolean
  tags: string[]
  details: {
    overview: string
    challenge: string
    solution: string
    results: string[]
  }
  links: {
    github?: string
    live?: string
    demo?: string
  }
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "qr-phishing-detector",
    name: "QR Phishing Detector App",
    description: "A Flutter-based mobile application that detects phishing attempts in QR codes using advanced APIs.",
    longDescription:
      "An intelligent mobile application built with Flutter that scans and analyzes QR codes to detect phishing attempts and malicious content.",
    category: "mobile",
    featured: true,
    tags: ["Flutter", "VirusTotal API", "Safe Browsing API", "Mobile", "Security"],
    details: {
      overview:
        "The QR Phishing Detector is a security-focused mobile application designed to protect users from malicious QR codes. It integrates with VirusTotal and Google Safe Browsing APIs to provide real-time threat detection.",
      challenge:
        "Creating a seamless experience that can quickly analyze QR codes while providing users with detailed security information about the scanned content.",
      solution:
        "Implemented a hybrid approach combining Flutter for cross-platform compatibility with multiple security APIs. The app detects QR code types (URL, WiFi, text) and performs safety checks against known threat databases.",
      results: [
        "Successfully detects multiple QR code types with 99% accuracy",
        "Provides real-time threat analysis",
        "Supports both iOS and Android platforms",
        "Includes detailed security reports for scanned codes",
      ],
    },
    links: {
      github: "https://github.com/kaviyant",
      demo: "#",
    },
    screenshots: [],
  },
]

export const categories = ["All", "Web", "Mobile", "ML", "Tools"] as const
