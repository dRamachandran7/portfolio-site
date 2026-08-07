import Link from "next/link"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { experience, marqueeItems, profile, projects } from "@/lib/content"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Above the fold — renders visible in the static HTML, no JS gate. */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-32 sm:pb-32">
        <p className="eyebrow">
          {profile.location}
          <span className="mx-3 text-neon">/</span>
          Purdue CS &rsquo;28
        </p>

        <h1 className="mt-7 font-heading text-[clamp(2.6rem,8.5vw,6.5rem)] leading-[0.92] font-bold">
          <span className="text-foreground">I build systems</span>
          <br />
          <span className="text-foreground/90">that do the</span>
          <br />
          <span className="text-foreground/90">boring parts.</span>
        </h1>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-xl px-6 text-sm shadow-[0_14px_40px_-14px_var(--neon)] transition-transform hover:-translate-y-0.5"
            nativeButton={false}
            render={<Link href="/projects" />}
          >
            See the work
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 gap-2 rounded-xl px-6 text-sm"
            nativeButton={false}
            render={
              <a href={profile.resumePath} target="_blank" rel="noreferrer" />
            }
          >
            <Download className="size-4" />
            Résumé
          </Button>
        </div>
      </div>

      {/* Skills ticker — pauses on hover/focus. */}
      <div className="nd-marquee relative overflow-hidden border-y border-border py-4">
        <ul
          className="nd-marquee-track flex w-max items-center gap-10"
          aria-label="Technologies I work with"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= marqueeItems.length}
              className="flex items-center gap-10 font-mono text-xs tracking-[0.2em] whitespace-nowrap text-muted-foreground uppercase"
            >
              {item}
              <span className="size-1 rounded-full bg-neon/60" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SelectedWork() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">01 &mdash; Selected work</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Three things I shipped.
          </h2>
        </div>
        <Link
          href="/projects"
          className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>

      <div className="rule mt-8" />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </section>
  )
}

function Currently() {
  const job = experience[0]

  return (
    <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal className="grid gap-10 rounded-2xl border border-border bg-card/40 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div>
          <p className="eyebrow">02 &mdash; Currently</p>
          <h2 className="mt-4 font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
            {job.role}
          </h2>
          <p className="mt-2 text-sm text-neon-cyan">{job.org}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {job.period}
          </p>
        </div>
        <ul className="flex flex-col gap-5">
          {job.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-neon"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Currently />
    </>
  )
}
