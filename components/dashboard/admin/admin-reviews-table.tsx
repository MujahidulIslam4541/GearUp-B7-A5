"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { toast } from "sonner"
import { MOCK_REVIEWS_REPORTS } from "@/lib/constants/dashboard-mock-data"
import { DashboardReviewReport } from "@/types/dashboard"
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

export function AdminReviewsTable() {
  const [reports, setReports] = useState<DashboardReviewReport[]>(MOCK_REVIEWS_REPORTS)

  const handleAction = (id: string, action: "RESOLVED" | "DISMISSED") => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status: action } : r)))
    toast.success(`Report #${id} marked as ${action.toLowerCase()}`)
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Report ID</TableHeaderCell>
          <TableHeaderCell>Target</TableHeaderCell>
          <TableHeaderCell>Reported By</TableHeaderCell>
          <TableHeaderCell>Reason</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Moderation</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {reports.map((r) => (
          <TableRow key={r.id}>
            <TableCell className="font-mono text-xs font-semibold">{r.id}</TableCell>
            <TableCell>
              <div className="font-semibold text-xs text-foreground">{r.targetName}</div>
              <div className="text-[10px] text-muted-foreground uppercase">{r.targetType}</div>
            </TableCell>
            <TableCell className="text-xs">{r.reporterName}</TableCell>
            <TableCell className="text-xs text-muted-foreground max-w-xs truncate">{r.reason}</TableCell>
            <TableCell><StatusBadge status={r.status} /></TableCell>
            <TableCell className="text-right">
              {r.status === "PENDING" ? (
                <div className="flex items-center justify-end gap-1.5">
                  <Button variant="outline" size="xs" className="h-7 text-xs text-emerald-600" onClick={() => handleAction(r.id, "RESOLVED")}>
                    <Check className="mr-1 size-3" /> Resolve
                  </Button>
                  <Button variant="ghost" size="xs" className="h-7 text-xs text-muted-foreground" onClick={() => handleAction(r.id, "DISMISSED")}>
                    <X className="mr-1 size-3" /> Dismiss
                  </Button>
                </div>
              ) : (
                <span className="text-xs text-muted-foreground">Action taken</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

