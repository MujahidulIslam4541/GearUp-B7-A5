"use server"

import { cookies } from "next/headers"
import { ApiResponse } from "@/types/api"

const BASE_URL =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL

export interface FetchApiOptions extends Omit<RequestInit, "headers" | "body"> {
  headers?: Record<string, string>
  requiresAuth?: boolean
  params?: Record<string, string | number | undefined>
  body?: BodyInit | Record<string, unknown> | unknown[] | null
}

export async function fetchApi<T = unknown>(
  endpoint: string,
  options: FetchApiOptions = {}
): Promise<ApiResponse<T>> {
  const { requiresAuth = true, headers: customHeaders = {}, params, body, ...rest } = options

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  const searchParams = new URLSearchParams()
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "") searchParams.set(k, String(v))
    })
  }
  const qs = searchParams.toString() ? `?${searchParams.toString()}` : ""
  const url = `${BASE_URL}${cleanEndpoint}${qs}`

  const isFormData = typeof FormData !== "undefined" && body instanceof FormData
  
  const headers: Record<string, string> = {
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...customHeaders,
  }

  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value
  const refreshToken = cookieStore.get("refreshToken")?.value

  if (requiresAuth && !accessToken) {
    return { success: false, statusCode: 401, message: "Unauthorized: Please sign in." }
  }

  const cookiesArr = [
    accessToken ? `accessToken=${accessToken}` : "",
    refreshToken ? `refreshToken=${refreshToken}` : "",
  ].filter(Boolean)
  if (cookiesArr.length > 0) headers["Cookie"] = cookiesArr.join("; ")
  if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`

  try {
    const res = await fetch(url, {
      ...rest,
      headers,
      body: isFormData || typeof body === "string" || !body ? (body as BodyInit) : JSON.stringify(body),
      cache: "no-store",
    })

    const json = await res.json().catch(() => null)
    const isSuccess = res.ok && json?.success !== false

    return {
      success: isSuccess,
      statusCode: res.status,
      message: json?.message || (isSuccess ? "Success" : "Request failed"),
      data: isSuccess ? (json?.data ?? (json as T)) : undefined,
      meta: json?.meta,
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error instanceof Error ? error.message : "Network error",
    }
  }
}
