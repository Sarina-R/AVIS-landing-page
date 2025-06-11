'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Code,
  Palette,
  Target,
} from 'lucide-react'
import AvisTripleCore from '@/components/AvisTripleCore'
import MissionVision from '@/components/MissionVision'

interface ComponentsProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const AnimatedBackground = () => {
  return (
    <div className='fixed inset-0 z-0 overflow-hidden'>
      <svg className='absolute inset-0 w-full h-full' viewBox='0 0 1920 1080'>
        <defs>
          <radialGradient id='glow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='rgba(255,255,255,0.1)' />
            <stop offset='100%' stopColor='rgba(255,255,255,0)' />
          </radialGradient>
          <filter id='blur'>
            <feGaussianBlur stdDeviation='2' />
          </filter>
        </defs>

        {/* Animated Grid Lines */}
        <g stroke='rgba(255,255,255,0.05)' strokeWidth='1' fill='none'>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={i * 100}
              y1='0'
              x2={i * 100}
              y2='1080'
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={`h${i}`}
              x1='0'
              y1={i * 90}
              x2='1920'
              y2={i * 90}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </g>

        {/* Floating Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + i * 200}
            cy={200 + (i % 3) * 200}
            r='3'
            fill='url(#glow)'
            filter='url(#blur)'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 30, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Particle System Component
const ParticleSystem = ({ count = 50 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className='fixed inset-0 z-10 pointer-events-none'>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute bg-white rounded-full opacity-20'
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

const ModernCard: React.FC<ComponentsProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.1)',
      }}
      className={`
        relative backdrop-blur-sm bg-black/20 border border-white/10 
        rounded-2xl p-8 overflow-hidden group
        before:absolute before:inset-0 before:bg-gradient-to-br 
        before:from-white/5 before:to-transparent before:opacity-0 
        hover:before:opacity-100 before:transition-opacity before:duration-500
        ${className}
      `}
    >
      <div className='relative z-10'>{children}</div>

      {/* Glow effect */}
      <div className='absolute -inset-1 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />
    </motion.div>
  )
}

// Glitch Text Effect Component
const GlitchText: React.FC<ComponentsProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <span className='relative z-10'>{children}</span>
      <span
        className='absolute top-0 left-0 text-red-500 opacity-30 font-thin animate-pulse'
        style={{
          animation: 'glitch 0.3s infinite',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        }}
      >
        {children}
      </span>
      <span
        className='absolute top-0 left-0 text-blue-500 opacity-30 font-thin'
        style={{
          animation: 'glitch 0.3s infinite reverse',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        }}
      >
        {children}
      </span>
    </div>
  )
}

export default function ModernAvisLanding() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      <AnimatedBackground />
      <ParticleSystem />

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-2xl font-bold'
          >
            AVIS
          </motion.div>
          <div className='flex space-x-8'>
            {['About', 'Services', 'Vision', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className='hover:text-white/80 transition-colors relative group'
              >
                {item}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300' />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='h-screen relative flex items-center justify-center'>
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className='z-20 text-center'
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <GlitchText className='text-7xl md:text-9xl mb-8'>AVIS</GlitchText>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className='text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/70'
          >
            Where Innovation Meets <span className='text-white'>Infinity</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Explore Universe
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors'
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero 3D Element */}
        <div className='absolute inset-0 z-10'>
          <motion.div
            animate={{
              rotateY: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity },
            }}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          >
            <div className='w-96 h-96 relative'>
              <div
                className='absolute inset-0 rounded-full border border-white/20 animate-spin'
                style={{ animationDuration: '8s' }}
              />
              <div
                className='absolute inset-4 rounded-full border border-white/10 animate-spin'
                style={{
                  animationDuration: '12s',
                  animationDirection: 'reverse',
                }}
              />
              <div
                className='absolute inset-8 rounded-full border border-white/5 animate-spin'
                style={{ animationDuration: '16s' }}
              />
              <Sparkles className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white/30' />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-32 px-6 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-thin mb-8'>
              Digital <span className='text-white font-light'>Evolution</span>
            </h2>
            <div className='w-24 h-0.5 bg-white mx-auto mb-8' />
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              AVIS Group pioneers the convergence of technology and creativity,
              crafting digital experiences that transcend conventional
              boundaries.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <ModernCard delay={0.2}>
              <div className='space-y-6'>
                <div className='flex items-center gap-3 mb-6'>
                  <Zap className='w-6 h-6' />
                  <h3 className='text-2xl font-light'>Innovation DNA</h3>
                </div>
                <p className='text-white/80 leading-relaxed'>
                  We exist at the intersection of possibility and reality, where
                  each line of code carries the potential to reshape industries.
                  Our subsidiaries, AVIS Soft and AVIS Digital, represent the
                  dual forces of technological prowess and creative excellence.
                </p>
                <div className='grid grid-cols-2 gap-4 pt-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-thin mb-2'>∞</div>
                    <div className='text-sm text-white/60'>
                      Infinite Possibilities
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-thin mb-2'>◊</div>
                    <div className='text-sm text-white/60'>Precision Craft</div>
                  </div>
                </div>
              </div>
            </ModernCard>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='relative'
            >
              <div className='aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center'>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='relative w-64 h-64'
                >
                  <div className='absolute inset-0 rounded-full border-2 border-dashed border-white/20' />
                  <div className='absolute inset-4 rounded-full border border-white/10' />
                  <Globe className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/40' />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-32 px-6 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-thin mb-8'>
              Quantum <span className='text-white font-light'>Services</span>
            </h2>
            <div className='w-24 h-0.5 bg-white mx-auto' />
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            <ModernCard delay={0.1}>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <Code className='w-8 h-8' />
                  <Star className='w-4 h-4 text-white/40' />
                </div>
                <h3 className='text-2xl font-light'>AVIS Soft</h3>
                <p className='text-white/70 leading-relaxed'>
                  Revolutionary event management through AVIS Event platform.
                  Multilingual architecture with quantum-level analytics and
                  global payment orchestration.
                </p>
                <div className='flex flex-wrap gap-2 pt-4'>
                  {['Analytics', 'Multi-lang', 'Global Pay'].map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs bg-white/10 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ModernCard>

            <ModernCard delay={0.2}>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <Palette className='w-8 h-8' />
                  <Star className='w-4 h-4 text-white/40' />
                </div>
                <h3 className='text-2xl font-light'>Digital Agency</h3>
                <p className='text-white/70 leading-relaxed'>
                  Viral campaigns that transcend digital boundaries. Interactive
                  brandbooks powered by React, Vue.js, and Node.js ecosystems
                  for immersive brand experiences.
                </p>
                <div className='flex flex-wrap gap-2 pt-4'>
                  {['Viral Content', 'Interactive', 'Modern Stack'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 text-xs bg-white/10 rounded-full'
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ModernCard>

            <ModernCard delay={0.3}>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <Target className='w-8 h-8' />
                  <Star className='w-4 h-4 text-white/40' />
                </div>
                <h3 className='text-2xl font-light'>Global Expansion</h3>
                <p className='text-white/70 leading-relaxed'>
                  Strategic penetration across UAE, Saudi Arabia, Turkey, and
                  European markets. Subscription-based architecture for
                  sustainable exponential growth.
                </p>
                <div className='flex flex-wrap gap-2 pt-4'>
                  {['Middle East', 'Europe', 'Subscription'].map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs bg-white/10 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </section>

      <section id='tripleCore' className='py-32 px-6 relative'>
        <AvisTripleCore />
      </section>

      <section id='missionVision' className='py-32 px-6 relative'>
        <MissionVision />
      </section>

      {/* Beyond Tomorrow */}
      <section id='vision' className='py-32 px-6 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className='text-5xl md:text-6xl font-thin mb-12'>
              Beyond <span className='text-white font-light'>Tomorrow</span>
            </h2>

            <ModernCard className='text-left'>
              <div className='space-y-8'>
                <blockquote className='text-xl md:text-2xl font-light leading-relaxed text-white/90'>
                  "We position ourselves as architects of the digital future,
                  where technology serves not just functionality, but human
                  potential. Our mission transcends conventional boundaries—we
                  engineer solutions that elevate consciousness and empower
                  global transformation."
                </blockquote>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center'>
                    <span className='text-sm font-mono'>AZ</span>
                  </div>
                  <div>
                    <div className='font-medium'>
                      Amirmohammad Zarif Shahsavan Nejad
                    </div>
                    <div className='text-sm text-white/60'>
                      Co-Founder & Quantum Architect
                    </div>
                  </div>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-32 px-6 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8'>
            {[
              { value: '∞', label: 'Possibilities Unlocked' },
              { value: '92%', label: 'Client Satisfaction' },
              { value: '40%', label: 'Global Revenue Target' },
              { value: '25+', label: 'Countries Reached' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className='text-center'
              >
                <div className='text-4xl md:text-5xl font-thin mb-4'>
                  {stat.value}
                </div>
                <div className='text-white/60 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-16 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='text-2xl font-thin mb-4 md:mb-0'
            >
              AVIS GROUP
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-white/60 text-center'
            >
              <p>© 2025 AVIS Group. Transcending Reality.</p>
              <a
                href='https://avisengine.com'
                className='hover:text-white transition-colors inline-flex items-center gap-2 mt-2'
              >
                avisengine.com
                <ArrowRight className='w-3 h-3' />
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
