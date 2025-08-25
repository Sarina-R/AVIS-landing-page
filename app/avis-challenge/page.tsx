'use client'

import { HeroSection } from '@/components/challenge-page-components/HeroSection'
import { CompetitionSection } from '@/components/challenge-page-components/CompetitionSection'
import { ConnectionVisualization } from '@/components/challenge-page-components/ConnectionVisualization'
import { Footer } from '@/components/event-page-component/Footer'
import KubernetesCompanion from '@/components/challenge-page-components/KubernetesCompanion '
import UpcomingEvents from '@/components/challenge-page-components/UpcomingEvents'
import Navigation from '@/components/page-components/Navigation'

export default function AVISChallenge() {
  return (
    <>
      <HeroSection />
      <CompetitionSection />
      <ConnectionVisualization />
      <KubernetesCompanion />
      <UpcomingEvents />
    </>
  )
}
