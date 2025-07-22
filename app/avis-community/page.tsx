'use client'

import {
  AboutSection,
  BentoDemo,
  CTASection,
  HeroSection,
  ServicesSection,
  StepsComponent,
  WhyChooseUs,
} from '@/components/community-page-componnets/componnets'
import { Footer } from '@/components/event-page-component/Footer'
import { Navigation } from '@/components/event-page-component/Navigation'

const AvisCommunityLanding = () => {
  return (
    <div className='min-h-screen bg-black text-white font-light max-w-6xl mx-auto'>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BentoDemo />
      <StepsComponent />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  )
}

export default AvisCommunityLanding
