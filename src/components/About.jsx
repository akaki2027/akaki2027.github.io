import SectionHead from './SectionHead'
import PhotoGallery from './PhotoGallery'
import { aboutParagraphs, stats, techStack } from '../data/site'

export default function About() {
  return (
    <section id="about" className="shell py-24 sm:py-32">
      <SectionHead title="A little more than the résumé says." />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            // Body measure capped so lines stay in the readable 65-75ch band.
            <p
              key={i}
              className="max-w-[68ch] text-[17px] leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              {p}
            </p>
          ))}

          {/* Figures sit on a scale rather than in tiles. Tabular mono keeps the
              numbers aligned; the label sits under its own tick. */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="measure text-3xl text-accent sm:text-4xl">{value}</dt>
                <dd className="mt-1.5 font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-8">
          {techStack.map(({ group, items }) => (
            <div key={group}>
              <h3 className="font-mono text-[11px] tracking-wide text-neutral-400 uppercase">
                {group}
              </h3>
              <ul className="mt-3 border-t border-neutral-200 pt-3 dark:border-neutral-800 flex flex-wrap gap-x-4 gap-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-[15px] text-neutral-600 dark:text-neutral-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <PhotoGallery />
    </section>
  )
}
