"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

export const FALLBACK_GEAR_IMAGE = "/images/gear-placeholder.svg"

export function isValidImageUrl(url?: string | null): boolean {
  if (!url || typeof url !== "string") return false
  const trimmed = url.trim()
  if (trimmed.length < 5) return false
  return (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("data:image/")
  )
}

interface SafeImageProps extends Omit<ImageProps, "src" | "onError"> {
  src?: string | null
  fallbackSrc?: string
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = FALLBACK_GEAR_IMAGE,
  className,
  ...rest
}: SafeImageProps) {
  const isInputValid = isValidImageUrl(src)
  const initial = isInputValid && src ? src.trim() : fallbackSrc
  const [currentSrc, setCurrentSrc] = useState<string>(initial)
  const [hasError, setHasError] = useState(!isInputValid)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setCurrentSrc(fallbackSrc)
    }
  }

  return (
    <Image
      {...rest}
      src={hasError ? fallbackSrc : currentSrc}
      alt={alt || "Gear image"}
      unoptimized
      className={className}
      onError={handleError}
    />
  )
}
