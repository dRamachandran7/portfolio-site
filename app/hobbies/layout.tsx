import { HobbiesSubNav } from "@/components/sub-nav"

export default function HobbiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative">
      {/* Above the fold — renders visible in the static HTML, no JS gate. */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-20 pb-8 sm:px-8 sm:pt-28">
        <header className="relative z-10">
          <p className="eyebrow">Hobbies</p>
          <h1 className="mt-4 font-heading text-4xl leading-[0.95] font-bold sm:text-6xl">
            The rest of it.
          </h1>
        </header>

        <div className="mt-10">
          <HobbiesSubNav />
        </div>

        {children}
      </div>
    </div>
  )
}
