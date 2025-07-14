'use client'

import { AboutSection } from '@/components/event-page-component/AboutSection'
import { ServicesSection } from '@/components/event-page-component/ServicesSection'
import { WhyChooseUs } from '@/components/event-page-component/WhyChooseUs'
import { CTASection } from '@/components/event-page-component/CTASection'
import { Footer } from '@/components/event-page-component/Footer'
import { Navigation } from '@/components/event-page-component/Navigation'
import HeroSection from '@/components/event-page-component/HeroSEction'

const AvisEventsLanding = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navigation />

      <main className='max-w-6xl mx-auto border-l border-r mt-44 border-white/10'>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <CTASection />
      </main>

      <Footer />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default AvisEventsLanding
