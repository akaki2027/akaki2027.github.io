import { ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import SectionHead from './SectionHead'
import { links, site } from '../data/site'

const channels = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, icon: Mail },
  { label: 'LinkedIn', value: '/in/adityarkaki', href: links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: links.github.replace('https://github.com/', '@'), href: links.github, icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="shell py-24 sm:py-32">
      <SectionHead title="Let's build something." />

      <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <p className="max-w-[60ch] text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          I'm looking for new-grad roles starting 2027 in embedded systems, machine learning, or
          security, and I'm always up for talking about a hard problem, job or not.
        </p>

        {/* Rows on a rule, not cards. The old version nested cards inside a
            card, which reads as packaging around packaging. */}
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 py-5 transition-colors hover:text-accent"
              >
                <Icon
                  size={17}
                  className="shrink-0 text-neutral-400 transition-colors group-hover:text-accent"
                />
                <span className="w-24 shrink-0 font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
                  {label}
                </span>
                <span className="min-w-0 flex-1 truncate text-[15px]">{value}</span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-700"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`${import.meta.env.BASE_URL}${site.resume}`}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
      >
        Download résumé <ArrowUpRight size={16} />
      </a>
    </section>
  )
}
