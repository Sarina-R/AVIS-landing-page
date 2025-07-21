'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Users2,
  Zap,
  ChevronDown,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-8 py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
            <span className='text-lg font-light tracking-wide'>AVIS</span>
          </div>

          <div className='hidden md:flex items-center space-x-12 text-sm font-light'>
            <a
              href='#platform'
              className='text-zinc-400 hover:text-emerald-400 transition-colors duration-300'
            >
              Platform
            </a>
            <a
              href='#community'
              className='text-zinc-400 hover:text-emerald-400 transition-colors duration-300'
            >
              Community
            </a>
            <a
              href='#insights'
              className='text-zinc-400 hover:text-emerald-400 transition-colors duration-300'
            >
              Insights
            </a>
          </div>

          <button className='group relative overflow-hidden bg-emerald-400 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-emerald-300'>
            <span className='relative z-10'>Access Platform</span>
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div
        className='absolute inset-0 opacity-30'
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-40'></div>
        <div className='absolute top-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-40'></div>
        <div className='absolute bottom-1/4 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-40'></div>
      </div>

      <div className='relative z-10 text-center max-w-5xl mx-auto px-8'>
        <div className='mb-8 inline-flex items-center px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm'>
          <Sparkles className='w-4 h-4 text-emerald-400 mr-2' />
          <span className='text-xs font-light text-zinc-400 tracking-wide'>
            PROFESSIONAL ELEVATION PLATFORM
          </span>
        </div>

        <h1 className='text-6xl md:text-8xl lg:text-9xl font-extralight leading-[0.85] mb-12 tracking-tight'>
          <span className='block'>REDEFINE</span>
          <span className='block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent'>
            PROFESSIONAL
          </span>
          <span className='block'>NETWORKING</span>
        </h1>

        <p className='text-lg md:text-xl font-light text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed'>
          An exclusive community where visionary professionals connect through
          <span className='text-emerald-400'> intelligent curation</span> and
          meaningful discourse.
        </p>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
          <button className='group relative bg-emerald-400 text-black px-8 py-4 rounded-full font-medium flex items-center transition-all duration-500 hover:bg-emerald-300 hover:scale-105'>
            Request Access
            <ArrowUpRight className='ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300' />
            <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>

          <button className='group font-light text-zinc-300 px-8 py-4 border border-zinc-800 rounded-full hover:border-emerald-400/50 transition-all duration-300'>
            Discover More
            <ChevronDown className='inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300' />
          </button>
        </div>
      </div>

      <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2'>
        <div className='w-px h-16 bg-gradient-to-b from-emerald-400/50 to-transparent animate-pulse'></div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id='platform' className='py-32 px-8 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <div>
            <h2 className='text-4xl md:text-6xl font-extralight leading-tight mb-8'>
              CURATED
              <br />
              <span className='text-emerald-400'>EXCELLENCE</span>
            </h2>
            <p className='text-xl font-light text-zinc-400 leading-relaxed mb-8'>
              Beyond traditional networking lies a realm of intentional
              connections. Where every interaction is purposeful, every
              relationship meaningful.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center space-x-4'>
                <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
                <span className='font-light text-zinc-300'>
                  AI-Driven Compatibility Matching
                </span>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
                <span className='font-light text-zinc-300'>
                  Invitation-Only Community
                </span>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
                <span className='font-light text-zinc-300'>
                  Premium Experience Design
                </span>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl'></div>
            <div className='bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12 relative'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='text-center'>
                  <div className='text-3xl font-light text-emerald-400 mb-2'>
                    10K+
                  </div>
                  <div className='text-sm font-light text-zinc-400'>
                    ELITE MEMBERS
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-light text-emerald-400 mb-2'>
                    95%
                  </div>
                  <div className='text-sm font-light text-zinc-400'>
                    SUCCESS RATE
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-light text-emerald-400 mb-2'>
                    50+
                  </div>
                  <div className='text-sm font-light text-zinc-400'>
                    COUNTRIES
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-light text-emerald-400 mb-2'>
                    24/7
                  </div>
                  <div className='text-sm font-light text-zinc-400'>
                    CONCIERGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const StepsComponent = () => {
  const steps = [
    {
      number: '01',
      title: 'APPLICATION',
      desc: 'Submit your professional profile for careful review by our curation committee',
    },
    {
      number: '02',
      title: 'VERIFICATION',
      desc: 'Undergo our proprietary assessment process designed to ensure community excellence',
    },
    {
      number: '03',
      title: 'ELEVATION',
      desc: 'Access exclusive networking opportunities and accelerate your professional trajectory',
    },
  ]

  return (
    <section className='py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-extralight mb-6'>
            THE <span className='text-emerald-400'>JOURNEY</span>
          </h2>
        </div>

        <div className='space-y-20'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='lg:w-1/3'>
                  <div className='text-8xl font-extralight text-emerald-400/20 mb-4'>
                    {step.number}
                  </div>
                  <h3 className='text-2xl font-light mb-4 tracking-wide'>
                    {step.title}
                  </h3>
                  <p className='text-zinc-400 font-light leading-relaxed'>
                    {step.desc}
                  </p>
                </div>

                <div className='lg:w-2/3'>
                  <div className='h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400 to-transparent'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  return (
    <section id='community' className='py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extralight text-center mb-20'>
          PREMIUM <span className='text-emerald-400'>FEATURES</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              icon: Users2,
              title: 'INTELLIGENT MATCHING',
              desc: 'Advanced algorithms connect compatible professionals',
            },
            {
              icon: Globe,
              title: 'GLOBAL ACCESS',
              desc: 'Exclusive events and opportunities worldwide',
            },
            {
              icon: Zap,
              title: 'INSTANT INSIGHTS',
              desc: 'Real-time industry intelligence and trends',
            },
            {
              icon: Sparkles,
              title: 'PERSONAL CURATION',
              desc: 'Dedicated relationship managers',
            },
            {
              icon: Users2,
              title: 'ELITE CIRCLES',
              desc: 'Private groups for industry leaders',
            },
            {
              icon: Globe,
              title: 'PREMIUM SUPPORT',
              desc: '24/7 concierge assistance',
            },
          ].map((service, index) => (
            <div
              key={index}
              className='group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-emerald-400/20 transition-all duration-500'
            >
              <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              <service.icon className='w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='text-lg font-light mb-4 tracking-wide'>
                {service.title}
              </h3>
              <p className='text-zinc-400 font-light text-sm leading-relaxed'>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BentoDemo = () => {
  return (
    <section id='insights' className='py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extralight text-center mb-20'>
          LIVE <span className='text-emerald-400'>METRICS</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[160px]'>
          {/* Large feature card */}
          <div className='md:col-span-8 md:row-span-2 bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full -translate-y-16 translate-x-16'></div>
            <div>
              <h3 className='text-3xl font-extralight mb-4'>
                NETWORK VELOCITY
              </h3>
              <p className='text-zinc-400 font-light'>
                Real-time connection quality metrics
              </p>
            </div>
            <div className='flex items-end space-x-2'>
              {[20, 40, 30, 50, 35, 60, 45, 70].map((height, i) => (
                <div
                  key={i}
                  className={`w-4 bg-emerald-400 rounded-t-sm`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Small cards */}
          <div className='md:col-span-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-300'>
            <div className='text-2xl font-light text-emerald-400 mb-2'>127</div>
            <div className='text-sm font-light text-zinc-400'>
              ACTIVE CONNECTIONS
            </div>
          </div>

          <div className='md:col-span-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-300'>
            <div className='text-2xl font-light text-emerald-400 mb-2'>89%</div>
            <div className='text-sm font-light text-zinc-400'>
              ENGAGEMENT RATE
            </div>
          </div>

          {/* Medium cards */}
          <div className='md:col-span-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 flex items-center justify-between hover:bg-zinc-900/50 transition-all duration-300'>
            <div>
              <div className='text-lg font-light mb-1'>GLOBAL PULSE</div>
              <div className='text-xs font-light text-zinc-400'>
                Real-time activity
              </div>
            </div>
            <div className='w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center'>
              <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
            </div>
          </div>

          <div className='md:col-span-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-300'>
            <div className='text-lg font-light mb-4'>TRENDING TOPICS</div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <div className='w-1.5 h-1.5 bg-emerald-400 rounded-full'></div>
                <span className='text-xs font-light text-zinc-400'>
                  AI & Future of Work
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-1.5 h-1.5 bg-emerald-400 rounded-full'></div>
                <span className='text-xs font-light text-zinc-400'>
                  Sustainable Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const WhyChooseUs = () => {
  return (
    <section className='py-32 px-8'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-extralight mb-20'>
          THE <span className='text-emerald-400'>ADVANTAGE</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
          {[
            {
              title: 'EXCLUSIVITY',
              desc: 'A carefully curated community of verified professionals committed to meaningful connections.',
            },
            {
              title: 'INTELLIGENCE',
              desc: 'Advanced AI systems ensure every connection has the potential for mutual professional growth.',
            },
            {
              title: 'EXCELLENCE',
              desc: 'Premium experience design with dedicated support for your networking success.',
            },
          ].map((item, index) => (
            <div key={index} className='group'>
              <div className='w-16 h-16 mx-auto mb-8 bg-emerald-400/10 border border-emerald-400/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300'>
                <div className='w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300'></div>
              </div>
              <h3 className='text-xl font-light mb-6 tracking-wide'>
                {item.title}
              </h3>
              <p className='text-zinc-400 font-light leading-relaxed'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className='py-32 px-8'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='relative bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-16 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-emerald-400/5'></div>
          <div className='absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-emerald-400/50 to-transparent -translate-x-1/2'></div>

          <div className='relative z-10'>
            <h2 className='text-4xl md:text-6xl font-extralight mb-8 leading-tight'>
              ELEVATE YOUR
              <br />
              <span className='text-emerald-400'>PROFESSIONAL JOURNEY</span>
            </h2>

            <p className='text-xl font-light text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
              Join the exclusive network of visionary professionals shaping the
              future of their industries.
            </p>

            <button className='group relative bg-emerald-400 text-black px-12 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:bg-emerald-300 hover:scale-105'>
              <span className='relative z-10 flex items-center'>
                Apply for Membership
                <ArrowUpRight className='ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>

            <p className='text-xs font-light text-zinc-500 mt-8 tracking-wide'>
              INVITATION-ONLY • PREMIUM EXPERIENCE • GLOBAL NETWORK
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className='border-t border-zinc-800/50 py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
              <span className='text-xl font-light tracking-wide'>AVIS</span>
            </div>
            <p className='text-zinc-400 font-light leading-relaxed max-w-md'>
              The premier destination for ambitious professionals seeking
              meaningful connections and accelerated career growth through
              intelligent curation.
            </p>
          </div>

          <div>
            <h3 className='font-light text-sm tracking-wide mb-6 text-zinc-300'>
              PLATFORM
            </h3>
            <div className='space-y-4'>
              {['Features', 'Membership', 'Success Stories'].map((item) => (
                <a
                  key={item}
                  href='#'
                  className='block text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-light'
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-light text-sm tracking-wide mb-6 text-zinc-300'>
              SUPPORT
            </h3>
            <div className='space-y-4'>
              {['Concierge', 'Resources', 'Contact'].map((item) => (
                <a
                  key={item}
                  href='#'
                  className='block text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-light'
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-xs font-light text-zinc-500 tracking-wide'>
            © 2025 AVIS COMMUNITY. CRAFTED FOR EXCELLENCE.
          </p>
          <div className='flex space-x-8 mt-4 md:mt-0'>
            {['Privacy', 'Terms', 'Ethics'].map((item) => (
              <a
                key={item}
                href='#'
                className='text-xs font-light text-zinc-500 hover:text-emerald-400 transition-colors duration-300 tracking-wide'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export const Details = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const Pattern = () => {
    return (
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className='absolute left-[50%] top-[50%] h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2'
          viewBox='0 0 100 100'
        >
          <defs>
            <pattern
              id='luxePattern'
              patternUnits='userSpaceOnUse'
              width='25'
              height='25'
            >
              <path
                d='M25 0H0V25'
                fill='none'
                className='stroke-neutral-300/10'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#luxePattern)' />
        </motion.svg>
      </div>
    )
  }

  return (
    <section className='relative min-h-screen w-full bg-neutral-950 py-24'>
      <Pattern />

      <motion.div style={{ opacity }} className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='aspect-square rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-1'>
              <div className='h-full w-full rounded-xl bg-neutral-950 p-8'>
                {/* Your content here */}
              </div>
            </div>
            <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-rose-500/20 to-purple-500/20 blur-xl' />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-6'
          >
            {/* Your content here */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

const AvisCommunityLanding = () => {
  return (
    <div className='min-h-screen bg-black text-white font-light max-w-6xl mx-auto'>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StepsComponent />
      <ServicesSection />
      <BentoDemo />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  )
}

export default AvisCommunityLanding
