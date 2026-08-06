import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, X } from 'lucide-react'
import { photos } from '../data/photos'

// Deterministic tilts and offsets, cycled by index, so the scatter looks
// hand-placed but never reshuffles between renders.
const TILTS = [-7, 4, -3, 8, -5, 2, -8, 6, -2, 5, -4, 3]
const NUDGE = [0, 14, -8, 6, -12, 10, 4, -6, 12, -10, 8, -4]

const DESKTOP_QUERY = '(min-width: 768px)'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY)
    // Re-read the query rather than trusting the event, and listen on `resize`
    // as well: the MediaQueryList change event doesn't fire reliably everywhere,
    // which would strand the gallery in desktop drag mode on a phone.
    const sync = () => setIsDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    window.addEventListener('resize', sync)
    return () => {
      mq.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  return isDesktop
}

/** Fills the section until real photos land in src/data/photos.js. */
function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-neutral-300 px-8 py-16 text-center dark:border-neutral-800">
      <ImagePlus className="mx-auto text-neutral-300 dark:text-neutral-700" size={28} />
      <p className="mt-4 font-medium">Photos go here.</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
        Drop images into <code className="font-mono text-accent">public/photos/</code>, then list them in{' '}
        <code className="font-mono text-accent">src/data/photos.js</code> with a short caption each.
      </p>
    </div>
  )
}

function Lightbox({ photo, onClose }) {
  // Escape closes, and the page behind stays put while the overlay is open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full p-2.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={22} />
      </button>

      <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={`${import.meta.env.BASE_URL}photos/${photo.file}`}
          alt={photo.caption}
          className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
        />
        <figcaption className="mt-4 text-center font-mono text-sm text-neutral-400">{photo.caption}</figcaption>
      </figure>
    </motion.div>
  )
}

function Polaroid({ photo, index, constraintsRef, draggable, onOpen }) {
  // A drag that ends where it started should still count as a click, so the
  // pointer distance decides rather than the drag handler firing at all.
  const down = useRef(null)

  const handlePointerDown = (e) => { down.current = { x: e.clientX, y: e.clientY } }
  const handlePointerUp = (e) => {
    if (!down.current) return
    const moved = Math.hypot(e.clientX - down.current.x, e.clientY - down.current.y)
    down.current = null
    if (moved < 6) onOpen()
  }

  return (
    <motion.figure
      drag={draggable}
      dragConstraints={constraintsRef}
      dragMomentum={false}
      dragElastic={0.12}
      whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
      whileHover={{ scale: 1.03, rotate: 0, zIndex: 20 }}
      initial={{ opacity: 0, y: 20, rotate: TILTS[index % TILTS.length] }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4) }}
      style={{ marginTop: draggable ? NUDGE[index % NUDGE.length] : 0 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={`w-40 shrink-0 rounded-md bg-white p-2.5 pb-1 shadow-lg shadow-black/10 sm:w-44 dark:bg-neutral-200 dark:shadow-black/40 ${
        draggable ? 'cursor-grab' : 'cursor-pointer'
      }`}
    >
      <img
        src={`${import.meta.env.BASE_URL}photos/${photo.file}`}
        alt={photo.caption}
        loading="lazy"
        draggable={false}
        className="aspect-square w-full rounded-sm bg-neutral-200 object-cover select-none"
      />
      <figcaption className="px-0.5 py-2 text-center font-mono text-[11px] leading-tight text-neutral-600">
        {photo.caption}
      </figcaption>
    </motion.figure>
  )
}

export default function PhotoGallery() {
  const constraintsRef = useRef(null)
  const [active, setActive] = useState(null)
  const isDesktop = useIsDesktop()

  if (photos.length === 0) {
    return (
      <div className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">A bit of who I am.</h3>
        <div className="mt-6">
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className="mt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight">A bit of who I am.</h3>
        <p className="font-mono text-xs text-neutral-400">
          {isDesktop ? 'Drag the photos around. Click to view larger.' : 'Tap a photo to view larger.'}
        </p>
      </div>

      {/* Dragging is desktop-only: on touch screens a drag gesture on a photo
          fights the page scroll, so small screens get a plain wrapped row. */}
      <div
        ref={constraintsRef}
        className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5 md:justify-start"
      >
        {photos.map((photo, i) => (
          <Polaroid
            key={photo.file}
            photo={photo}
            index={i}
            constraintsRef={constraintsRef}
            draggable={isDesktop}
            onOpen={() => setActive(photo)}
          />
        ))}
      </div>

      {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
    </div>
  )
}
