import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Celestial Church of Christ - Students Parish FUTA | CCCSP FUTA",
  description: "Welcome to Celestial Church of Christ Students Parish FUTA (CCCSP FUTA). Where we worship God in the beauty of his Holiness. Join us for worship, fellowship, and community.",
  generator: "CeleFuta app",
  applicationName: "CCCSP FUTA",
  keywords: ["Church", "Celestial", "FUTA", "Worship", "Community", "Faith"],
  creator: "CCCSP FUTA",
  publisher: "CCCSP FUTA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://cccspfuta.com",
    title: "Celestial Church of Christ - Students Parish FUTA",
    description: "Where we worship God in the beauty of his Holiness",
    siteName: "CCCSP FUTA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Celestial Church of Christ Students Parish FUTA",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celestial Church of Christ - Students Parish FUTA",
    description: "Where we worship God in the beauty of his Holiness",
    creator: "@celefuta",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
