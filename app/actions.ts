'use server'

import { Theme } from '@/types'
import { cookies } from 'next/headers'

export async function setTheme(theme: Theme): Promise<void> {
  const cookieStore = await cookies()

  cookieStore.set('theme', theme)
}

export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')
  const theme = themeCookie?.value
  switch (theme) {
  case 'light':
    return theme
  case 'dark':
    return theme
  default:
    return 'dark'
  }
}