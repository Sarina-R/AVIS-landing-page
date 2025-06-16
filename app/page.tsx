'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Code,
  Palette,
  Target,
  Play,
  Menu,
  X,
  Rocket,
  Heart,
} from 'lucide-react'
import Waves from '@/components/reactBits/Wave'
import AvisTripleCore from '@/components/AvisTripleCore'
import MissionVision from '@/components/MissionVision'

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
}

interface TextParticleProps {
  text: string
  fontSize?: number
  fontFamily?: string
  particleSize?: number
  particleColor?: string
  particleDensity?: number
  backgroundColor?: string
  className?: string
}

const TextParticle: React.FC<TextParticleProps> = ({
  text = 'AVIS',
  fontSize = 90,
  fontFamily = 'Arial, sans-serif',
  particleSize = 2,
  particleColor = '#ffffff',
  particleDensity = 6,
  backgroundColor = 'transparent',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mouse, setMouse] = useState({
    x: null as number | null,
    y: null as number | null,
  })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initText()
    }

    const initText = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px ${fontFamily}`
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      const x = canvas.width / 2
      const y = canvas.height / 2

      ctx.fillText(text, x, y)

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      )
      const newParticles: Particle[] = []

      for (let y = 0; y < textCoordinates.height; y += particleDensity) {
        for (let x = 0; x < textCoordinates.width; x += particleDensity) {
          const index = (y * textCoordinates.width + x) * 4
          const alpha = textCoordinates.data[index + 3]

          if (alpha > 128) {
            newParticles.push({
              x,
              y,
              size: particleSize,
              baseX: x,
              baseY: y,
              density: Math.random() * 30 + 1,
              color: particleColor,
            })
          }
        }
      }

      setParticles(newParticles)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [text, fontSize, fontFamily, particleSize, particleColor, particleDensity])

  useEffect(() => {
    if (particles.length === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      particles.forEach((particle) => {
        let dx = 0
        let dy = 0
        let distance = 0
        let forceDirectionX = 0
        let forceDirectionY = 0

        if (mouse.x !== null && mouse.y !== null) {
          dx = mouse.x - particle.x
          dy = mouse.y - particle.y
          distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            forceDirectionX = (dx / distance) * 4
            forceDirectionY = (dy / distance) * 4
          }
        }

        const moveX = forceDirectionX + (particle.baseX - particle.x) * 0.05
        const moveY = forceDirectionY + (particle.baseY - particle.y) * 0.05

        particle.x += moveX
        particle.y += moveY

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, mouse, backgroundColor])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseLeave = () => {
    setMouse({ x: null, y: null })
  }

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  )
}

const GalaxyBackground = () => {
  return (
    <div className='fixed inset-0 z-0 overflow-hidden bg-black'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20' />

      <svg className='absolute inset-0 w-full h-full' viewBox='0 0 1920 1080'>
        <defs>
          <radialGradient id='starGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='rgba(255,255,255,0.8)' />
            <stop offset='50%' stopColor='rgba(147,51,234,0.4)' />
            <stop offset='100%' stopColor='rgba(59,130,246,0.2)' />
          </radialGradient>
          <filter id='glow'>
            <feGaussianBlur stdDeviation='3' />
          </filter>
        </defs>

        {Array.from({ length: 100 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={Math.random() * 2 + 0.5}
            fill='url(#starGlow)'
            filter='url(#glow)'
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.3, 1, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`grid-${i}`}
            x1={i * 96}
            y1='0'
            x2={i * 96}
            y2='1080'
            stroke='rgba(147,51,234,0.1)'
            strokeWidth='1'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>

      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
    </div>
  )
}

const FloatingParticles = ({ count = 80 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
  }))

  return (
    <div className='fixed inset-0 z-10 pointer-events-none'>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute rounded-full'
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(59,130,246,0.4) 50%, transparent 100%)`,
            boxShadow: '0 0 20px rgba(147,51,234,0.5)',
          }}
          animate={{
            y: [-30, -150],
            x: [0, Math.sin(particle.id) * 100],
            opacity: [0, 0.8, 0.4, 0.9, 0],
            scale: [0, 1.2, 0.8, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        y: -8,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`
        relative backdrop-blur-xl bg-gradient-to-br from-white/5 via-purple-500/5 to-blue-500/5
        border border-white/10 rounded-2xl p-8 overflow-hidden group cursor-pointer
        shadow-lg hover:shadow-2xl transition-all duration-500
        ${className}
      `}
    >
      <div className='relative z-10'>{children}</div>

      {/* Minimal glow effect */}
      <motion.div
        className='absolute inset-0 rounded-2xl opacity-0'
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.1), transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle border highlight */}
      <motion.div
        className='absolute inset-0 rounded-2xl border border-white/20 opacity-0'
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Interactive sparkles */}
      {isHovered && (
        <motion.div
          className='absolute inset-0 pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-purple-400 rounded-full'
              style={{
                left: `${mousePosition.x + (Math.random() - 0.5) * 100}px`,
                top: `${mousePosition.y + (Math.random() - 0.5) * 100}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export const HolographicText: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className='relative z-10 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
        {children}
      </span>
    </div>
  )
}

const PlayfulButton: React.FC<{
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks((prev) => prev + 1)
    onClick?.()
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        rotateZ: clicks % 2 === 0 ? 2 : -2,
      }}
      whileTap={{
        scale: 0.95,
        rotateZ: clicks % 2 === 0 ? -5 : 5,
      }}
      className={`
        group relative px-8 py-4 rounded-full overflow-hidden shadow-2xl
        transition-all duration-300 font-medium
        ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
            : 'border border-white/30 backdrop-blur-sm hover:bg-white/10'
        }
        ${className}
      `}
    >
      <span className='relative z-10 flex items-center gap-2'>{children}</span>

      {/* Fun click effect */}
      {clicks > 0 && (
        <motion.div
          key={clicks}
          className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20'
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Hover particles */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              y: [0, -20, -40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className='text-2xl font-bold cursor-pointer'
        >
          <HolographicText>AVIS</HolographicText>
        </motion.div>

        <div className='hidden md:flex space-x-8'>
          {['About', 'Services', 'Vision', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.1, y: -2 }}
              className='relative text-white/80 hover:text-white transition-colors group'
            >
              {item}
              <motion.span
                className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400'
                initial={{ width: 0 }}
                animate={{ width: hoveredItem === item ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className='md:hidden text-white p-2'
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10'
        >
          <div className='px-6 py-4 space-y-4'>
            {['About', 'Services', 'Vision', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='block text-white/80 hover:text-white transition-colors'
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
  const [funMode, setFunMode] = useState(false)

  return (
    <section className='h-screen relative flex items-center justify-center overflow-hidden'>
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className='z-20 text-center px-6'
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='mb-8'
        >
          <div className='flex flex-col items-center'>
            <motion.h1
              className='text-7xl md:text-8xl font-light text-white mb-4 cursor-pointer'
              whileHover={{ scale: 1.05, rotateY: 10 }}
              onClick={() => setFunMode(!funMode)}
              animate={
                funMode
                  ? {
                      color: ['#ffffff', '#9333ea', '#3b82f6', '#ffffff'],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: funMode ? Infinity : 0 }}
            >
              AVIS
            </motion.h1>
            <div className='h-24 md:h-32 w-full max-w-4xl mx-auto'>
              <TextParticle
                text='GROUP'
                fontSize={100}
                particleColor='#9333ea'
                particleSize={2}
                particleDensity={4}
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/70'
        >
          Where Innovation Meets{' '}
          <HolographicText className='inline'>Infinity</HolographicText>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className='flex flex-col sm:flex-row gap-6 justify-center items-center'
        >
          <PlayfulButton>
            Explore Universe
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className='w-4 h-4' />
            </motion.div>
          </PlayfulButton>

          <PlayfulButton variant='secondary'>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Play className='w-4 h-4' />
            </motion.div>
            Watch Demo
          </PlayfulButton>
        </motion.div>
      </motion.div>

      <div className='absolute inset-0 z-10'>
        <motion.div
          animate={{
            rotateY: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateY: { duration: 30, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity },
          }}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
          whileHover={{ scale: 1.2 }}
        >
          <div className='w-96 h-96 relative'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`absolute inset-${
                  i * 4
                } rounded-full border border-purple-500/20`}
                style={{
                  animation: `spin ${8 + i * 4}s linear infinite ${
                    i % 2 === 0 ? '' : 'reverse'
                  }`,
                }}
              />
            ))}
            <motion.div
              whileHover={{ rotate: 180, scale: 1.2 }}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            >
              <Sparkles className='w-8 h-8 text-purple-400' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const { scrollYProgress } = useScroll()
  const waveAmpX = useTransform(scrollYProgress, [0, 1], [40, 60])
  const waveAmpY = useTransform(scrollYProgress, [0, 1], [20, 30])

  return (
    <section id='about' className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto h-full'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            Digital{' '}
            <HolographicText className='font-light'>Evolution</HolographicText>
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8' />
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            AVIS Group pioneers the convergence of technology and creativity,
            crafting digital experiences that transcend conventional boundaries.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <ModernCard delay={0.2}>
            <div className='space-y-6'>
              <div className='flex items-center gap-3 mb-6'>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className='w-6 h-6 text-purple-400' />
                </motion.div>
                <h3 className='text-2xl font-light'>Innovation DNA</h3>
              </div>
              <p className='text-white/80 leading-relaxed'>
                We exist at the intersection of possibility and reality, where
                each line of code carries the potential to reshape industries.
                Our subsidiaries represent the dual forces of technological
                prowess and creative excellence.
              </p>
              <div className='grid grid-cols-2 gap-4 pt-6'>
                <motion.div
                  className='text-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                >
                  <div className='text-3xl font-thin mb-2 text-purple-400'>
                    ∞
                  </div>
                  <div className='text-sm text-white/60'>
                    Infinite Possibilities
                  </div>
                </motion.div>
                <motion.div
                  className='text-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'
                  whileHover={{ scale: 1.05, rotateY: -10 }}
                >
                  <div className='text-3xl font-thin mb-2 text-blue-400'>◊</div>
                  <div className='text-sm text-white/60'>Precision Craft</div>
                </motion.div>
              </div>
            </div>
          </ModernCard>

          <Waves
            lineColor='color-mix(in oklab, oklch(71.4% 0.203 305.504) 50%, transparent)'
            backgroundColor='black'
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={waveAmpX.get()}
            waveAmpY={waveAmpY.get()}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={16}
            yGap={36}
            className='max-h-[369px] right-0 rounded-xl'
          />
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'AVIS Soft',
      description:
        'Revolutionary event management through quantum-level analytics and global payment orchestration.',
      tags: ['Analytics', 'Multi-lang', 'Global Pay'],
      gradient: 'from-purple-600/20 to-blue-600/20',
    },
    {
      icon: Palette,
      title: 'Digital Agency',
      description:
        'Viral campaigns that transcend digital boundaries with immersive brand experiences.',
      tags: ['Viral Content', 'Interactive', 'Modern Stack'],
      gradient: 'from-blue-600/20 to-cyan-600/20',
    },
    {
      icon: Target,
      title: 'Global Expansion',
      description:
        'Strategic penetration across UAE, Saudi Arabia, Turkey, and European markets.',
      tags: ['Middle East', 'Europe', 'Subscription'],
      gradient: 'from-cyan-600/20 to-purple-600/20',
    },
  ]

  return (
    <section id='services' className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            Quantum{' '}
            <HolographicText className='font-light'>Services</HolographicText>
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, i) => (
            <ModernCard key={service.title} delay={0.1 * (i + 1)}>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className='w-8 h-8 text-purple-400' />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Star className='w-4 h-4 text-white/40' />
                  </motion.div>
                </div>
                <h3 className='text-2xl font-light'>{service.title}</h3>
                <p className='text-white/70 leading-relaxed'>
                  {service.description}
                </p>
                <div className='flex flex-wrap gap-2 pt-4'>
                  {service.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className='px-3 py-1 text-xs bg-white/10 rounded-full border border-white/20 cursor-pointer'
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const VisionSection = () => {
  return (
    <section id='vision' className='py-32 px-6 relative'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-12'>
            Beyond{' '}
            <HolographicText className='font-light'>Tomorrow</HolographicText>
          </h2>

          <ModernCard className='text-left'>
            <div className='space-y-8'>
              <blockquote className='text-xl md:text-2xl font-light leading-relaxed text-white/90'>
                "We position ourselves as architects of the digital future,
                where technology serves not just functionality, but human
                potential. Our mission transcends conventional boundaries—we
                engineer solutions that elevate consciousness and empower global
                transformation."
              </blockquote>
              <div className='flex items-center gap-4'>
                <motion.div
                  className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border border-white/20 cursor-pointer'
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className='text-sm font-mono'>AZ</span>
                </motion.div>
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
  )
}

const StatsSection = () => {
  const stats = [
    { value: '∞', label: 'Possibilities Unlocked' },
    { value: '92%', label: 'Client Satisfaction' },
    { value: '40%', label: 'Global Revenue Target' },
    { value: '25+', label: 'Countries Reached' },
  ]

  return (
    <section className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 20px 40px rgba(147,51,234,0.2)',
              }}
              className='text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl cursor-pointer'
            >
              <motion.div
                className='text-4xl md:text-5xl font-thin mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                whileHover={{ scale: 1.2 }}
              >
                {stat.value}
              </motion.div>
              <div className='text-white/60 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className='py-16 border-t border-white/10 backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-thin mb-4 md:mb-0 cursor-pointer'
          >
            <HolographicText>AVIS GROUP</HolographicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-white/60 text-center'
          >
            <p>© 2025 AVIS Group. Transcending Reality.</p>
            <motion.a
              href='https://avisengine.com'
              className='hover:text-white transition-colors inline-flex items-center gap-2 mt-2 group'
              whileHover={{ scale: 1.05 }}
            >
              avisengine.com
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className='w-3 h-3' />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default function ModernGalaxyAvisLanding() {
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
