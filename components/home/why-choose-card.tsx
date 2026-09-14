import { WhyChooseItem } from "@/lib/constants/why-choose-us"
import { cn } from "@/lib/utils"

interface WhyChooseCardProps {
  item: WhyChooseItem
  isLast?: boolean
}

export function WhyChooseCard({ item, isLast }: WhyChooseCardProps) {
  const Icon = item.icon

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md",
        isLast &&
          "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-1 lg:max-w-none"
      )}
    >
      <div>
        <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </div>
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>

      <div className="mt-6 h-0.5 w-8 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
    </div>
  )
}
