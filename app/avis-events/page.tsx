'use client'

import AboutUsSection from '@/components/event-page-component/AboutSection'
import AnimatedBeamSection from '@/components/event-page-component/AnimatedBeamSection'
import BentoGridSection from '@/components/event-page-component/BentoSection'
import HeroSection from '@/components/event-page-component/HeroSEction'
import { useState } from 'react'

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <HeroSection />
      <AboutUsSection />
      <BentoGridSection />
      <AnimatedBeamSection />
      <footer className='py-12 px-4 bg-black border-t border-red-600/20'>
        <div className='container mx-auto max-w-6xl text-center'>
          <p className='text-gray-400'>
            © 2025 TechSite. Built with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
