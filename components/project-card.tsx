import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/reveal"
import type { Project } from "@/lib/content"

const accentVar = {
  neon: "var(--neon)",
  cyan: "var(--neon-cyan)",
  violet: "var(--neon-violet)",
} as const

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accentVar[project.accent]

  return (
    <Reveal as="li" delay={index * 90}>
      <Link
        href={`/projects/${project.slug}`}
        style={{ "--accent": accent } as React.CSSProperties}
        className="nd-scan group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent),transparent_55%)] hover:shadow-[0_18px_50px_-20px_var(--accent)] focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:p-8"
      >
        {/* Accent hairline along the top edge, revealed on hover. */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Corner bloom */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        />

        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h2 className="mt-6 font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-[1.75rem]">
          {project.title}
        </h2>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.blurb}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
          Read the write-up
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  )
}

export { ProjectCard }
