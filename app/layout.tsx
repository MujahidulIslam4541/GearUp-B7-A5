import { Geist, Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { cn } from "@/lib/utils"

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

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
      <body>
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
          <Navbar />
          <main className="mx-auto w-full max-w-[1920px] flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
