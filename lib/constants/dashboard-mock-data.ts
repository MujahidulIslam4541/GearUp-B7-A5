import { ALL_GEAR } from "@/lib/constants/gear"
import {
  MOCK_BOOKINGS,
  MOCK_TRACKING_STEPS,
} from "./dashboard-mock-bookings"
import {
  MOCK_USERS,
  MOCK_PROVIDERS,
  MOCK_REVIEWS_REPORTS,
} from "./dashboard-mock-users"

export {
  MOCK_BOOKINGS,
  MOCK_TRACKING_STEPS,
  MOCK_USERS,
  MOCK_PROVIDERS,
  MOCK_REVIEWS_REPORTS,
}

export const USER_STATS = {
  totalBookings: 8,
  activeRentals: 1,
  completedRentals: 6,
  upcomingBooking: "Sep 25, 2026",
}

export const PROVIDER_STATS = {
  totalGears: 18,
  availableGears: 14,
  activeBookings: 3,
  totalRevenue: "৳ 84,500",
}

export const ADMIN_STATS = {
  totalUsers: 1420,
  totalProviders: 84,
  totalGears: ALL_GEAR.length,
  totalBookings: 3240,
  activeRentals: 38,
  reportedItems: 3,
}

export const PROVIDER_GEARS = ALL_GEAR.slice(0, 6)

