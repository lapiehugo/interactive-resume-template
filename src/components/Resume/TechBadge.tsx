import { getTechColor } from '@/data/tech-registry'

interface TechBadgeProps {
  tech: string
  /** Override color. If not provided, resolved from tech-registry. */
  color?: string
}

/**
 * Returns relative luminance of a hex color (0 = black, 1 = white).
 * Based on WCAG 2.0 formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

/** Threshold above which a color is considered "light" and needs darker text. */
const LUMINANCE_THRESHOLD = 0.4

export function TechBadge({ tech, color: colorOverride }: TechBadgeProps) {
  const color = colorOverride ?? getTechColor(tech)
  const isLight = getLuminance(color) > LUMINANCE_THRESHOLD

  return (
    <>
      {/* Light mode */}
      <span
        className="px-2 py-1 rounded text-xs font-medium dark:hidden"
        style={{
          backgroundColor: `${color}20`,
          color: isLight ? '#374151' : color,
        }}
      >
        {tech}
      </span>
      {/* Dark mode */}
      <span
        className="px-2 py-1 rounded text-xs font-medium hidden dark:inline"
        style={{
          backgroundColor: `${color}30`,
          color: isLight ? color : `${color}cc`,
        }}
      >
        {tech}
      </span>
    </>
  )
}
