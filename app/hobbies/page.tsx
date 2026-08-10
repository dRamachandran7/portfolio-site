import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { hobbies } from "@/lib/hobbies"

export const metadata: Metadata = {
  title: "Hobbies",
  description:
    "Music, fitness, and videography — what I spend time on away from the keyboard.",
}

const accentVar = {
  neon: "var(--neon)",
  cyan: "var(--neon-cyan)",
  violet: "var(--neon-violet)",
} as const

/**
 * Short page — the whole grid sits above the fold, so the cards render visible
 * rather than waiting on `Reveal` to hydrate.
 */
export default function HobbiesPage() {
  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-3">
      {hobbies.map((hobby) => {
        const Icon = hobby.icon
        return (
          <li key={hobby.slug}>
            <Link
              href={hobby.href}
              style={
                { "--accent": accentVar[hobby.accent] } as React.CSSProperties
              }
              className="nd-scan group relative flex h-full flex-col gap-12 overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent),transparent_55%)] hover:shadow-[0_18px_50px_-20px_var(--accent)] focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
              />

              <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-[var(--accent)]" />

              <div>
                <h2 className="font-heading text-lg font-semibold tracking-tight">
                  {hobby.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {hobby.teaser}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--accent)]">
                  Take a look
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
