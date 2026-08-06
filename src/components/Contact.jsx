import { ArrowUpRight, Mail } from 'lucide-react'
import { Github, Instagram, Linkedin } from './BrandIcons'
import Reveal from './Reveal'
import { links, site } from '../data/site'

const channels = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, icon: Mail },
  { label: 'LinkedIn', value: '/in/adityarkaki', href: links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: links.github.replace('https://github.com/', '@'), href: links.github, icon: Github },
  links.instagram && {
    label: 'Instagram',
    value: `@${links.instagram}`,
    href: `https://instagram.com/${links.instagram}`,
    icon: Instagram,
  },
].filter(Boolean)

export default function Contact() {
  return (
    <section id="contact" className="shell py-24 sm:py-32">
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 px-8 py-16 sm:px-14 dark:border-neutral-800 dark:bg-neutral-900/40">
        <Reveal>
          <p className="section-label">03 / Contact</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Let's build something.</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            I'm looking for Summer 2026 internships in embedded systems, machine learning, or security, and I'm
            always up for talking about a hard problem, job or not.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Adding Instagram takes this to four cards, which would otherwise
              leave a 3+1 orphan row on desktop. */}
          <div
            className={`mt-12 grid gap-4 ${
              channels.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'
            }`}
          >
            {channels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-accent dark:border-neutral-800 dark:bg-neutral-950/40"
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-neutral-400 transition-colors group-hover:text-accent" />
                  <ArrowUpRight
                    size={15}
                    className="text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent dark:text-neutral-700"
                  />
                </div>
                <p className="mt-4 text-sm text-neutral-500">{label}</p>
                <p className="mt-0.5 truncate font-medium">{value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={`${import.meta.env.BASE_URL}${site.resume}`}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
          >
            Download résumé <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
