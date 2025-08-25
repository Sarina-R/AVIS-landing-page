'use client'

import { HeroSection } from '@/components/challenge-page-components/HeroSection'
import { CompetitionSection } from '@/components/challenge-page-components/CompetitionSection'
import { ConnectionVisualization } from '@/components/challenge-page-components/ConnectionVisualization'
import KubernetesCompanion from '@/components/challenge-page-components/KubernetesCompanion '
import UpcomingEvents from '@/components/challenge-page-components/UpcomingEvents'

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
