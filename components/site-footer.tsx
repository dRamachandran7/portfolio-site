import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

import { profile } from "@/lib/content"

const elsewhere = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
] as const

function SiteFooter() {
  return (
    <footer className="relative z-10 mt-28 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <p className="eyebrow">Get in touch</p>
            <p className="mt-3 font-heading text-2xl tracking-tight sm:text-3xl">
              Building something?{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-neon underline decoration-neon/40 underline-offset-4 transition-colors hover:decoration-neon"
              >
                Let&rsquo;s talk.
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {profile.location} &middot;{" "}
              <a
                href={`tel:${profile.phone.replace(/-/g, "")}`}
                className="transition-colors hover:text-foreground"
              >
                {profile.phone}
              </a>
            </p>
          </div>

          <ul className="flex flex-col gap-1">
            {elsewhere.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex min-h-11 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                  <span>{label}</span>
                  <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <Link
            href={profile.resumePath}
            prefetch={false}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-neon"
          >
            Résumé (PDF) &darr;
          </Link>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
