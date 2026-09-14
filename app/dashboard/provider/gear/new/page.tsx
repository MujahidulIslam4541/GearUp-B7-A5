import { CreateGearForm } from "@/components/dashboard/provider/create-gear-form"

export const metadata = {
  title: "Create Gear | GearUp Provider",
  description: "List new rental equipment on the GearUp marketplace.",
}

export default function CreateGearPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          List New Gear
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter equipment specifications, rental rate, and inventory availability to start earning.
        </p>
      </div>

      <CreateGearForm />
    </div>
  )
}

