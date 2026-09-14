export interface GearProvider {
  name: string
  email: string
}

export interface GearCategory {
  name: string
}

export interface GearItem {
  id: string
  name: string
  description: string
  price: string
  imageUrl: string
  brand: string
  quantity: number
  createdAt: string
  updatedAt: string
  providerId: string
  categoryId: string
  provider: GearProvider
  category: GearCategory
}

export interface GearApiResponse {
  success: boolean
  statusCode: number
  message: string
  data: GearItem[]
  meta?: {
    page: number
    limit: number
    totalPage: number
  }
}
