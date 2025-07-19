'use client'

import { Footer } from '@/components/event-page-component/Footer'
import { Navigation } from '@/components/event-page-component/Navigation'
import HeroSection from '@/components/plus-page-component/HeroSection'
import IconSvgComponent from '@/components/plus-page-component/IconSvgComponent'
import { OrbitingCircleComponent } from '@/components/plus-page-component/OrbitingCircleComponent'
import ToolsComponent from '@/components/plus-page-component/ToolsComponent'
import { VercelDataCache } from '@/components/plus-page-component/VercelDataCache'
import { VercelEdgeNetwork } from '@/components/plus-page-component/VercelEdgeNetwork'
import { VercelFirewall } from '@/components/plus-page-component/VercelFirewall'
import { VercelFunctions } from '@/components/plus-page-component/VercelFunctions'
import ModernStepGuide from '@/components/StepGuideComponent '

{
  /* <div className='absolute right-0 h-[400px] w-[400px] lg:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-rose-700 from-rose-400 opacity-30 blur-[100px]' />
        <div className='absolute left-0 h-[400px] w-[400px] md:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-indigo-700 from-indigo-400 opacity-30 blur-[100px]' /> */
}
const AvisPlusLanding = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation />

      <main className='max-w-6xl mx-auto border-l border-r mt-20 md:mt-44 border-white/10'>
        <HeroSection />
        <ToolsComponent />
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
