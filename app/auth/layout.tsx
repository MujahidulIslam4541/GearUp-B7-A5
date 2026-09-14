import { AuthVisual } from "@/components/auth/auth-visual"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <AuthVisual />
      <div className="flex flex-1 items-center justify-center p-6 sm:p-10 lg:p-16">
        {children}
      </div>
    </div>
  )
}
