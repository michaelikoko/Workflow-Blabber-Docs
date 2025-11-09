import type { Metadata } from 'next'
import './globals.css'
import { Theme } from '@/types'
import { getTheme } from './actions'

export const metadata: Metadata = {
  title: 'Workflow Blabber Docs',
  description: 'Documentation site for Workflow Blabber GitHub Action.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get theme from cookies using getTheme() function
  const theme: Theme = await getTheme()
  //console.log(theme)
  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning dir="ltr"
    >
      <body className={theme}>
        <div className="min-h-lvh">{children}</div>
      </body>
    </html>
  )
}
