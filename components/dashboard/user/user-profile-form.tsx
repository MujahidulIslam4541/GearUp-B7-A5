import { ApiMe } from "@/types/api"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserProfileForm({ user }: { user?: ApiMe | null }) {
  return (
    <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            Personal Details
          </h3>
          <p className="text-xs text-muted-foreground">
            Authenticated GearUp account information
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-semibold capitalize">
            {user?.role ? user.role.toLowerCase() : "user"}
          </Badge>
          <Badge className="border-emerald-200 bg-emerald-500/10 text-xs font-semibold text-emerald-600 uppercase">
            {user?.status || "ACTIVE"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={user?.name || ""}
            readOnly
            className="bg-muted/30"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={user?.email || ""}
            readOnly
            className="bg-muted/30"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 text-xs text-muted-foreground">
        Note: Profile information is synchronized directly with your GearUp
        authentication identity. Contact platform administration if email or
        role updates are needed.
      </div>
    </div>
  )
}
