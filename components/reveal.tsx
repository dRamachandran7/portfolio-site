"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger offset in milliseconds. */
  delay?: number
  as?: "div" | "section" | "li" | "article" | "header"
}

/**
 * Releases its children with a rise-in animation the first time they enter the
 * viewport. Animation itself lives in globals.css under [data-reveal].
 */
function Reveal({
  className,
  delay = 0,
  as: Tag = "div",
  style,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    // Anything already on screen at mount should animate immediately rather
    // than wait for a scroll that may never happen on short pages.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // @ts-expect-error — ref type narrows per tag, all are HTMLElements here
      ref={ref}
      data-reveal=""
      data-visible={visible ? "true" : undefined}
      style={
        { ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Reveal }
