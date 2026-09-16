"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log unexpected errors
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertTriangle className="size-8" />
      </div>

      <div className="mt-6 max-w-md space-y-2">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Something went wrong
        </h1>
        <p className="text-sm text-muted-foreground">
          {error.message ||
            "An unexpected error occurred while loading this page. Please try again."}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()} className="gap-2">
          <RefreshCw className="size-4" />
          Try Again
        </Button>
        <Button render={<Link href="/" />} variant="outline" className="gap-2">
          <Home className="size-4" />
          Back to Home
        </Button>
      </div>
    </div>
  )
}
