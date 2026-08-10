import type { LucideIcon } from "lucide-react"
import { Dumbbell, Film, Music } from "lucide-react"

export type Hobby = {
  slug: string
  label: string
  href: string
  icon: LucideIcon
  accent: "neon" | "cyan" | "violet"
  /** Shown on the hobbies index card. */
  teaser: string
  /** Empty-state heading and body, until real content lands. */
  emptyTitle: string
  emptyBody: string
  /** Placeholder rows so the layout reads as a real index, not a blank page. */
  slots: readonly string[]
}

export const hobbies: readonly Hobby[] = [
  {
    slug: "music",
    label: "Music",
    href: "/hobbies/music",
    icon: Music,
    accent: "neon",
    teaser: "What I'm listening to and why",
    emptyTitle: "Nothing published yet",
    emptyBody:
      "Tracks, recordings, and the gear behind them are going here. Check back — or reach out and I'll send you something early.",
    slots: ["Recordings", "Instruments", "On repeat"],
  },
  {
    slug: "fitness",
    label: "Fitness",
    href: "/hobbies/fitness",
    icon: Dumbbell,
    accent: "cyan",
    teaser: "Training splits, numbers I'm chasing, and what's working.",
    emptyTitle: "Nothing published yet",
    emptyBody:
      "Current programming, lift numbers, and notes on what actually moved the needle are going here.",
    slots: ["Current split", "Lift log", "Notes"],
  },
  {
    slug: "videography",
    label: "Videography",
    href: "/hobbies/videography",
    icon: Film,
    accent: "violet",
    teaser: "Shoots, edits, and the pieces I'm proud of.",
    emptyTitle: "Nothing published yet",
    emptyBody:
      "Finished edits, behind-the-scenes stills, and the kit I shoot on are going here.",
    slots: ["Reel", "Selected edits", "Kit"],
  },
] as const
