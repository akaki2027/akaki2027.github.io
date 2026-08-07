/**
 * The measurement motif: a baseline with ticks rising from it, every fifth one
 * running taller, the way a real scale marks its intervals.
 *
 * Drawn as SVG rather than tiled linear-gradients. A gradient grid is the
 * generated-UI signature this is trying not to be, and drawing it means the
 * interval and the major/minor relationship are explicit rather than implied by
 * two background-sizes that happen to divide evenly.
 */
export default function TickRule({ className = '', major = false }) {
  const step = 12
  const count = 80
  const height = major ? 14 : 10

  return (
    <svg
      className={`w-full ${className}`}
      height={height}
      viewBox={`0 0 ${step * count} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* baseline */}
      <line
        x1="0"
        y1={height - 0.5}
        x2={step * count}
        y2={height - 0.5}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      {Array.from({ length: count }, (_, i) => {
        const isMajor = major && i % 5 === 0
        const len = isMajor ? height : height * 0.45
        return (
          <line
            key={i}
            x1={i * step + 0.5}
            y1={height - len}
            x2={i * step + 0.5}
            y2={height}
            stroke="currentColor"
            strokeWidth="1"
            opacity={isMajor ? 0.4 : 0.22}
          />
        )
      })}
    </svg>
  )
}
