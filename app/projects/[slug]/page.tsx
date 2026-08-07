import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { GithubIcon } from "@/components/brand-icons"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/content"

const accentVar = {
  neon: "var(--neon)",
  cyan: "var(--neon-cyan)",
  violet: "var(--neon-violet)",
} as const

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.blurb,
    openGraph: { title: project.title, description: project.blurb },
  }
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) notFound()

  const accent = accentVar[project.accent]
  const next = projects[(index + 1) % projects.length]

  return (
    <article
      style={{ "--accent": accent } as React.CSSProperties}
      className="relative"
    >
      <div className="mx-auto w-full max-w-4xl px-5 pt-14 sm:px-8 sm:pt-20">
        <Link
          href="/projects"
          className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {project.period}
            </span>
          </div>

          <h1 className="mt-6 font-heading text-[clamp(2.1rem,6.5vw,4rem)] leading-[0.98] font-bold">
            {project.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 gap-2 rounded-xl px-5 text-sm"
              nativeButton={false}
              render={
                <a href={project.repoUrl} target="_blank" rel="noreferrer" />
              }
            >
              <GithubIcon className="size-4" />
              View source
              <ArrowUpRight className="size-3.5" />
            </Button>
          </div>
        </header>

        <Reveal delay={100} className="mt-14">
          <div className="rule" />
          <dl className="grid gap-8 pt-8 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <dt className="eyebrow pt-1">Stack</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-card/50 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </Reveal>

        {/* Narrative sections */}
        <div className="mt-20 flex flex-col gap-16">
          {project.detail.map((section, i) => (
            <Reveal
              as="section"
              key={section.heading}
              delay={i * 70}
              className="grid gap-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
            >
              <h2 className="eyebrow sm:pt-1.5">{section.heading}</h2>
              <p className="max-w-2xl text-base leading-[1.75] text-foreground/80">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Résumé-accurate summary of what was delivered */}
        <Reveal className="mt-20">
          <div className="rule" />
          <h2 className="eyebrow mt-8">What I delivered</h2>
          <ul className="mt-7 flex flex-col gap-6">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-5">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Next project */}
        <Reveal className="mt-24">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-input focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:p-9"
          >
            <span>
              <span className="eyebrow">Next project</span>
              <span className="mt-3 block font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {next.title}
              </span>
            </span>
            <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon" />
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
