'use client'

import { AboutSection } from '@/components/event-page-component/AboutSection'
import { ServicesSection } from '@/components/event-page-component/ServicesSection'
import { WhyChooseUs } from '@/components/event-page-component/WhyChooseUs'
import { CTASection } from '@/components/event-page-component/CTASection'
import { Footer } from '@/components/event-page-component/Footer'
import { BentoDemo } from '@/components/event-page-component/BentoSection'
import HeroSection from '@/components/event-page-component/HeroSEction'
import StepsComponent from '@/components/event-page-component/StepsComponent'
import Navigation from '@/components/page-components/Navigation'

const AvisEventsLanding = () => {
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
    { name: 'About', link: '#about' },
    { name: 'Discover', link: '#discover' },
    { name: 'Why AVIS', link: '#why-avis' },
  ]

  const logo =
    'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'

  return (
    <div className='min-h-screen bg-black text-white px-4'>
      <Navigation logo={logo} navItems={navItems} />

      <main className='max-w-6xl mx-auto border-l border-r mt-20 md:mt-44 border-white/10 space-y-20'>
        <HeroSection />
        <ServicesSection />
        <BentoDemo />
        <StepsComponent />
        <AboutSection />
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
