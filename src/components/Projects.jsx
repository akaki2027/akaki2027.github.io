import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Hammer } from 'lucide-react'
import { Github } from './BrandIcons'
import Reveal from './Reveal'
import { projects } from '../data/projects'
import { links } from '../data/site'

const ALL = 'All'

/** Placeholder tile for projects that don't have an image yet. */
function Monogram({ title }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      <span className="font-mono text-5xl font-semibold text-neutral-300 dark:text-neutral-700">{initials}</span>
    </div>
  )
}

function ProjectCard({ project }) {
  const { title, badge, blurb, image, tech = [], repo, demo, featured } = project

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[2.4/1]' : 'aspect-[16/10]'}`}>
        {image ? (
          <img
            src={`${import.meta.env.BASE_URL}projects/${image}`}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Monogram title={title} />
        )}

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-neutral-950/85 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-neutral-600 dark:text-neutral-400">{blurb}</p>

        {tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {(repo || demo) && (
          <div className="mt-6 flex items-center gap-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400"
              >
                <Github size={15} /> Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400"
              >
                <ArrowUpRight size={15} /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

/** Shown until the first project lands in src/data/projects.js. */
function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-neutral-300 px-8 py-20 text-center dark:border-neutral-800">
      <Hammer className="mx-auto text-neutral-300 dark:text-neutral-700" size={30} />
      <p className="mt-5 text-lg font-medium">Projects are being packaged up right now.</p>
      <p className="mx-auto mt-2 max-w-md leading-relaxed text-neutral-500 dark:text-neutral-500">
        I'm cleaning up repos and writing proper documentation before putting them here. In the meantime, the
        works-in-progress live on GitHub.
      </p>
      <a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
      >
        <Github size={16} /> View GitHub
      </a>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL)

  // Filter buttons come from the tags actually used, so this needs no maintenance.
  const tags = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.tags ?? []))
    return [ALL, ...[...set].sort()]
  }, [])

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => (p.tags ?? []).includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="shell py-24 sm:py-32">
      <Reveal>
        <p className="section-label">02 — Projects</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Things I've built.</h2>
          {projects.length > 0 && (
            <p className="font-mono text-sm text-neutral-400">
              {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            </p>
          )}
        </div>
      </Reveal>

      {projects.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="mt-12">
            <EmptyState />
          </div>
        </Reveal>
      ) : (
        <>
          {tags.length > 2 && (
            <Reveal delay={0.08}>
              <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    aria-pressed={filter === tag}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      filter === tag
                        ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                        : 'border border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:text-neutral-400'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </section>
  )
}
