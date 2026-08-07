import type { Metadata } from "next"
import { Chivo, JetBrains_Mono, Unbounded } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/content"
import { cn } from "@/lib/utils"

// Display: wide geometric, carries the headline weight.
const fontHeading = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
})

// Body: grotesk with warmth, sized for long-form reading.
const fontSans = Chivo({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
})

// Technical layer: indices, metadata, labels.
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark antialiased",
        fontHeading.variable,
        fontSans.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        {/* Night Drive is a dark-only aesthetic — no light counterpart. */}
        <ThemeProvider forcedTheme="dark" enableSystem={false}>
          <a
            href="#main"
            className="sr-only rounded-lg bg-neon px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
          >
            Skip to content
          </a>
          <SiteNav />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
