'use client'

import { Footer } from '@/components/event-page-component/Footer'
import HeroSection from '@/components/plus-page-component/HeroSection'
import IconSvgComponent from '@/components/plus-page-component/IconSvgComponent'
import { OrbitingCircleComponent } from '@/components/plus-page-component/OrbitingCircleComponent'
import ToolsComponent from '@/components/plus-page-component/ToolsComponent'
import { AVISIdentityHub } from '@/components/plus-page-component/AVISIdentityHub'
import { AVISGlobalConnect } from '@/components/plus-page-component/AVISGlobalConnect'
import { AVISSecurity } from '@/components/plus-page-component/AVISSecurity'
import { AVISFunctions } from '@/components/plus-page-component/AVISFunctions'
import ModernStepGuide from '@/components/plus-page-component/StepGuideComponent '
import Navigation from '@/components/page-components/Navigation'

{
  /* <div className='absolute right-0 h-[400px] w-[400px] lg:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-rose-700 from-rose-400 opacity-30 blur-[100px]' />
        <div className='absolute left-0 h-[400px] w-[400px] md:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-indigo-700 from-indigo-400 opacity-30 blur-[100px]' /> */
}
const AvisPlusLanding = () => {
  const navItems = [
    {
      name: 'Products',
      link: '#products',
      children: [
        { name: 'AVIS Events', link: '/avis-events' },
        { name: 'AVIS Challenge', link: '/avis-challenge' },
        { name: 'AVIS Plus +', link: '/avis-plus' },
        { name: 'AVIS Community', link: '/avis-community' },
      ],
    },
    { name: 'About', link: '#about' },
    { name: 'Work Flow', link: '#work-flow' },
    { name: 'Steps', link: '#steps' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation logo={logo} navItems={navItems} />

      <main className='max-w-6xl mx-auto border-l border-r border-white/10 mt-17'>
        <HeroSection />
        <ToolsComponent />
        <IconSvgComponent />
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-black text-white min-h-screen'>
          <AVISIdentityHub />
          <AVISGlobalConnect />
          <AVISFunctions />
          <AVISSecurity />
        </div>
        <OrbitingCircleComponent />
        <ModernStepGuide />
      </main>

      <Footer />
    </div>
  )
}

export default AvisPlusLanding
