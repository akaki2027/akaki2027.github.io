import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-neutral-500 uppercase">
          Built with React &amp; Tailwind · hosted on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
