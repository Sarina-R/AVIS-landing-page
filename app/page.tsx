'use client'

// import AvisTripleCore from '@/components/AvisTripleCore'
// import FloatingStuff from '@/components/page-components/FloatingStuff'
// import MissionVision from '@/components/MissionVision'
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
import FallingText from '@/components/reactBits/FallingText'

export default function AvisLandingPage() {
  return (
    <div className='min-h-screen bg-black text-white space-y-16'>
      <GalaxyBackground />
      <FloatingParticles />

      <Navigation />
      <HeroSection />
      {/* <StepGuideComponent /> */}
      {/* <FloatingStuff /> */}
      <CompanyLogos />
      <ProductsComponent />
      <SliderComponent />
      <div className='md:h-[50vh] h-[25vh] max-w-3xl text-center items-center md:py-12 m-auto border rounded-2xl'>
        <div className='h-full'>
          <FallingText
            text={`High level physics engine.\nAVIS Engine brings a close to reality simulation for vehicles.`}
            highlightWords={['High', 'level', 'AVIS', 'vehicles']}
            trigger='hover'
            backgroundColor='transparent'
            wireframes={false}
            gravity={0.56}
            fontSize='2rem'
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
      <AboutSection />
      <ResearchSection />
      <QASection />
      {/* <AvisTripleCore /> */}
      {/* <MissionVision /> */}
      <ServicesSection
        title='The Latest News'
        titleHighlight='News'
        sectionId='news'
      />
      <ServicesSection
        title='The AVIS'
        titleHighlight='Magazine'
        sectionId='services'
      />
      <VisionSection />
      <TestimonialSlider />
      <StatsSection />
      <Footer />
    </div>
  )
}
