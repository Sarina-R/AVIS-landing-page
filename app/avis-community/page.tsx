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
import Navigation from '@/components/page-components/Navigation'

const AvisCommunityLanding = () => {
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
    { name: 'About', link: '#about' },
    { name: 'Discover', link: '#discover' },
    { name: 'Why AVIS', link: '#why-avis' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white font-light max-w-6xl mx-auto'>
      <Navigation logo={logo} navItems={navItems} />
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
