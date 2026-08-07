import { techStack } from '../data/site'

// One flat list, duplicated, so the CSS marquee can loop seamlessly at -50%.
const all = techStack.flatMap((g) => g.items)

export default function TechStack() {
  return (
    <section className="border-y border-neutral-200 py-6 dark:border-neutral-800">
      <div className="marquee relative overflow-hidden">
        {/* fade the edges so items don't pop in and out abruptly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />

        <ul className="marquee-track flex w-max items-center gap-10" aria-label="Technologies I work with">
          {[...all, ...all].map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= all.length}
              className="whitespace-nowrap font-mono text-xs tracking-wide text-neutral-500 uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
