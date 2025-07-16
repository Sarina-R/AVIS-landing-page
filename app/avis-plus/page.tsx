'use client'

import { Footer } from '@/components/event-page-component/Footer'
import { Navigation } from '@/components/event-page-component/Navigation'
import HeroSection from '@/components/plus-page-component/HeroSection'
import IconSvgComponent from '@/components/plus-page-component/IconSvgComponent'
import { OrbitingCircleComponent } from '@/components/plus-page-component/OrbitingCircleComponent'
import { VercelDataCache } from '@/components/plus-page-component/VercelDataCache'
import { VercelEdgeNetwork } from '@/components/plus-page-component/VercelEdgeNetwork'
import { VercelFirewall } from '@/components/plus-page-component/VercelFirewall'
import { VercelFunctions } from '@/components/plus-page-component/VercelFunctions'
import ModernStepGuide from '@/components/StepGuideComponent '

const AvisPlusLanding = () => {
  return (
    <div className='min-h-screen bg-black text-white px-4'>
      <Navigation />

      <main className='max-w-6xl mx-auto border-l border-r mt-20 md:mt-44 border-white/10'>
        <HeroSection />
        <IconSvgComponent />
        <div className='grid grid-cols-2 bg-black text-white min-h-screen'>
          <VercelDataCache />
          <VercelEdgeNetwork />
          <VercelFunctions />
          <VercelFirewall />
        </div>
        <OrbitingCircleComponent />
        <ModernStepGuide />
      </main>

      <Footer />
    </div>
  )
}

export default AvisPlusLanding
