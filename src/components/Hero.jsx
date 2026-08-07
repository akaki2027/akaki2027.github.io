import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import TickRule from './TickRule'
import Typewriter from './Typewriter'
import { links, site, typewriterPhrases } from '../data/site'

const social = [
  { href: links.github, icon: Github, label: 'GitHub' },
  { href: links.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${links.email}`, icon: Mail, label: 'Email' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-16">
      <div className="shell relative w-full">
        {/* Metadata reads as an instrument label: mono, small, sitting on the
            scale that anchors the name below it. */}
        <p
          className="resolve flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-neutral-500 uppercase dark:text-neutral-400"
          style={{ animationDelay: '0.05s' }}
        >
          <span>{site.location}</span>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <span>from {site.hometown}</span>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <span>Virginia Tech, 2027</span>
        </p>

        <div className="resolve mt-3" style={{ animationDelay: '0.12s' }}>
          <TickRule major className="text-neutral-900 dark:text-neutral-100" />
        </div>

        <h1
          className="display resolve mt-8 text-[clamp(3.25rem,11vw,6rem)]"
          style={{ animationDelay: '0.2s' }}
        >
          {site.name}
        </h1>

        {/* Mono here is functional, not costume: a proportional face reflows on
            every keystroke as the phrase types itself. min-h holds the line so
            the buttons below never shift. */}
        <p
          className="resolve mt-6 min-h-[1.7em] font-mono text-xl tracking-tight text-neutral-600 sm:text-2xl dark:text-neutral-400"
          style={{ animationDelay: '0.3s' }}
        >
          I am <Typewriter phrases={typewriterPhrases} className="text-accent" />
        </p>

        <p
          className="resolve mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          style={{ animationDelay: '0.38s' }}
        >
          {site.positioning}
        </p>

        <div
          className="resolve mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: '0.46s' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
          >
            View projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}${site.resume}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
          >
            Résumé
          </a>

          <div className="ml-1 flex items-center gap-1">
            {social.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-3 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-accent dark:hover:bg-neutral-900"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2.5 text-neutral-400 transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
