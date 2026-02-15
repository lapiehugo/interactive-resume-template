// ===== LOCALIZATION =====

export type LocalizedString = Record<string, string>

export type LocalizedStringArray = Record<string, string[]>

// ===== CONTACT =====

export type ContactType = 'email' | 'phone' | 'location' | 'github' | 'linkedin' | 'website'

export interface ContactItem {
  type: ContactType
  label: string
  href?: string
}

// ===== SKILLS =====

export interface SkillCategory {
  title: LocalizedString
  type: 'badges' | 'text' | 'languages'
  items: SkillItem[]
}

export interface SkillItem {
  name: string | LocalizedString
  color?: string
  level?: LocalizedString
  details?: string
}

// ===== EXPERIENCES =====

export interface Experience {
  id: string
  company: LocalizedString
  role: LocalizedString
  type?: LocalizedString
  period: LocalizedString
  description: LocalizedString
  techs: string[]
  isHighlighted?: boolean
  subItem?: {
    title: LocalizedString
    description: LocalizedString
  }
  details?: {
    context: LocalizedString
    tasks?: LocalizedStringArray
    training?: LocalizedStringArray
    env: LocalizedString
  }
}

// ===== PROJECTS =====

export interface Project {
  id: string
  title: LocalizedString
  description: LocalizedString
  techs: string[]
  url?: string
  github?: string
}

// ===== EDUCATION =====

export interface Education {
  school: LocalizedString
  degree: LocalizedString
  specialty?: LocalizedString
  period?: string
  logo?: string
}

// ===== HOBBIES =====

export interface Hobby {
  title: LocalizedString
  details?: LocalizedString[]
}

// ===== THEME =====

export interface ThemeColors {
  primary: string
  primaryLight: string
  sidebarLight: string
  sidebarLightEnd: string
  sidebarDark: string
  sidebarDarkEnd: string
}

export type PresetName = 'modern' | 'ocean' | 'forest' | 'warm' | 'minimal'

// ===== LABELS =====

export interface ResumeLabels {
  sections: {
    contact: LocalizedString
    skills: LocalizedString
    experience: LocalizedString
    education: LocalizedString
    projects?: LocalizedString
    hobbies?: LocalizedString
  }
  experience: {
    mainTasks: LocalizedString
    moreTasks: LocalizedString
    training?: LocalizedString
    techEnv: LocalizedString
    technologies: LocalizedString
  }
  actions: {
    clickHint: LocalizedString
    switchTheme: LocalizedString
    downloadPdf?: LocalizedString
  }
}

// ===== MAIN CONFIG =====

export interface ResumeConfig {
  personal: {
    name: string
    photo?: string
    photoBackEmoji?: string
    title: LocalizedString
    subtitle?: LocalizedString
    location?: string
  }
  seo: {
    title: string
    description: string
  }
  languages: {
    default: string
    available: string[]
    labels: Record<string, string>
  }
  contact: ContactItem[]
  skills: SkillCategory[]
  experiences: Experience[]
  education: Education[]
  projects?: Project[]
  hobbies?: Hobby[]
  pdf?: {
    label?: LocalizedString
    path: string
  }
  theme?: {
    preset?: PresetName
    colors?: Partial<ThemeColors>
    defaultMode?: 'light' | 'dark' | 'system'
  }
  techColors?: Record<string, string>
  labels: ResumeLabels
}
