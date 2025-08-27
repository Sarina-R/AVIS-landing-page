'use client'

import {
  AboutSection,
  LiveMetrics,
  CTASection,
  HeroSection,
  PremiumFeatures,
  StepsComponent,
  TheAdvantage,
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
    { name: 'Platform', link: '#platform' },
    { name: 'Insights', link: '#insights' },
    { name: 'Steps', link: '#steps' },
    { name: 'Community', link: '#community' },
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
      <TheAdvantage />

      <StepsComponent />
      <LiveMetrics />
      <CTASection />
      <Footer />
    </div>
  )
}

export default AvisCommunityLanding
