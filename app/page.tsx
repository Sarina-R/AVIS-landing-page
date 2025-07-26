'use client'

import Navigation from '@/components/page-components/Navigation'
import HeroSection from '@/components/page-components/HeroSection'
import ProductsComponent from '@/components/page-components/Products'
import SliderComponent from '@/components/page-components/SliderComponent'
import FallingText from '@/components/reactBits/FallingText'
import AboutSection from '@/components/page-components/AboutSection'
import ResearchSection from '@/components/page-components/ResearchSection'
import QASection from '@/components/page-components/QASection'
import NewsSection from '@/components/page-components/NewsSection'
import MagazineSection from '@/components/page-components/MagazineSection'
import VisionSection from '@/components/page-components/VisionSection'
import TestimonialSlider from '@/components/page-components/TestimonialSlider'
import DownloadSection from '@/components/page-components/DownloadSection'
import StatsSection from '@/components/page-components/StatsSection'
import Footer from '@/components/page-components/Footer'
// import GalaxyBackground from '@/components/page-components/GalaxyBackground'
// import FloatingParticles from '@/components/page-components/FloatingParticles'

export default function AvisLandingPage() {
  const navItems = [
    {
      name: 'Products',
      link: '#products',
      children: [
        { name: 'AVIS Events', link: '/avis-events' },
        { name: 'AVIS Challenge', link: '/avis-challenge' },
        { name: 'AVIS Community', link: '/avis-community' },
        { name: 'AVIS Plus +', link: '/avis-plus' },
      ],
    },
    { name: 'Get Started', link: '#get-started' },
    { name: 'Research', link: '#research' },
    { name: 'Download', link: '#download' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white space-y-16 font-sans'>
      {/* <GalaxyBackground /> */}
      {/* <FloatingParticles /> */}
      <Navigation logo={logo} navItems={navItems} />
      <HeroSection />
      <ProductsComponent />
      <SliderComponent />
      <div className='md:h-[50vh] h-[25vh] max-w-3xl text-center items-center md:py-12 m-auto border rounded-2xl'>
        <div className='h-full'>
          <FallingText
            text={`High level physics engine.\nAVIS Engine brings a close to reality simulation for vehicles.`}
            highlightWords={['High', 'level', 'AVIS', 'vehicles']}
            trigger='hover'
            backgroundColor='transparent'
            wireframes={false}
            gravity={0.56}
            fontSize='2rem'
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
      <AboutSection />
      <ResearchSection />
      <QASection />
      <NewsSection />
      <MagazineSection />
      <VisionSection />
      <TestimonialSlider />
      <DownloadSection />
      <StatsSection />
      <Footer />
    </div>
  )
}
