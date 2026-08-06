import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Hammer } from 'lucide-react'
import { Github } from './BrandIcons'
import Reveal from './Reveal'
import { projects } from '../data/projects'
import { categories, links } from '../data/site'

const ALL = 'All'

// How many cards show before the "See more" button. Matches the reference site's
// behaviour of revealing a first batch and hiding the rest behind an expander.
const INITIAL_COUNT = 4

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
  const { title, badge, blurb, image, tech = [], repo, demo, demoLabel, featured } = project

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`overflow-hidden ${featured ? 'aspect-[2.4/1]' : 'aspect-[16/10]'}`}>
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
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          {badge && (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">{badge}</span>
          )}
        </div>

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
                <ArrowUpRight size={15} /> {demoLabel ?? 'Live'}
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
  const [expanded, setExpanded] = useState(false)

  // Buttons follow the order defined in site.js, but a category only earns one
  // once a project actually uses it, so there are no dead filters.
  const activeCategories = useMemo(() => {
    const used = new Set(projects.flatMap((p) => p.tags ?? []))
    return [ALL, ...categories.filter((c) => used.has(c))]
  }, [])

  const matching = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => (p.tags ?? []).includes(filter))),
    [filter],
  )

  // Collapse again when the filter changes, so "See more" always refers to the
  // list currently on screen.
  useEffect(() => setExpanded(false), [filter])

  const visible = expanded ? matching : matching.slice(0, INITIAL_COUNT)
  const remaining = matching.length - visible.length

  return (
    <section id="projects" className="shell py-24 sm:py-32">
      <Reveal>
        <p className="section-label">02 / Projects</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Things I've built.</h2>
          {projects.length > 0 && (
            <p className="font-mono text-sm text-neutral-400">
              {matching.length} {matching.length === 1 ? 'project' : 'projects'}
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
          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {activeCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    filter === cat
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                      : 'border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Deliberately no AnimatePresence exit animation here. An exit would make
              a card's removal wait on an animation finishing, and rAF is throttled
              to zero in background tabs, so filtered-out cards would linger. Cards
              animate in and reflow via `layout`; removal is immediate. */}
          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </motion.div>

          {remaining > 0 && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setExpanded(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
              >
                See more
                <span className="text-neutral-400">({remaining} more)</span>
                <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}
