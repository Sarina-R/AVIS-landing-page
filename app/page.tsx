'use client'

import React, { useEffect } from 'react'
import AvisTripleCore from '@/components/AvisTripleCore'
import MissionVision from '@/components/MissionVision'
import ServicesSection from '@/components/page-componnets/ServicesSection'
import VisionSection from '@/components/page-componnets/VisionSection'
import StatsSection from '@/components/page-componnets/StatsSection'
import Footer from '@/components/page-componnets/Footer'
import AboutSection from '@/components/page-componnets/AboutSection'
import Navigation from '@/components/page-componnets/Navigation'
import FloatingParticles from '@/components/page-componnets/FloatingParticles'
import GalaxyBackground from '@/components/page-componnets/GalaxyBackground'
import HeroSection from '@/components/page-componnets/HeroSection'
import SliderComponent from '@/components/page-componnets/SliderComponent'
import FloatingStuff from '@/components/page-componnets/FloatingStuff'
import TestimonialSlider from '@/components/page-componnets/TestimonialSlider'

export default function AvisLandingPage() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .perspective-1000 {
        perspective: 1000px;
      }
      
      body {
        overflow-x: hidden;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      <GalaxyBackground />
      <FloatingParticles />

      <Navigation />
      <HeroSection />
      <FloatingStuff />
      <TestimonialSlider />
      <SliderComponent />
      <AboutSection />
      <AvisTripleCore />
      <MissionVision />
      <ServicesSection />
      <VisionSection />
      <StatsSection />
      <Footer />
    </div>
  )
}
