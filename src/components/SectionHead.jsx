import TickRule from './TickRule'

/**
 * Section heading. No eyebrow and no 01/02/03 number: the sequence carries no
 * information the reader needs, and the heading holds its own weight.
 *
 * The tick rule above it is the page's measurement motif, doing the job the
 * eyebrow used to pretend to do: marking that a new section starts.
 */
export default function SectionHead({ title, aside }) {
  return (
    <div>
      <TickRule className="text-neutral-900 dark:text-neutral-100" />
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="display text-4xl sm:text-5xl">{title}</h2>
        {aside && <p className="measure text-sm text-neutral-400">{aside}</p>}
      </div>
    </div>
  )
}
