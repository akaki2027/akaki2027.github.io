import Reveal from './Reveal'
import { aboutObject, aboutParagraphs, stats, techStack } from '../data/site'

export default function About() {
  return (
    <section id="about" className="shell py-24 sm:py-32">
      <Reveal>
        <p className="section-label">01 — About</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A little more than the résumé says.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-[17px] leading-relaxed text-neutral-600 dark:text-neutral-400">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-3xl font-semibold tracking-tight text-accent">{value}</dt>
                  <dd className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="ml-2 font-mono text-xs text-neutral-400">aditya.js</span>
            </div>

            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-neutral-400">const</span>{' '}
                <span className="text-accent">aditya</span>{' '}
                <span className="text-neutral-400">= {'{'}</span>
                {'\n'}
                {Object.entries(aboutObject).map(([k, v]) => (
                  <span key={k}>
                    {'  '}
                    <span className="text-neutral-500 dark:text-neutral-400">{k}</span>
                    <span className="text-neutral-400">: </span>
                    <span className="text-emerald-600 dark:text-emerald-400">{v}</span>
                    <span className="text-neutral-400">,</span>
                    {'\n'}
                  </span>
                ))}
                <span className="text-neutral-400">{'}'}</span>
              </code>
            </pre>
          </div>

          <div className="mt-8 space-y-6">
            {techStack.map(({ group, items }) => (
              <div key={group}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">{group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-neutral-100 px-2.5 py-1 text-[13px] text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
