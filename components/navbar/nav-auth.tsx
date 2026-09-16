import Link from "next/link"
import { LogIn } from "lucide-react"
import { AuthUser } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { NavUserMenu } from "@/components/navbar/nav-user-menu"
import { cn } from "@/lib/utils"

interface NavAuthProps {
  user?: AuthUser | null
  className?: string
}

export function NavAuth({ user, className }: NavAuthProps) {
  return (
    <div className={cn("items-center", className)}>
      {user && user.name ? (
        <NavUserMenu user={user} />
      ) : (
        <Button
          render={<Link href="/auth/login" />}
          size="sm"
          className="gap-1.5 font-medium shadow-xs"
        >
          <LogIn className="size-4" />
          <span>Sign In</span>
        </Button>
      )}
    </div>
  )
}
