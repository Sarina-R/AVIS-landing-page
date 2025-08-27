'use client'

import { useState, useEffect, useRef, JSX } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Globe, Lock, Sparkles } from 'lucide-react'

interface Section {
  title: string
  description: string
  icon: JSX.Element
  content: JSX.Element
}

const AVISPlusHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const svgControls = useAnimation()
  const plusControls = useAnimation()
  const [svgRef, svgInView] = useInView({ triggerOnce: false, threshold: 0.5 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          )
          if (entry.isIntersecting && index !== -1) {
            setActiveSection(index)
          }
        })
      },
      { threshold: 0.6, rootMargin: '-10% 0px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (svgInView) {
      svgControls.start({
        pathLength: 1,
        pathOffset: 0,
        transition: {
          pathLength: { duration: 2.5, ease: 'easeInOut' },
          pathOffset: { duration: 2.5, ease: 'easeInOut' },
        },
      })
      setTimeout(() => {
        plusControls.start({
          scale: [0, 1.05, 1],
          opacity: [0, 0.8, 1],
          rotate: [0, 5, 0],
          transition: {
            scale: { duration: 0.8, ease: 'backOut' },
            opacity: { duration: 0.6 },
            rotate: { duration: 0.8, ease: 'backOut' },
          },
        })
      }, 2200)
    } else {
      svgControls.start({
        pathLength: 0,
        pathOffset: 1,
      })
      plusControls.start({
        scale: 0,
        opacity: 0,
        rotate: 0,
      })
    }
  }, [svgInView, svgControls, plusControls])

  const sections: Section[] = [
    {
      title: 'Quick Start',
      description: 'Join AVIS Plus instantly.',
      icon: <Zap className='w-5 h-5 text-white' />,
      content: <div className='text-sm text-gray-400'>One-tap access</div>,
    },
    {
      title: 'Worldwide Link',
      description: 'Connect globally with ease.',
      icon: <Globe className='w-5 h-5 text-white' />,
      content: <div className='text-sm text-gray-400'>Global support</div>,
    },
    {
      title: 'Safe Login',
      description: 'Secure your AVIS identity.',
      icon: <Lock className='w-5 h-5 text-white' />,
      content: <div className='text-sm text-gray-400'>End-to-end security</div>,
    },
    {
      title: 'New Tools',
      description: 'Discover AVIS Plus features.',
      icon: <Sparkles className='w-5 h-5 text-white' />,
      content: <div className='text-sm text-gray-400'>Explore today</div>,
    },
  ]

  return (
    <div className='relative min-h-screen bg-black/50 backdrop-blur-md font-sans px-10'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-pink-700/15 to-[#1F11CE]/15 xl:h-full h-[150vh]' />

      <div className='grid grid-cols-2 relative z-10'>
        {/* LEFT SIDE */}
        <div className='cols1'>
          <div className='relative px-4 py-12 min-h-screen'>
            <div className='relative z-10 max-w-2xl mx-auto'>
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    sectionRefs.current[index] = el
                  }}
                  className='py-8 border-b border-neutral-700/30 last:border-b-0'
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    activeSection === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0.6, y: 10 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className='flex items-center gap-4'>
                    <motion.div
                      className='w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700/50'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {section.icon}
                    </motion.div>
                    <div>
                      <h2 className='text-lg font-medium text-white'>
                        {section.title}
                      </h2>
                      <p className='text-sm text-neutral-400 mt-1'>
                        {section.description}
                      </p>
                      {section.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE with Animated SVG */}
        <div className='cols-1 flex items-center justify-center relative min-h-screen'>
          {/* Background geometric elements */}
          <div className='absolute inset-0 overflow-hidden'>
            {/* Subtle grid pattern */}
            <div
              className='absolute inset-0 opacity-[0.03]'
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Floating geometric shapes */}
            <motion.div
              className='absolute top-1/4 left-1/4 w-2 h-2 border border-white/20 rotate-45'
              animate={{
                rotate: [45, 135, 45],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className='absolute bottom-1/3 right-1/4 w-1 h-8 bg-white/10 rounded-full'
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute top-1/2 right-1/3 w-6 h-6 border border-white/15 rounded-full'
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Main logo container with better positioning */}
          <div className='relative z-10 flex flex-col items-center justify-center w-full max-w-md'>
            {/* Animated SVG with improved sizing */}
            <motion.svg
              ref={svgRef}
              viewBox='0 0 124.38 107.65'
              xmlns='http://www.w3.org/2000/svg'
              className='w-72 h-auto mb-8'
              preserveAspectRatio='xMidYMid meet'
            >
              <defs>
                <filter id='glow'>
                  <feGaussianBlur stdDeviation='1.5' result='coloredBlur' />
                  <feMerge>
                    <feMergeNode in='coloredBlur' />
                    <feMergeNode in='SourceGraphic' />
                  </feMerge>
                </filter>
              </defs>
              <motion.polyline
                fill='transparent'
                stroke='white'
                strokeWidth={1.2}
                strokeLinecap='round'
                strokeLinejoin='round'
                fillRule='evenodd'
                filter='url(#glow)'
                points='0 80.93 15.48 107.72 30.95 80.93 62.17 80.93 77.64 107.72 97.43 107.72 108.59 107.72 108.93 107.72 124.4 80.93 77.68 0 46.73 0 62.2 26.81 93.44 80.93 93.11 80.93 77.64 80.93 62.17 80.93 46.57 53.9 31.08 27.09 0 80.93'
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={svgControls}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))',
                }}
              />
            </motion.svg>

            {/* Plus sign repositioned and integrated */}
            <motion.div
              className='absolute top-0 right-20 text-white text-6xl select-none font-thin tracking-wider'
              style={{
                filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.3))',
                fontWeight: 100,
              }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={plusControls}
              whileHover={{
                scale: 1.1,
                rotate: 180,
                transition: { duration: 0.4, ease: 'backOut' },
              }}
            >
              +
            </motion.div>

            {/* Brand text */}
            <motion.div
              className='mt-6 text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className='text-white/50 text-sm font-light tracking-[0.2em] uppercase'>
                AVIS Plus
              </div>
              <div className='bg-white/20 w-32 h-[0.1px]' />
              <div className='text-white/30 text-xs font-light tracking-wider mt-1'>
                Enhanced Experience
              </div>
            </motion.div>
          </div>

          {/* Decorative corner elements */}
          <motion.div
            className='absolute top-8 right-8 w-16 h-[1px] bg-gradient-to-r from-white/20 to-transparent'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.5, duration: 1.5 }}
          />
          <motion.div
            className='absolute top-8 right-8 w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 4, duration: 1.5 }}
          />
        </div>
      </div>
    </div>
  )
}

export default AVISPlusHub
