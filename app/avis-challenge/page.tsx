'use client'

import { HeroSection } from '@/components/challenge-page-components/HeroSection'
import { CompetitionSection } from '@/components/challenge-page-components/CompetitionSection'
import { ConnectionVisualization } from '@/components/challenge-page-components/ConnectionVisualization'
import { Footer } from '@/components/event-page-component/Footer'
import KubernetesCompanion from '@/components/challenge-page-components/KubernetesCompanion '
import UpcomingEvents from '@/components/challenge-page-components/UpcomingEvents'
import Navigation from '@/components/page-components/Navigation'

export default function AVISChallenge() {
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
    { name: 'Competitions', link: '#competitions' },
    { name: 'Discover', link: '#discover' },
    { name: 'Upcoming Events', link: '#upcoming-events' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation logo={logo} navItems={navItems} />
      <main className='max-w-6xl mx-auto border-l border-r border-white/10 mt-17'>
        <HeroSection />
        <CompetitionSection />
        <ConnectionVisualization />
        <KubernetesCompanion />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  )
}
