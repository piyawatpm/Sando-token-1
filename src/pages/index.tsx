import { NextSeo } from 'next-seo'
import MainLayout from 'src/layout/MainLayout'


import Distribution from '@/components/pages/index/Distribution'
import HeroSection from '@/components/pages/index/HeroSection'
import Partners from '@/components/pages/index/Partners'
import Roadmap from "@/components/pages/index/Roadmap"
import Tokenomics from "@/components/pages/index/Tokenomics"
import Token from "@/components/pages/index/Token"

function Home(): JSX.Element {
  return (
    <>
      <NextSeo title="Token - Sando.io" />

    
        <HeroSection />
        <Partners/>
        <Token />
        <Tokenomics />
        <Roadmap />
        <Distribution/>   
    
    </>
  )
}

Home.layoutProps = {
  Layout: MainLayout,
}

export default Home
