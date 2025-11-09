import { type Theme } from '@/types'
import { getTheme } from '../actions'
import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Footer from '@/components/Footer'
import { NavLogo, ThemeToggle } from '@/components/NavBar'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get theme from cookies using getTheme() function
  const theme: Theme = await getTheme()

  const navbar = (
    <Navbar
      logo={<NavLogo />}
      projectLink="https://github.com/michaelikoko/workflow-blabber"
      className="bg-base-300"
    >
      <ThemeToggle theme={theme} />
    </Navbar>
  )
  return (
    <div>
      <Layout
        navbar={navbar}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://github.com/michaelikoko/workflow-blabber"
        footer={<Footer />}
        darkMode={false}
        search={false}
        editLink={null}
      >
        <div className={`bg-base-300 ${theme}`}>{children}</div>
      </Layout>
    </div>
  )
}
