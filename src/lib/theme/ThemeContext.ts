import { createContext } from 'react'
import type { ThemeColors } from '@/data/types'

export interface ThemeContextValue {
  isDark: boolean
  toggle: () => void
  colors: ThemeColors
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
