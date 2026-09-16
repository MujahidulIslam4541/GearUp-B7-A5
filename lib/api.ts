"use server"

import { fetchApi } from "./api-client"
import { ApiMe, ApiCategory, ApiOrder, ApiPayment, ApiAdminUser } from "@/types/api"
import { GearItem } from "@/types/gear"

export async function getMe() {
  return fetchApi<ApiMe>("/auth/me")
}

export async function getCategories() {
  return fetchApi<ApiCategory[]>("/category", { requiresAuth: false })
}

export async function getGears(params?: Record<string, string | number | undefined>) {
  return fetchApi<GearItem[]>("/gear", { requiresAuth: false, params })
}

export async function getGearById(id: string) {
  return fetchApi<GearItem>(`/gear/${id}`, { requiresAuth: false })
}

export async function createGear(data: { name: string; description: string; price: number; imageUrl: string; brand: string; quantity: number; categoryId: string }) {
  return fetchApi<GearItem>("/gear/create", { method: "POST", body: data })
}

export async function updateGear(id: string, data: Record<string, unknown>) {
  return fetchApi<GearItem>(`/gear/update/${id}`, { method: "PUT", body: data })
}

export async function deleteGear(id: string) {
  return fetchApi(`/gear/delete/${id}`, { method: "DELETE" })
}

export async function createOrder(data: { rentalDate: string; returnDate: string; gearItemId: string }) {
  return fetchApi<ApiOrder>("/order", { method: "POST", body: data })
}

export async function getMyOrders() {
  return fetchApi<ApiOrder[]>("/order")
}

export async function getOrderById(id: string) {
  return fetchApi<ApiOrder>(`/order/${id}`)
}

export async function getProviderOrders() {
  return fetchApi<ApiOrder[]>("/provider/orders")
}

export async function updateProviderOrderStatus(orderId: string, status: string) {
  return fetchApi<ApiOrder>(`/provider/orders/${orderId}`, { method: "PATCH", body: { status } })
}

export async function getAdminUsers() {
  return fetchApi<ApiAdminUser[]>("/admin/users")
}

export async function updateAdminUserStatus(id: string, status: string) {
  return fetchApi(`/admin/user/${id}`, { method: "PATCH", body: { status } })
}

export async function getAdminGears() {
  return fetchApi<GearItem[]>("/admin/gear")
}

export async function getAdminRentals() {
  return fetchApi<ApiOrder[]>("/admin/rentals")
}

export async function createPaymentSession(orderId: string) {
  return fetchApi<{ checkoutUrl: string }>("/payments/create", { method: "POST", body: { orderId } })
}

export async function getMyPayments() {
  return fetchApi<ApiPayment[]>("/payments")
}

export async function createReview(rentalId: string, data: { rating: number; comment: string }) {
  return fetchApi(`/rentals/${rentalId}/reviews`, { method: "POST", body: data })
}

export async function getGearReviews(gearId: string) {
  return fetchApi<{ id: string; rating: number; comment: string; user?: { name: string } }[]>(`/gear/${gearId}/reviews`, { requiresAuth: false })
}
