import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-32 sm:px-8 sm:py-44">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 font-heading text-[clamp(2.5rem,10vw,5rem)] leading-[0.95] font-bold">
        Dead end.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
        That page doesn&rsquo;t exist &mdash; it may have moved, or the link was
        wrong.
      </p>
      <Button
        size="lg"
        className="mt-9 h-11 gap-2 rounded-xl px-5 text-sm"
        nativeButton={false}
        render={<Link href="/" />}
      >
        <ArrowLeft className="size-4" />
        Back home
      </Button>
    </div>
  )
}
