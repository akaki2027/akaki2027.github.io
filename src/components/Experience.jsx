import Reveal from './Reveal'
import { experience } from '../data/site'

export default function Experience() {
  if (!experience.length) return null

  return (
    <section id="experience" className="shell py-24 sm:py-32">
      <Reveal>
        <p className="section-label">03 — Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Where I've worked.</h2>
      </Reveal>

      <ol className="mt-14 space-y-12">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.08}>
            <li className="grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-[200px_1fr] sm:gap-10 dark:border-neutral-800">
              <div>
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <p className="mt-1 text-sm text-neutral-500">{job.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-0.5 text-neutral-500 dark:text-neutral-400">{job.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 leading-relaxed text-neutral-600 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60 dark:text-neutral-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
