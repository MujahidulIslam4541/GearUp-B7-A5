import {
  DashboardUser,
  DashboardProvider,
  DashboardReviewReport,
} from "@/types/dashboard"

export const MOCK_USERS: DashboardUser[] = [
  {
    id: "USR-01",
    name: "Alex Morgan",
    email: "alex.morgan@gearup.io",
    role: "USER",
    status: "ACTIVE",
    totalBookings: 8,
    joinedDate: "2026-03-12",
  },
  {
    id: "USR-02",
    name: "Tariqul Hasan",
    email: "tariqul.h@gmail.com",
    role: "USER",
    status: "ACTIVE",
    totalBookings: 14,
    joinedDate: "2026-04-05",
  },
  {
    id: "USR-03",
    name: "Nusrat Jahan",
    email: "nusrat.jahan@yahoo.com",
    role: "USER",
    status: "ACTIVE",
    totalBookings: 3,
    joinedDate: "2026-06-20",
  },
  {
    id: "USR-04",
    name: "Sabbir Ahmed",
    email: "sabbir.ahmed@outlook.com",
    role: "USER",
    status: "SUSPENDED",
    totalBookings: 2,
    joinedDate: "2026-07-11",
  },
  {
    id: "USR-05",
    name: "Mehnaz Chowdhury",
    email: "mehnaz.c@gmail.com",
    role: "USER",
    status: "PENDING",
    totalBookings: 0,
    joinedDate: "2026-09-10",
  },
]

export const MOCK_PROVIDERS: DashboardProvider[] = [
  {
    id: "PRV-01",
    name: "Peak Adventures",
    email: "peak.adv@gmail.com",
    totalGears: 18,
    totalBookings: 142,
    status: "VERIFIED",
    joinedDate: "2026-01-15",
  },
  {
    id: "PRV-02",
    name: "RiverRun Rentals",
    email: "riverrun@gmail.com",
    totalGears: 12,
    totalBookings: 88,
    status: "VERIFIED",
    joinedDate: "2026-02-10",
  },
  {
    id: "PRV-03",
    name: "Summit Gear Hub",
    email: "summit.hub@gmail.com",
    totalGears: 24,
    totalBookings: 215,
    status: "VERIFIED",
    joinedDate: "2025-11-20",
  },
  {
    id: "PRV-04",
    name: "AquaTrails Co.",
    email: "aquatrails@gmail.com",
    totalGears: 8,
    totalBookings: 39,
    status: "PENDING",
    joinedDate: "2026-08-30",
  },
]

export const MOCK_REVIEWS_REPORTS: DashboardReviewReport[] = [
  {
    id: "REP-101",
    targetType: "GEAR",
    targetName: "Mountain Bike Helmet (Trek)",
    reporterName: "Tariqul Hasan",
    reason: "Damaged strap discovered upon pickup.",
    status: "PENDING",
    createdAt: "2026-09-14T08:15:00Z",
  },
  {
    id: "REP-102",
    targetType: "PROVIDER",
    targetName: "AquaTrails Co.",
    reporterName: "Nusrat Jahan",
    reason: "Late handover by 3 hours without prior notice.",
    status: "RESOLVED",
    createdAt: "2026-09-11T14:40:00Z",
  },
  {
    id: "REP-103",
    targetType: "USER",
    targetName: "Sabbir Ahmed",
    reporterName: "Peak Adventures",
    reason: "Unreturned accessory clamp reported missing.",
    status: "DISMISSED",
    createdAt: "2026-09-08T17:10:00Z",
  },
]

