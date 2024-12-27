'use client'

import { LaptopIcon, Moon02Icon, Sun01Icon } from 'hugeicons-react'
import { useTheme } from 'next-themes'
import { Menu } from 'ui'
import { useState, useEffect } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modeIcons = {
    system: <LaptopIcon className="text-fg size-5" strokeWidth={2} />,
    light: (
      <Sun01Icon
        className="text-fg absolute size-5 scale-100 rotate-90 transition-all dark:scale-0 dark:rotate-0"
        strokeWidth={2}
      />
    ),
    dark: (
      <Moon02Icon
        className="text-fg absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        strokeWidth={2}
      />
    ),
  }

  if (!mounted) return null

  return (
    <Menu>
      <Menu.Trigger className="flex h-8 w-8 cursor-pointer items-center justify-center">
        {modeIcons[theme as 'light' | 'dark' | 'system']}
        <span className="sr-only">Toggle theme</span>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Header>Switch Theme</Menu.Header>
        <Menu.Item onAction={() => setTheme('light')}>
          <Sun01Icon className="text-fg mr-2 size-4" strokeWidth={2} />
          <span>Light</span>
        </Menu.Item>
        <Menu.Item onAction={() => setTheme('dark')}>
          <Moon02Icon className="text-fg mr-2 size-4" strokeWidth={2} />
          <span>Dark</span>
        </Menu.Item>
        <Menu.Item onAction={() => setTheme('system')}>
          <LaptopIcon className="text-fg mr-2 size-4" strokeWidth={2} />
          <span>System</span>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
