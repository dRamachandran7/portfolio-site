import { cn } from "@/lib/utils"

type PageHeaderProps = {
  index: string
  title: string
  lede?: string
  className?: string
}

/**
 * Shared editorial header: numbered eyebrow, oversized title, hairline rule.
 * Always above the fold, so it renders visible in the static HTML rather than
 * waiting on `Reveal` to hydrate — this is the LCP element on its page.
 */
function PageHeader({ index, title, lede, className }: PageHeaderProps) {
  return (
    <header className={cn("relative z-10", className)}>
      <p className="eyebrow">{index}</p>
      <h1 className="mt-4 font-heading text-4xl leading-[0.95] font-bold sm:text-6xl">
        {title}
      </h1>
      <div className="rule mt-7" />
      {lede && (
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lede}
        </p>
      )}
    </header>
  )
}

export { PageHeader }
