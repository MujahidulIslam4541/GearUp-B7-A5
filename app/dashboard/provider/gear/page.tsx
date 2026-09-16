import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { getGears } from "@/lib/api"
import { ProviderGearsList } from "@/components/dashboard/provider/provider-gears-list"

export const metadata = {
  title: "My Gears | GearUp Provider",
  description:
    "Manage your equipment inventory, availability, and rental pricing.",
}

export default async function ProviderGearsPage() {
  const gearsRes = await getGears()
  const gears = gearsRes.data || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Gear Inventory
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View stock, adjust rental rates, and update equipment availability.
          </p>
        </div>

        <Button
          render={<Link href="/dashboard/provider/gear/new" />}
          size="sm"
          className="gap-1.5 self-start sm:self-auto"
        >
          <PlusCircle className="size-4" />
          Add New Gear
        </Button>
      </div>

      <DashboardSection
        title="Listed Equipment"
        description="All items currently listed in your rental catalog."
      >
        <ProviderGearsList initialGears={gears} />
      </DashboardSection>
    </div>
  )
}
