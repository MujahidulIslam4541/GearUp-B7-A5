import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotFoundVisual } from "@/components/not-found/not-found-visual"

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <NotFoundVisual />

      <div className="mt-8 max-w-md">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops! Gear Not Found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Looks like this adventure took a wrong turn. The page you&apos;re
          looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            render={<Link href="/" />}
            size="lg"
            className="w-full gap-2 font-medium sm:w-auto"
          >
            <Home className="size-4" />
            <span>Back to Home</span>
          </Button>

          <Button
            render={<Link href="/gear" />}
            size="lg"
            variant="outline"
            className="w-full gap-2 font-medium sm:w-auto"
          >
            <span>Explore Gear</span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
