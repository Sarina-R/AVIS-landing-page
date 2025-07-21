'use client'

import { Navigation } from '@/components/event-page-component/Navigation'
import { HeroSection } from '@/components/challenge-page-components/HeroSection'
import { CompetitionSection } from '@/components/challenge-page-components/CompetitionSection'
import { ConnectionVisualization } from '@/components/challenge-page-components/ConnectionVisualization'
import { Footer } from '@/components/event-page-component/Footer'
import KubernetesCompanion from '@/components/challenge-page-components/KubernetesCompanion '
import UpcomingEvents from '@/components/challenge-page-components/UpcomingEvents'

export default function AVISChallenge() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation />
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
