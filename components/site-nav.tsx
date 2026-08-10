"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

const tabs = [
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/about", label: "About" },
] as const

function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled &&
          "border-b border-border bg-background/72 backdrop-blur-xl backdrop-saturate-150"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Link
          href="/"
          className="flex items-center rounded-sm focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
        >
          <span className="font-heading text-sm font-semibold tracking-tight">
            Home
          </span>
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {tabs.map((tab) => (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive(tab.href) ? "page" : undefined}
                className={cn(
                  "relative flex h-9 items-center rounded-lg px-3.5 text-sm transition-colors",
                  "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none",
                  isActive(tab.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                {isActive(tab.href) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-px bg-neon shadow-[0_0_10px_1px_var(--neon)]"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-50 bg-background/96 backdrop-blur-xl sm:hidden"
        >
          <ul className="flex flex-col gap-1 px-5 py-6">
            {tabs.map((tab, i) => (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(tab.href) ? "page" : undefined}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={cn(
                    "flex min-h-12 items-center justify-between border-b border-border py-3",
                    "font-heading text-2xl tracking-tight",
                    isActive(tab.href) ? "text-neon" : "text-foreground"
                  )}
                >
                  {tab.label}
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export { SiteNav }
