'use client'

import {
  AboutSection,
  AVISInsights,
  CTASection,
  HeroSection,
  PremiumFeatures,
  StepsComponent,
  TheAVISEdge,
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
        { name: 'AVIS Plus +', link: '/avis-plus' },
        { name: 'AVIS Community', link: '/avis-community' },
      ],
    },
    { name: 'About Platform', link: '#about-platform' },
    { name: 'Community', link: '#community' },
    { name: 'Steps', link: '#steps' },
    { name: 'Insights', link: '#insights' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white font-light max-w-6xl mx-auto border border-white/10'>
      <Navigation logo={logo} navItems={navItems} />
      <HeroSection />
      <AboutSection />

      {/* together */}
      <PremiumFeatures />
      <TheAVISEdge />

      <StepsComponent />
      <AVISInsights />
      <CTASection />
      <Footer />
    </div>
  )
}

export default AvisCommunityLanding
