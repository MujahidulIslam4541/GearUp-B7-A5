export type UserRole = "USER" | "PROVIDER" | "ADMIN"

export type BookingStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED"

export type PaymentStatus = "PAID" | "PENDING" | "REFUNDED"

export interface DashboardBooking {
  id: string
  gearId: string
  gearName: string
  gearImageUrl: string
  category: string
  customerName: string
  customerEmail: string
  providerName: string
  providerEmail: string
  startDate: string
  endDate: string
  days: number
  dailyRate: number
  totalAmount: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  createdAt: string
}

export interface DashboardUser {
  id: string
  name: string
  email: string
  role: UserRole
  status: "ACTIVE" | "SUSPENDED" | "PENDING"
  totalBookings: number
  joinedDate: string
}

export interface DashboardProvider {
  id: string
  name: string
  email: string
  totalGears: number
  totalBookings: number
  status: "VERIFIED" | "PENDING" | "SUSPENDED"
  joinedDate: string
}

export interface DashboardReviewReport {
  id: string
  targetType: "GEAR" | "PROVIDER" | "USER"
  targetName: string
  reporterName: string
  reason: string
  status: "PENDING" | "RESOLVED" | "DISMISSED"
  createdAt: string
}

export interface TrackingStep {
  status: BookingStatus
  title: string
  description: string
  timestamp?: string
  isCompleted: boolean
  isCurrent: boolean
}

