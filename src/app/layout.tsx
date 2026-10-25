import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaviyan.dev"),
  title: "Kaviyan T. — Full-Stack Developer & Cybersecurity Enthusiast",
  description:
    "Personal portfolio of Kaviyan T. — IT student at Chennai Institute of Technology building full-stack applications, Android experiences, and cybersecurity tools like FORTRIX and SecurePrompt AI.",
  keywords: [
    "Kaviyan T",
    "Kaviyan",
    "Full-Stack Developer",
    "Android Developer",
    "Cybersecurity Enthusiast",
    "Chennai Institute of Technology",
    "FORTRIX",
    "SecurePrompt AI",
    "Competitive Programmer",
    "LeetCode Knight",
    "Portfolio",
  ],
  authors: [{ name: "Kaviyan T.", url: "https://kaviyan.dev" }],
  creator: "Kaviyan T.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaviyan.dev",
    siteName: "Kaviyan T. Portfolio",
    title: "Kaviyan T. — Full-Stack Developer & Cybersecurity Enthusiast",
    description:
      "Crafting high-impact digital experiences across web, mobile, and security systems. Explore selected work, competitive programming metrics, and technical expertise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaviyan T. — Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaviyan T. — Full-Stack Developer & Cybersecurity Enthusiast",
    description:
      "Information Technology student at Chennai Institute of Technology building next-gen digital systems and security software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen w-full max-w-full bg-[#08090B] text-[#F4F4F5] antialiased selection:bg-[#C6FF4D] selection:text-[#08090B] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
