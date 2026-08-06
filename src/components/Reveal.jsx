import { motion } from 'framer-motion'

/**
 * Fades + lifts its children into view once, the first time they're scrolled to.
 * framer-motion already no-ops the transform when the OS asks for reduced motion.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
