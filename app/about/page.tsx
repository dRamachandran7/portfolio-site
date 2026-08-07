import type { Metadata } from "next"
import { Download, Mail } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  certifications,
  education,
  experience,
  profile,
  skills,
} from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: `${profile.role} studying Computer Science at Purdue. Experience, education, skills, and certifications.`,
}

/** Two-column row: monospace label on the left, content on the right. */
function Row({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10">
      <h2 className="eyebrow sm:pt-1.5">{label}</h2>
      <div>{children}</div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-4xl px-5 pt-20 pb-8 sm:px-8 sm:pt-28">
        <PageHeader index="About" title={profile.name} lede={profile.intro} />

        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="h-11 gap-2 rounded-xl px-5 text-sm"
            nativeButton={false}
            render={
              <a href={profile.resumePath} target="_blank" rel="noreferrer" />
            }
          >
            <Download className="size-4" />
            Download résumé
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 gap-2 rounded-xl px-5 text-sm"
            nativeButton={false}
            render={
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              />
            }
          >
            <GithubIcon className="size-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 gap-2 rounded-xl px-5 text-sm"
            nativeButton={false}
            render={
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              />
            }
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 gap-2 rounded-xl px-5 text-sm"
            nativeButton={false}
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail className="size-4" />
            {profile.email}
          </Button>
        </div>

        <div className="mt-24 flex flex-col gap-20">
          {/* Experience */}
          <Reveal as="section">
            <div className="rule mb-9" />
            <Row label="Experience">
              <ul className="flex flex-col gap-12">
                {experience.map((job) => (
                  <li key={job.org}>
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="mt-1.5 text-sm text-neon-cyan">{job.org}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {job.period} &middot; {job.location}
                    </p>
                    <ul className="mt-5 flex flex-col gap-4">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-4">
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-neon"
                          />
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Row>
          </Reveal>

          {/* Education */}
          <Reveal as="section">
            <div className="rule mb-9" />
            <Row label="Education">
              <ul className="flex flex-col gap-12">
                {education.map((school) => (
                  <li key={school.school}>
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {school.school}
                    </h3>
                    <p className="mt-1.5 text-sm text-foreground/80">
                      {school.credential}
                      {school.detail && (
                        <span className="text-muted-foreground">
                          {" "}
                          &middot; {school.detail}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {school.period} &middot; {school.location}
                    </p>
                    {school.courses.length > 0 && (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {school.courses.map((course) => (
                          <li
                            key={course}
                            className="rounded-lg border border-border bg-card/40 px-3.5 py-2.5 font-mono text-xs text-muted-foreground"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Row>
          </Reveal>

          {/* Skills */}
          <Reveal as="section">
            <div className="rule mb-9" />
            <Row label="Skills">
              <ul className="flex flex-col gap-9">
                {skills.map((group) => (
                  <li key={group.group}>
                    <h3 className="text-sm font-medium text-foreground/80">
                      {group.group}
                    </h3>
                    <ul className="mt-3.5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-card/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-input hover:text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Row>
          </Reveal>

          {/* Certifications */}
          <Reveal as="section">
            <div className="rule mb-9" />
            <Row label="Certifications">
              <ul className="flex flex-col gap-6">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex flex-col gap-1 border-b border-border pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-sm leading-relaxed font-medium text-foreground/90">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {cert.issuer} &middot; {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </Row>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
