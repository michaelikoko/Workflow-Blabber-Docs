import HeroSection from '@/components/HeroSection'
import ChannelCards from '@/components/ChannelCards'
import FeatureCards from '@/components/FeatureCards'
import { getTheme } from './actions'
import { Theme } from '@/types'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default async function Home() {
  const theme: Theme = await getTheme()

  return (
    <>
      <NavBar theme={theme} />
      <div className="min-h-lvh">
        <HeroSection />
        <ChannelCards />
        <FeatureCards />
      </div>
      <Footer />
    </>
  )
}
