import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-[1920px] flex-1">{children}</main>
      <Footer />
    </div>
  )
}
