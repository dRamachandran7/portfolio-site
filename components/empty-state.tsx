import { ArrowUpRight } from "lucide-react"

import type { Hobby } from "@/lib/hobbies"
import { profile } from "@/lib/content"

const accentVar = {
  neon: "var(--neon)",
  cyan: "var(--neon-cyan)",
  violet: "var(--neon-violet)",
} as const

/**
 * Placeholder shown on each hobby page until real content is added. Renders
 * visible in the static HTML — these pages are short enough that everything
 * sits above the fold, so nothing here is gated on `Reveal` hydrating.
 */
function HobbyEmptyState({ hobby }: { hobby: Hobby }) {
  const accent = accentVar[hobby.accent]
  const Icon = hobby.icon

  return (
    <div
      style={{ "--accent": accent } as React.CSSProperties}
      className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 sm:p-12"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-40"
      />

      <Icon className="size-6 text-[var(--accent)]" />

      <h2 className="mt-7 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {hobby.emptyTitle}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {hobby.emptyBody}
      </p>

      <ul className="mt-10 flex flex-col">
        {hobby.slots.map((slot) => (
          <li
            key={slot}
            className="flex items-center justify-between gap-4 border-t border-border py-4"
          >
            <span className="text-sm text-muted-foreground">{slot}</span>
            <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground uppercase">
              Soon
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm text-[var(--accent)]"
      >
        Ask me about {hobby.label.toLowerCase()}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  )
}

export { HobbyEmptyState }
