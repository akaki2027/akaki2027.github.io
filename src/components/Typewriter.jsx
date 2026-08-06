import { useEffect, useRef, useState } from 'react'

const TYPE_MS = 65 // per character while typing
const DELETE_MS = 32 // per character while deleting (deleting reads faster)
const HOLD_MS = 1700 // pause on the finished phrase
const GAP_MS = 380 // pause after deleting, before the next phrase

/**
 * Types a phrase out character by character, holds, deletes it, and moves to the
 * next one, looping forever.
 *
 * Driven by setTimeout rather than requestAnimationFrame so it keeps correct time
 * in background tabs instead of freezing mid-word.
 */
export default function Typewriter({ phrases, className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Users who ask for reduced motion get the first phrase, static. No cursor.
  const [reducedMotion] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  )

  const timer = useRef()

  useEffect(() => {
    if (reducedMotion) return

    const phrase = phrases[index % phrases.length]
    let delay

    if (!deleting && text === phrase) {
      delay = HOLD_MS
      timer.current = setTimeout(() => setDeleting(true), delay)
    } else if (deleting && text === '') {
      delay = GAP_MS
      timer.current = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }, delay)
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS
      timer.current = setTimeout(() => {
        setText((t) => (deleting ? phrase.slice(0, t.length - 1) : phrase.slice(0, t.length + 1)))
      }, delay)
    }

    return () => clearTimeout(timer.current)
  }, [text, deleting, index, phrases, reducedMotion])

  if (reducedMotion) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className}>
      {/* Screen readers get the whole list once, rather than a stream of
          half-typed words from the live-updating span. */}
      <span className="sr-only">{phrases.join(', ')}</span>

      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-[0.06em] animate-pulse bg-current align-middle" style={{ height: '0.9em' }} />
      </span>
    </span>
  )
}
