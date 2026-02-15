import { useState, useEffect, type ReactNode } from 'react'
import { resumeConfig } from '@/data/resume-config'
import type { LocalizedString, LocalizedStringArray } from '@/data/types'
import { LanguageContext } from './LanguageContext'

function detectBrowserLanguage(): string {
  const { available, default: defaultLang } = resumeConfig.languages
  const browserLang = navigator.language.split('-')[0]
  return available.includes(browserLang) ? browserLang : defaultLang
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { default: defaultLang } = resumeConfig.languages

  const [language, setLanguageState] = useState(() => {
    const stored = localStorage.getItem('resume-language')
    if (stored && resumeConfig.languages.available.includes(stored)) return stored
    return detectBrowserLanguage()
  })

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('resume-language', lang)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const resolve = (ls: LocalizedString): string => {
    return ls[language] ?? ls[defaultLang] ?? Object.values(ls)[0] ?? ''
  }

  const resolveArray = (lsa: LocalizedStringArray): string[] => {
    return lsa[language] ?? lsa[defaultLang] ?? Object.values(lsa)[0] ?? []
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resolve, resolveArray }}>
      {children}
    </LanguageContext.Provider>
  )
}
