'use client'

import React, { useEffect } from 'react'
// import AvisTripleCore from '@/components/AvisTripleCore'
// import FloatingStuff from '@/components/page-components/FloatingStuff'
import MissionVision from '@/components/MissionVision'
import ServicesSection from '@/components/page-components/ServicesSection'
import VisionSection from '@/components/page-components/VisionSection'
import StatsSection from '@/components/page-components/StatsSection'
import Footer from '@/components/page-components/Footer'
import AboutSection from '@/components/page-components/AboutSection'
import Navigation from '@/components/page-components/Navigation'
import FloatingParticles from '@/components/page-components/FloatingParticles'
import GalaxyBackground from '@/components/page-components/GalaxyBackground'
import HeroSection from '@/components/page-components/HeroSection'
import SliderComponent from '@/components/page-components/SliderComponent'
import TestimonialSlider from '@/components/page-components/TestimonialSlider'
import ProductsComponent from '@/components/page-components/Products'
import ResearchSection from '@/components/page-components/ResearchSection'
import QASection from '@/components/page-components/QASection'
import CompanyLogos from '@/components/page-components/Companies'

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
    <div className='min-h-screen bg-black text-white'>
      <GalaxyBackground />
      <FloatingParticles />

      <Navigation />
      <HeroSection />
      {/* <StepGuideComponent /> */}
      {/* <FloatingStuff /> */}
      <CompanyLogos />
      <ProductsComponent />
      <SliderComponent />
      <AboutSection />
      <ResearchSection />
      <QASection />
      {/* <AvisTripleCore /> */}
      <MissionVision />
      <ServicesSection />
      <VisionSection />
      <TestimonialSlider />
      <StatsSection />
      <Footer />
    </div>
  )
}
