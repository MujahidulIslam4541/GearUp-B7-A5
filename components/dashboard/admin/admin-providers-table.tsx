"use client"

import { useState } from "react"
import { ShieldCheck, ShieldAlert, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { MOCK_PROVIDERS } from "@/lib/constants/dashboard-mock-data"
import { DashboardProvider } from "@/types/dashboard"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"

export function AdminProvidersTable() {
  const [providers, setProviders] = useState<DashboardProvider[]>(MOCK_PROVIDERS)

  const toggleVerification = (id: string, name: string) => {
    setProviders((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p
        const next = p.status === "VERIFIED" ? "PENDING" : "VERIFIED"
        toast.info(`Provider "${name}" verification status: ${next}`)
        return { ...p, status: next }
      })
    )
  }

  const handleDelete = (id: string, name: string) => {
    setProviders((prev) => prev.filter((p) => p.id !== id))
    toast.success(`Provider "${name}" removed`)
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Gears</TableHeaderCell>
          <TableHeaderCell>Bookings</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {providers.map((p) => (
          <TableRow key={p.id}>
            <TableCell>
              <div className="font-semibold">{p.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{p.id}</div>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">{p.email}</TableCell>
            <TableCell className="text-xs font-medium">{p.totalGears} items</TableCell>
            <TableCell className="text-xs font-medium">{p.totalBookings}</TableCell>
            <TableCell><StatusBadge status={p.status} /></TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title={p.status === "VERIFIED" ? "Revoke Verification" : "Verify Provider"}
                  onClick={() => toggleVerification(p.id, p.name)}
                >
                  {p.status === "VERIFIED" ? <ShieldAlert className="size-3.5 text-amber-500" /> : <ShieldCheck className="size-3.5 text-emerald-500" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title="Remove Provider"
                  onClick={() => handleDelete(p.id, p.name)}
                  className="text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

