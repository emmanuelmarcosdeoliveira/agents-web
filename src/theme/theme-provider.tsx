import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  // Função para validar o tema
  function getValidTheme(values: string | null): Theme {
    if (values === 'dark' || values === 'light' || values === 'system') {
      return values
    }
    return defaultTheme
  }

  const [theme, setThemeState] = useState<Theme>(() =>
    getValidTheme(localStorage.getItem(storageKey))
  )

  // Atualiza o tema do sistema em tempo real se estiver em 'system'
  useEffect(() => {
    if (theme !== 'system') {
      return
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const rootEl = window.document.documentElement
      rootEl.classList.remove('light', 'dark')
      rootEl.classList.add(media.matches ? 'dark' : 'light')
    }
    handleChange()
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [theme])

  // Atualiza a classe do tema quando não está em 'system'
  useEffect(() => {
    if (theme === 'system') {
      return
    }
    const rootEl = window.document.documentElement
    rootEl.classList.remove('light', 'dark')
    rootEl.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
