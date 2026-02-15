import type { ThemeColors, PresetName } from './types'

export const presets: Record<PresetName, ThemeColors> = {
  modern: {
    primary: '#475569',
    primaryLight: '#94a3b8',
    sidebarLight: '#f1f5f9',
    sidebarLightEnd: '#e2e8f0',
    sidebarDark: '#1e293b',
    sidebarDarkEnd: '#0f172a',
  },
  ocean: {
    primary: '#0891b2',
    primaryLight: '#67e8f9',
    sidebarLight: '#ecfeff',
    sidebarLightEnd: '#cffafe',
    sidebarDark: '#164e63',
    sidebarDarkEnd: '#0e3a4a',
  },
  forest: {
    primary: '#5b7355',
    primaryLight: '#8faf8a',
    sidebarLight: '#f0f5ef',
    sidebarLightEnd: '#dce8da',
    sidebarDark: '#2d3b2a',
    sidebarDarkEnd: '#1f2a1d',
  },
  warm: {
    primary: '#8B5A2B',
    primaryLight: '#D4A574',
    sidebarLight: '#f5f5f5',
    sidebarLightEnd: '#ebebeb',
    sidebarDark: '#2a2a2a',
    sidebarDarkEnd: '#252525',
  },
  minimal: {
    primary: '#171717',
    primaryLight: '#737373',
    sidebarLight: '#fafafa',
    sidebarLightEnd: '#f0f0f0',
    sidebarDark: '#1a1a1a',
    sidebarDarkEnd: '#141414',
  },
}
