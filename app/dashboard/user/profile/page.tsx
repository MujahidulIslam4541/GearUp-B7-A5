import { getMe } from "@/lib/api"
import { UserProfileForm } from "@/components/dashboard/user/user-profile-form"

export const metadata = {
  title: "Profile | GearUp",
  description:
    "Manage your personal information, address, and rental contact details.",
}

export default async function UserProfilePage() {
  const meRes = await getMe()

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Account Profile
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View your authenticated GearUp identity and active account role.
        </p>
      </div>

      <UserProfileForm user={meRes.data} />
    </div>
  )
}
