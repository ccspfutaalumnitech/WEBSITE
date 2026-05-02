import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Celestial Church of Christ - Students Parish FUTA",
  description: "Welcome to Celestial Church of Christ Students Parish FUTA - Join us for worship and community",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/public/WhatsApp Image 2025-11-05 at 07.55.21_cf28b6cf.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/public/WhatsApp Image 2025-11-05 at 07.55.21_cf28b6cf.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/public/WhatsApp Image 2025-11-05 at 07.55.21_cf28b6cf.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/public/WhatsApp Image 2025-11-05 at 07.55.21_cf28b6cf.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
