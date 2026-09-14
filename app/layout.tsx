import { Geist, Geist_Mono, DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        dmSansHeading.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
