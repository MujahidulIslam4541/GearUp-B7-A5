import { redirect } from "next/navigation"
import { getServerSession } from "@/lib/auth-server"
import { getDashboardRouteForRole } from "@/lib/auth"

export default async function DashboardRootPage() {
  const session = await getServerSession()
  const target = getDashboardRouteForRole(session?.user?.role)
  redirect(target)
}
