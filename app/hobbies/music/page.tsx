import type { Metadata } from "next"

import { HobbyEmptyState } from "@/components/empty-state"

import { hobbies } from "@/lib/hobbies"

const hobby = hobbies.find((h) => h.slug === "music")!

export const metadata: Metadata = {
  title: hobby.label,
  description: hobby.teaser,
}

export default function MusicPage() {
  return (
    <div className="mt-12">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {hobby.label}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {hobby.teaser}
      </p>

      <div className="mt-10">
        <HobbyEmptyState hobby={hobby} />
      </div>
    </div>
  )
}
