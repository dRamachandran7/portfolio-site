import type { Metadata } from "next"

import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Agentic pipelines, retrieval systems, and a shipped iOS app — with write-ups on how each one works.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-20 pb-8 sm:px-8 sm:pt-28">
      <PageHeader
        index="Projects"
        title="Things I've built and shipped."
        lede="Each one started as a problem I actually had. The write-ups cover what broke, what I changed, and what I'd do differently."
      />

      <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </div>
  )
}
