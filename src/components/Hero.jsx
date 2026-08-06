import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { Github, Instagram, Linkedin } from './BrandIcons'
import Typewriter from './Typewriter'
import { links, site, typewriterPhrases } from '../data/site'

// Instagram is dropped unless a handle is set in site.js, so an unset one
// never renders a link that goes nowhere.
const social = [
  { href: links.github, icon: Github, label: 'GitHub' },
  { href: links.linkedin, icon: Linkedin, label: 'LinkedIn' },
  links.instagram && {
    href: `https://instagram.com/${links.instagram}`,
    icon: Instagram,
    label: 'Instagram',
  },
  { href: `mailto:${links.email}`, icon: Mail, label: 'Email' },
].filter(Boolean)

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-sm text-neutral-500 dark:text-neutral-400"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          <span>
            Current location: <span className="text-neutral-700 dark:text-neutral-300">{site.location}</span>
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>
            Hometown: <span className="text-neutral-700 dark:text-neutral-300">{site.hometown}</span>
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {site.name}
        </motion.h1>

        {/* Fixed min-height so the line below never reflows as the phrase length
            changes while typing. */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 min-h-[1.6em] text-2xl font-medium tracking-tight text-neutral-600 sm:text-3xl dark:text-neutral-400"
        >
          I am <Typewriter phrases={typewriterPhrases} className="text-accent" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
          >
            View projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 transition-colors hover:text-accent"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
