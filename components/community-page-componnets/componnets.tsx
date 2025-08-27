import React, { useState, useEffect } from 'react'
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Users2,
  Zap,
  ChevronDown,
  Network,
  PersonStanding,
  Clock,
} from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const AnimatedPattern = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      <svg
        className='absolute inset-0 w-full h-full opacity-20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <pattern
            id='grid'
            width='60'
            height='60'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 60 0 L 0 0 0 60'
              fill='none'
              stroke='rgb(16, 185, 129)'
              strokeWidth='0.5'
              opacity='0.3'
            />
          </pattern>
          <linearGradient id='fadeGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0 }}
            />
            <stop
              offset='50%'
              style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.1 }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)' />
        <rect width='100%' height='100%' fill='url(#fadeGradient)' />
      </svg>
    </div>
  )
}

const FloatingOrbs = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Large center orb */}
      <div
        className='absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 animate-pulse'
        style={{
          background:
            'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Medium floating orbs */}
      <div
        className='absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-8'
        style={{
          background:
            'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite reverse',
        }}
      />

      {/* Small accent orbs */}
      <div
        className='absolute bottom-1/3 left-1/2 w-32 h-32 rounded-full opacity-6'
        style={{
          background:
            'radial-gradient(circle at center, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.08) 60%, transparent 80%)',
          animation: 'float 10s ease-in-out infinite',
        }}
      />

      <div
        className='absolute top-3/4 right-1/3 w-48 h-48 rounded-full opacity-7'
        style={{
          background:
            'radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.03) 50%, transparent 70%)',
          animation: 'float 14s ease-in-out infinite reverse',
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.95);
          }
          75% {
            transform: translateY(15px) translateX(5px) scale(1.02);
          }
        }
      `}</style>
    </div>
  )
}

const Abstract3DSVG = ({ className = '' }) => {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <svg
        className='w-full h-full'
        viewBox='0 0 400 300'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.8 }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.2 }}
            />
          </linearGradient>
          <linearGradient id='grad2' x1='100%' y1='0%' x2='0%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.6 }}
            />
            <stop
              offset='100%'
              style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.1 }}
            />
          </linearGradient>
        </defs>

        {/* Animated 3D-like shapes */}
        <g
          className='animate-spin'
          style={{ transformOrigin: '200px 150px', animationDuration: '20s' }}
        >
          <polygon
            points='100,50 300,100 250,200 150,180'
            fill='url(#grad1)'
            opacity='0.3'
          />
        </g>

        <g
          className='animate-spin'
          style={{
            transformOrigin: '200px 150px',
            animationDuration: '25s',
            animationDirection: 'reverse',
          }}
        >
          <polygon
            points='80,120 320,80 280,220 120,240'
            fill='url(#grad2)'
            opacity='0.2'
          />
        </g>

        {/* Floating dots */}
        <circle cx='100' cy='100' r='2' fill='rgb(16, 185, 129)' opacity='0.6'>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; 20,10; -10,20; 0,0'
            dur='8s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='300' cy='200' r='1.5' fill='rgb(6, 182, 212)' opacity='0.5'>
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0; -15,15; 10,-20; 0,0'
            dur='12s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

// COMPONENTS
export const HeroSection = () => {
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
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden lg:mt-8'>
      <FloatingOrbs />

      <AnimatedPattern />

      <div
        className='absolute inset-0 opacity-40 transition-opacity duration-300'
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.08) 30%, transparent 60%)`,
        }}
      />

      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-30 animate-pulse'></div>
        <div
          className='absolute top-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-teal-400 to-transparent opacity-30 animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-25 animate-pulse'
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className='relative z-10 text-center max-w-5xl mx-auto px-8'>
        <div className='mb-8 inline-flex items-center px-4 py-2 bg-zinc-900/60 border border-zinc-700/50 rounded-full backdrop-blur-md hover:bg-zinc-800/60 transition-all duration-500 hover:border-emerald-400/30'>
          <Sparkles className='w-4 h-4 text-emerald-400 mr-2 animate-pulse' />
          <span className='text-xs font-light text-zinc-300 tracking-wider'>
            AVIS GROUP ECOSYSTEM INTEGRATION
          </span>
        </div>

        {/* Enhanced typography with 3D effect */}
        <h1 className='text-6xl md:text-8xl lg:text-9xl font-extralight leading-[0.85] mb-12 tracking-tight'>
          <span className='block transform hover:scale-105 transition-transform duration-700'>
            CONNECT
          </span>
          <span
            className='block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700'
            style={{ textShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
          >
            COLLABORATE
          </span>
          <span className='block transform hover:scale-105 transition-transform duration-700'>
            GROW
          </span>
        </h1>

        <p className='text-lg md:text-xl font-light text-zinc-300 mb-16 max-w-2xl mx-auto leading-relaxed'>
          The professional networking platform that seamlessly integrates with
          <span className='text-emerald-400 font-medium'>
            {' '}
            AVIS Events and AVIS Challenge
          </span>{' '}
          for a unified career development experience.
        </p>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
          <Link href='https://events.avisengine.com/auth/register'>
            <button className='group relative bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-8 py-4 rounded-full font-medium flex items-center transition-all duration-500 hover:from-emerald-300 hover:to-emerald-400 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/25 transform-gpu hover:cursor-pointer'>
              <span className='relative z-10'>Join AVIS Community</span>
              <ArrowUpRight className='ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300 relative z-10' />
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </Link>

          <Link
            href='#community'
            className='group font-light text-zinc-200 px-8 py-4 border border-zinc-700/50 rounded-full hover:border-emerald-400/50 hover:bg-zinc-800/30 transition-all duration-300 backdrop-blur-sm inline-flex items-center'
          >
            Explore Features
            <ChevronDown className='inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300' />
          </Link>
        </div>
      </div>

      <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2'>
        <div className='w-px h-16 bg-gradient-to-b from-emerald-400/60 to-transparent animate-pulse'></div>
      </div>
    </section>
  )
}

export const AboutSection = () => {
  return (
    <section
      id='about-platform'
      className=' px-8 relative bg-zinc-950/50 border-y border-white/10'
    >
      <AnimatedPattern />

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <div className='relative z-10'>
            <h2 className='text-4xl md:text-6xl font-extralight leading-tight mb-8'>
              BUILDING
              <br />
              <span className='text-emerald-400 relative'>
                CONNECTIONS
                <div className='absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-emerald-400 to-transparent opacity-50'></div>
              </span>
            </h2>
            <p className='text-xl font-light text-zinc-300 leading-relaxed mb-8'>
              AVIS Community fosters dynamic connections, integrating your
              profile across AVIS Events and AVIS Challenge with AVIS Plus for a
              seamless networking experience.
            </p>
            <div className='space-y-4'>
              {[
                'Seamless Data Integration',
                'Vibrant Member Network',
                'Enhanced Collaboration Tools',
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300'
                >
                  <div className='w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                  <span className='font-light text-zinc-200 group-hover:text-emerald-300 transition-colors duration-300'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <Abstract3DSVG className='absolute inset-0 opacity-30' />

            <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 '></div>
            <div className='bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50  p-12 relative hover:bg-zinc-900/70 transition-all duration-500 hover:border-emerald-400/30'>
              <div className='grid grid-cols-2 gap-8'>
                {[
                  { value: '15K+', label: 'ACTIVE MEMBERS' },
                  { value: '92%', label: 'ENGAGEMENT RATE' },
                  { value: '60+', label: 'GLOBAL REACH' },
                  { value: '24/7', label: 'SUPPORT' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className='text-center group hover:scale-105 transition-transform duration-300'
                  >
                    <div className='text-3xl font-light text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300'>
                      {stat.value}
                    </div>
                    <div className='text-sm font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const PremiumFeatures = () => {
  return (
    <section id='community' className='border-t border-white/10 pt-32 relative'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <h2 className='text-4xl md:text-5xl font-extralight text-center mb-20'>
          AVIS <span className='text-emerald-400'>FEATURES</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: Network,
              title: 'SMART NETWORKING',
              desc: 'Connect with professionals across AVIS Group platforms effortlessly',
            },
            {
              icon: Globe,
              title: 'GLOBAL EVENTS',
              desc: 'Access exclusive AVIS Events worldwide with unified data',
            },
            {
              icon: Zap,
              title: 'REAL-TIME UPDATES',
              desc: 'Stay informed with instant AVIS Challenge insights',
            },
            {
              icon: PersonStanding,
              title: 'PERSONALIZED SUPPORT',
              desc: 'Dedicated AVIS Plus assistance for your journey',
            },
            {
              icon: Users2,
              title: 'EXCLUSIVE GROUPS',
              desc: 'Join private circles for top-tier collaboration',
            },
            {
              icon: Clock,
              title: 'ROUND-THE-CLOCK HELP',
              desc: '24/7 support for all AVIS Community members',
            },
          ].map((service, index) => (
            <div
              key={index}
              className='group relative bg-zinc-900/40 border border-zinc-700/50 p-8 hover:bg-zinc-900/60 hover:border-emerald-400/30 transition-all duration-500 backdrop-blur-sm hover:transform '
            >
              <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              <service.icon className='w-8 h-8 text-emerald-400 mb-6  group-hover:text-emerald-300 transition-all duration-300' />
              <h3 className='text-lg font-light mb-4 tracking-wide group-hover:text-emerald-300 transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='text-zinc-400 font-light text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300'>
                {service.desc}
              </p>

              <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const TheAVISEdge = () => {
  return (
    <section className='border-t border-white/10'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 h-52'>
          <div className='border-r border-white/20'></div>

          <div className='flex items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-extralight'>
              THE <span className='text-emerald-400'>AVIS EDGE</span>
            </h2>
          </div>

          <div className='border-l border-white/20'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          {[
            {
              title: 'UNIFIED ACCESS',
              desc: 'Seamlessly connect across AVIS Events, Challenge, and Plus with one profile.',
            },
            {
              title: 'SMART CONNECTIONS',
              desc: 'Intelligent systems match you with professionals for impactful collaborations.',
            },
            {
              title: 'PREMIUM EXPERIENCE',
              desc: 'Enjoy a tailored platform with dedicated support for your success.',
            },
          ].map((item, index) => (
            <div key={index} className='group border border-white/10 py-4 px-6'>
              <div className='w-16 h-16 mx-auto mb-8 bg-emerald-400/10 border border-emerald-400/20 flex	items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300 rounded-2xl'>
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

export const StepsComponent = () => {
  const steps = [
    {
      number: '01',
      title: 'SIGN UP',
      desc: 'Create your profile, instantly syncing with AVIS Events, Challenge, and Plus',
    },
    {
      number: '02',
      title: 'CONNECT',
      desc: 'Engage with a global network of professionals through intelligent matching',
    },
    {
      number: '03',
      title: 'GROW',
      desc: 'Leverage exclusive opportunities to elevate your career and collaborations',
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section
      id='steps'
      className='relative py-32 px-6 md:px-12 overflow-hidden sm:overflow-visible'
      ref={containerRef}
    >
      {/* Floating Shapes */}
      <motion.div
        className='absolute top-0 right-0 w-52 h-52 rounded-full bg-emerald-400/10 blur-3xl '
        style={{ y }}
      />
      <motion.div
        className='absolute top-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-emerald-400/10 blur-3xl opacity-80 hidden sm:block'
        style={{ y }}
      />
      <motion.div
        className='absolute top-[50rem] right-0 w-[50rem] h-[50rem] rounded-full bg-emerald-400/10 blur-3xl opacity-45 hidden sm:block'
        style={{ y }}
      />
      <motion.div
        className='absolute bottom-[60rem] left-20 w-[35rem] h-[35rem] rounded-full bg-emerald-400/10 blur-3xl opacity-40'
        style={{ y }}
      />
      <motion.div
        className='absolute bottom-0 right-0 w-[27rem] h-[27rem] rounded-full bg-emerald-500/10 blur-3xl opacity-80'
        style={{ y }}
      />

      {/* Content */}
      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-32'>
          <h2 className='text-4xl md:text-6xl font-extralight tracking-wide'>
            YOUR <span className='text-emerald-400'>AVIS JOURNEY</span>
          </h2>
        </div>

        <div className='space-y-20'>
          {steps.map((step, index) => (
            <div key={index} className='relative group sm:min-h-screen'>
              <div className='flex flex-col lg:flex-row items-center gap-16 sticky top-72 max-w-xl mx-auto'>
                <div className='lg:w-1/3 group-hover:translate-x-4 transition-transform duration-500'>
                  <div className='text-8xl font-extralight text-emerald-400/20 mb-4 group-hover:text-emerald-400/30 transition-colors duration-500'>
                    {step.number}
                  </div>
                  <h3 className='text-2xl font-light mb-4 tracking-wide group-hover:text-emerald-300 transition-colors duration-300'>
                    {step.title}
                  </h3>
                  <p className='text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300'>
                    {step.desc}
                  </p>
                </div>

                <div className='lg:w-2/3 relative'>
                  <div className='h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400 to-transparent relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse'></div>
                  </div>

                  <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const AVISInsights = () => {
  const [activeConnections, setActiveConnections] = useState(127)
  const [engagementRate, setEngagementRate] = useState(89)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnections((prev) => prev + Math.floor(Math.random() * 3) - 1)
      setEngagementRate((prev) =>
        Math.max(85, Math.min(95, prev + Math.floor(Math.random() * 3) - 1))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id='insights'
      className='pt-32 border-t border-white/10 relative bg-zinc-950/20'
    >
      <AnimatedPattern />

      <div className='max-w-7xl mx-auto relative z-10'>
        <h2 className='text-4xl md:text-5xl font-extralight text-center mb-20'>
          AVIS <span className='text-emerald-400'>INSIGHTS</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-12 auto-rows-[160px]'>
          <div className='md:col-span-8 md:row-span-2 bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20  p-8 flex flex-col justify-between relative overflow-hidden hover:from-emerald-400/15 hover:to-emerald-400/8 transition-all duration-500 group'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500'></div>
            <Abstract3DSVG className='absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500' />

            <div className='relative z-10'>
              <h3 className='text-3xl font-extralight mb-4 group-hover:text-emerald-300 transition-colors duration-300'>
                COMMUNITY DYNAMICS
              </h3>
              <p className='text-zinc-400 font-light group-hover:text-zinc-300 transition-colors duration-300'>
                Monitor real-time engagement across AVIS platforms
              </p>
            </div>
            <div className='flex items-end space-x-2 relative z-10'>
              {[20, 40, 30, 50, 35, 60, 45, 70].map((height, i) => (
                <div
                  key={i}
                  className={`w-4 bg-emerald-400 rounded-t-sm transition-all duration-1000 hover:bg-emerald-300`}
                  style={{
                    height: `${height}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className='md:col-span-4 bg-zinc-900/40 border border-zinc-700/50 p-6 hover:bg-zinc-900/60 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group'>
            <div className='text-2xl font-light text-emerald-400 mb-2 group-hover:text-emerald-300 transition-all duration-300'>
              {activeConnections}
            </div>
            <div className='text-sm font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
              ACTIVE MEMBERS
            </div>
            <div className='absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60'></div>
          </div>

          <div className='md:col-span-4 bg-zinc-900/40 border border-zinc-700/50 p-6 hover:bg-zinc-900/60 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group'>
            <div className='text-2xl font-light text-emerald-400 mb-2 group-hover:text-emerald-300 transition-all duration-300'>
              {engagementRate}%
            </div>
            <div className='text-sm font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
              COLLABORATION RATE
            </div>
          </div>

          <div className='md:col-span-6 bg-zinc-900/40 border border-zinc-700/50 p-6 flex items-center justify-between hover:bg-zinc-900/60 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group'>
            <div>
              <div className='text-lg font-light mb-1 group-hover:text-emerald-300 transition-colors duration-300'>
                AVIS PULSE
              </div>
              <div className='text-xs font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
                Live community activity
              </div>
            </div>
            <div className='w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors duration-300'>
              <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse group-hover:bg-emerald-300'></div>
            </div>
          </div>

          <div className='md:col-span-6 bg-zinc-900/40 border border-zinc-700/50 p-6 hover:bg-zinc-900/60 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group'>
            <div className='text-lg font-light mb-4 group-hover:text-emerald-300 transition-colors duration-300'>
              HOT TOPICS
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300'>
                <div className='w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse'></div>
                <span className='text-xs font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
                  Innovation & Collaboration
                </span>
              </div>
              <div
                className='flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300'
                style={{ transitionDelay: '100ms' }}
              >
                <div
                  className='w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse'
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <span className='text-xs font-light text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'>
                  Global Networking Trends
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const CTASection = () => {
  return (
    <section className=''>
      <div className='mx-auto text-center'>
        <div className='relative py-52 px-8 bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/50  p-16 overflow-hidden '>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-emerald-400/5'></div>
          <div className='absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-emerald-400/50 to-transparent -translate-x-1/2'></div>

          <div className='relative z-10'>
            <h2 className='text-4xl md:text-6xl font-extralight mb-8 leading-tight'>
              JOIN THE
              <br />
              <span className='text-emerald-400'>AVIS COMMUNITY TODAY</span>
            </h2>

            <p className='text-xl font-light text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
              Become part of a global network where professionals connect,
              collaborate, and grow with seamless access to AVIS Events,
              Challenge, and Plus.
            </p>

            <Link href='https://events.avisengine.com/auth/register'>
              <button className='group relative bg-emerald-400 text-black px-12 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:bg-emerald-300 hover:scale-105 hover:cursor-pointer'>
                <span className='relative z-10 flex items-center'>
                  Start Your AVIS Journey
                  <ArrowUpRight className='ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            </Link>

            <p className='text-xs font-light text-zinc-500 mt-8 tracking-wide'>
              GLOBAL NETWORK • SEAMLESS INTEGRATION • ENDLESS OPPORTUNITIES
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
