import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Hammer } from 'lucide-react'
import { Github } from './BrandIcons'
import SectionHead from './SectionHead'
import { projects } from '../data/projects'
import { categories, links } from '../data/site'

const ALL = 'All'
const INITIAL_COUNT = 6

/** Placeholder tile for projects that don't have an image yet. */
function Monogram({ title }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <span className="display text-6xl text-neutral-300 dark:text-neutral-700">{initials}</span>
    </div>
  )
}

function ProjectCard({ project }) {
  const { title, badge, blurb, image, metric, tech = [], repo, demo, demoLabel, featured } = project

  return (
    <motion.article
      layout
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-600 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`overflow-hidden ${featured ? 'aspect-[2.4/1]' : 'aspect-[16/10]'}`}>
        {image ? (
          <img
            src={`${import.meta.env.BASE_URL}projects/${image}`}
            alt={`${title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <Monogram title={title} />
        )}
      </div>

      {/* The measured value gets its own band on the scale. It is the most
          persuasive thing on the card, so it is not buried in the prose. */}
      {metric && (
        <div className="flex items-baseline gap-2.5 border-b border-neutral-100 px-6 pt-5 pb-4 dark:border-neutral-800">
          <span className="measure text-2xl text-accent">{metric.value}</span>
          <span className="font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
            {metric.label}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <h3 className="display text-2xl">{title}</h3>
          {badge && (
            <span className="font-mono text-[11px] tracking-wide text-neutral-400 uppercase">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-3 max-w-[68ch] flex-1 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {blurb}
        </p>

        {tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-neutral-500">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        {(repo || demo) && (
          <div className="mt-5 flex items-center gap-5 border-t border-neutral-100 pt-1.5 dark:border-neutral-800">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 py-2.5 text-sm text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400"
              >
                <Github size={15} /> Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 py-2.5 text-sm text-neutral-600 transition-colors hover:text-accent dark:text-neutral-400"
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
    <div className="rounded-xl border border-dashed border-neutral-300 px-8 py-20 text-center dark:border-neutral-800">
      <Hammer className="mx-auto text-neutral-300 dark:text-neutral-700" size={30} />
      <p className="mt-5 text-lg font-medium">Projects are being packaged up right now.</p>
      <p className="mx-auto mt-2 max-w-md leading-relaxed text-neutral-500">
        I'm cleaning up repos and writing proper documentation before putting them here. In the
        meantime, the works-in-progress live on GitHub.
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

  useEffect(() => setExpanded(false), [filter])

  const visible = expanded ? matching : matching.slice(0, INITIAL_COUNT)
  const remaining = matching.length - visible.length

  return (
    <section id="projects" className="shell py-24 sm:py-32">
      <SectionHead
        title="Things I've built."
        aside={
          projects.length > 0
            ? `${matching.length} ${matching.length === 1 ? 'project' : 'projects'}`
            : undefined
        }
      />

      {projects.length === 0 ? (
        <div className="mt-12">
          <EmptyState />
        </div>
      ) : (
        <>
          {/* Filters read as a legend on the scale, not as pill buttons. */}
          <div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className="group/f py-2.5 font-mono text-xs tracking-wide uppercase"
              >
                <span
                  className={`border-b pb-1 transition-colors ${
                    filter === cat
                      ? 'border-accent text-accent'
                      : 'border-transparent text-neutral-500 group-hover/f:text-neutral-900 dark:group-hover/f:text-neutral-100'
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>

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
