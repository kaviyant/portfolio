import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaviyan T - Full Stack Developer",
  description:
    "Building fast, clean, intelligent digital experiences. Full Stack Developer, App Developer, Competitive Programmer.",
  
  keywords: ["fullstack", "developer", "portfolio", "web", "mobile", "flutter"],
  authors: [{ name: "Kaviyan T" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaviyant.dev",
    title: "Kaviyan T - Full Stack Developer",
    description: "Building fast, clean, intelligent digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaviyan T - Full Stack Developer",
    description: "Building fast, clean, intelligent digital experiences.",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e27" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
