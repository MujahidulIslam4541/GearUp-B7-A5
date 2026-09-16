export interface ApiResponse<T = unknown> {
  success: boolean
  statusCode: number
  message: string
  data?: T
  meta?: {
    page: number
    limit: number
    totalPage: number
  }
}

export interface ApiMe {
  id: string
  name: string
  email: string
  role: string
  status: string
}

export interface ApiCategory {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ApiOrder {
  id: string
  rentalDate: string
  returnDate: string
  totalAmount: number
  status: string
  customerId: string
  gearItemId: string
  createdAt?: string
  updatedAt?: string
  customer?: { name: string; email: string }
  gearItem?: { name: string; imageUrl: string; brand: string; price?: string | number }
}

export interface ApiPayment {
  id: string
  amount: number
  status: string
  createdAt: string
  updatedAt: string
  stripeSessionId: string
  stripePaymentIntentId?: string | null
  rentalOrderId: string
  rentalOrder?: {
    gearItem?: { name: string }
    rentalDate: string
    returnDate: string
  }
}

export interface ApiAdminUser {
  id: string
  name: string
  email: string
  role: string
  status: string
  createdAt: string
  updatedAt: string
}
