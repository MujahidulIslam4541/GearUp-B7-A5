import { NextResponse, type NextRequest } from "next/server"
import { verifyAccessToken, normalizeRole, getDashboardRouteForRole } from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("accessToken")?.value
  const payload = token ? await verifyAccessToken(token) : null
  const role = payload ? normalizeRole(payload.role) : null

  const isAuthRoute = pathname.startsWith("/auth")
  const isDashboardRoute = pathname.startsWith("/dashboard")

  if (isAuthRoute && role) {
    return NextResponse.redirect(new URL(getDashboardRouteForRole(role), request.url))
  }

  if (isDashboardRoute) {
    if (!role) {
      const loginUrl = new URL("/auth/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      const res = NextResponse.redirect(loginUrl)
      if (token) res.cookies.delete("accessToken")
      return res
    }

    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL(getDashboardRouteForRole(role), request.url))
    }

    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      const target = role === "provider" ? "/dashboard/provider" : "/dashboard/user"
      return NextResponse.redirect(new URL(target, request.url))
    }

    if (pathname.startsWith("/dashboard/provider") && role !== "provider" && role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/user", request.url))
    }

    if (pathname.startsWith("/dashboard/user") && role === "provider") {
      return NextResponse.redirect(new URL("/dashboard/provider", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
}