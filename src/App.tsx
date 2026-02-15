import { LanguageProvider } from '@/lib/i18n'
import { ThemeProvider, useTheme } from '@/lib/theme'
import { Resume } from '@/components/Resume'

function ThemeVarsInjector({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme()

  return (
    <>
      <style>{`
        :root {
          --resume-primary: ${colors.primary};
          --resume-primary-light: ${colors.primaryLight};
          --resume-sidebar-from: ${colors.sidebarLight};
          --resume-sidebar-to: ${colors.sidebarLightEnd};
        }
        .dark {
          --resume-sidebar-from: ${colors.sidebarDark};
          --resume-sidebar-to: ${colors.sidebarDarkEnd};
        }
      `}</style>
      {children}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemeVarsInjector>
          <Resume />
        </ThemeVarsInjector>
      </LanguageProvider>
    </ThemeProvider>
  )
}
