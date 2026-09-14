"use client"

import { useState } from "react"
import Image from "next/image"
import { Mountain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GearCardImageProps {
  imageUrl: string
  name: string
  categoryName: string
  isAvailable: boolean
}

export function GearCardImage({
  imageUrl,
  name,
  categoryName,
  isAvailable,
}: GearCardImageProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
      {!imgError ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 bg-muted/60 text-muted-foreground">
          <Mountain className="size-10 text-primary/40" />
          <span className="text-xs font-medium">{name}</span>
        </div>
      )}

      <div className="absolute top-3 left-3 flex gap-1.5">
        <Badge
          variant="secondary"
          className="bg-background/80 text-xs font-medium capitalize backdrop-blur-md"
        >
          {categoryName}
        </Badge>
      </div>
      <div className="absolute top-3 right-3">
        <Badge
          variant={isAvailable ? "default" : "destructive"}
          className="text-[11px] font-semibold tracking-wide uppercase"
        >
          {isAvailable ? "Available" : "Booked"}
        </Badge>
      </div>
    </div>
  )
}
