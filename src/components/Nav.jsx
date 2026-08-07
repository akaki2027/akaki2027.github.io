import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { site } from '../data/site'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark]
}

export default function Nav() {
  const [dark, setDark] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section is currently in the upper part of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl dark:border-neutral-800/70 dark:bg-neutral-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="display -my-2 py-2 text-2xl transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          {site.initials}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === id
                  ? 'text-accent'
                  : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}${site.resume}`}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
          >
            Résumé
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-1 rounded-full p-3 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-3 text-neutral-600 dark:text-neutral-400"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-3 text-neutral-600 dark:text-neutral-400"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-6 pb-5 md:hidden dark:border-neutral-800 dark:bg-neutral-950">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-neutral-100 py-3.5 text-sm dark:border-neutral-900"
            >
              {label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}${site.resume}`}
            target="_blank"
            rel="noreferrer"
            className="block py-3.5 text-sm text-accent"
          >
            Résumé ↗
          </a>
        </div>
      )}
    </header>
  )
}
