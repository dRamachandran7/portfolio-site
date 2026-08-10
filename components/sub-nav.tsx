"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { hobbies } from "@/lib/hobbies"

const items = [{ href: "/hobbies", label: "Overview" }, ...hobbies] as const

/** Horizontal sub-tab rail for the hobbies section. Scrolls on narrow screens. */
function HobbiesSubNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Hobbies sections"
      className="relative z-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      <ul className="flex w-max min-w-full items-center gap-1 border-b border-border">
        {items.map((item) => {
          const active = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex min-h-11 items-center px-4 pb-3 text-sm whitespace-nowrap transition-colors",
                  "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-neon shadow-[0_0_12px_1px_var(--neon)]"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { HobbiesSubNav }
