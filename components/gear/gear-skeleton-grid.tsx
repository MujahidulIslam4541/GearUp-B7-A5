export function GearSkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-4/3 w-full animate-pulse bg-muted" />
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-16 animate-pulse rounded bg-muted" />
            <div className="h-3 w-16 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
          <div className="h-3 w-full animate-pulse rounded bg-muted" />
        </div>
        <div className="flex items-center justify-between border-t border-border/80 pt-2">
          <div className="space-y-1">
            <div className="h-2.5 w-10 animate-pulse rounded bg-muted" />
            <div className="h-5 w-16 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  )
}

export function GearSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <GearSkeletonCard key={i} />
      ))}
    </div>
  )
}
