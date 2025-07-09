'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import Squares from './reactBits/Squares'
import { HolographicText } from './HolographicText'

const MissionVision = () => {
  return (
    <section id='vision' className='py-32 px-6 relative overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Squares
          direction='diagonal'
          speed={0.3}
          borderColor='rgba(55, 65, 81, 0.15)' // Using border color #374151
          hoverFillColor='rgba(209, 73, 117, 0.1)' // Using accent color #D14975
          squareSize={60}
          opacity={0.15}
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            Our{' '}
            <HolographicText className='font-light'>
              Constellation
            </HolographicText>
          </h2>
          <motion.div
            className='w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto mb-8'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          <p className='text-xl text-muted max-w-3xl mx-auto'>
            Guiding principles that illuminate our path through the digital
            universe
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Vision Card */}
          <VisionMissionCard
            icon={Eye}
            title='Vision'
            gradient='from-primary/20 to-accent/20' // Using primary #650d14 and accent #D14975
            description={
              <>
                <p className='text-foreground leading-relaxed text-lg'>
                  To become a{' '}
                  <span className='text-foreground font-medium bg-gradient-to-r from-foreground to-foreground bg-clip-text'>
                    shining star
                  </span>{' '}
                  in the technology and digital marketing sky, pioneering
                  innovative and high-quality solutions globally.
                </p>
                <p className='text-muted leading-relaxed'>
                  A place where customers recognize us as a{' '}
                  <span className='text-foreground bg-gradient-to-r from-foreground to-foreground bg-clip-text'>
                    trusted and creative partner
                  </span>
                  , and sustainable foreign currency revenue serves as proof of
                  our global success.
                </p>
                <div className='flex items-center gap-2 pt-4'>
                  <Sparkles className='w-4 h-4 text-accent' />
                  <span className='text-sm text-muted'>Global Recognition</span>
                  <div className='w-1 h-1 bg-muted rounded-full' />
                  <span className='text-sm text-muted'>Sustainable Growth</span>
                </div>
              </>
            }
          />

          {/* Mission Card */}
          <VisionMissionCard
            icon={Target}
            title='Mission'
            gradient='from-secondary/20 to-accent/20' // Using secondary #43080d and accent #D14975
            description={
              <>
                <p className='text-foreground leading-relaxed text-lg'>
                  At AVIS Group, we are{' '}
                  <span className='text-foreground font-medium bg-gradient-to-r from-foreground to-foreground bg-clip-text'>
                    passionately committed
                  </span>{' '}
                  to creating technological products and delivering exceptional
                  digital marketing services.
                </p>
                <p className='text-muted leading-relaxed'>
                  We bring businesses to the{' '}
                  <span className='text-foreground bg-gradient-to-r from-foreground to-foreground bg-clip-text'>
                    peak of success
                  </span>{' '}
                  by focusing on quality, innovation, and customer-centricity,
                  creating lasting value for customers, stakeholders, and
                  society.
                </p>
                <p className='text-muted leading-relaxed'>
                  With a global perspective, we build bridges to international
                  markets.
                </p>
                <div className='flex items-center gap-2 pt-4'>
                  <Sparkles className='w-4 h-4 text-accent' />
                  <span className='text-sm text-muted'>Innovation First</span>
                  <div className='w-1 h-1 bg-muted rounded-full' />
                  <span className='text-sm text-muted'>Global Bridge</span>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}

const VisionMissionCard: React.FC<{
  icon: React.FC<{ className?: string }>
  title: string
  gradient: string
  description: React.ReactNode
}> = ({ icon: Icon, title, gradient, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: title === 'Vision' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative group backdrop-blur-xl bg-gradient-to-br ${gradient} border border-border rounded-2xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500`}
    >
      {/* Glow effect */}
      <motion.div
        className='absolute inset-0 rounded-2xl opacity-0'
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(209, 73, 117, 0.1), transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Border highlight */}
      <motion.div
        className='absolute inset-0 rounded-2xl border border-border opacity-0'
        animate={{ opacity: isHovered ? 0.6 : 0 }}
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
              className='absolute w-1 h-1 bg-accent rounded-full'
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

      <div className='relative z-10'>
        <motion.div
          className='flex items-center gap-4 mb-6'
          whileHover={{ x: 10, scale: 1.1, rotateY: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className='p-3 bg-white/15 rounded-full'
          >
            <Icon className='w-6 h-6 text-accent' />
          </motion.div>
          <h3 className='text-2xl font-light bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent'>
            {title}
          </h3>
        </motion.div>

        <div className='space-y-6'>{description}</div>
      </div>
    </motion.div>
  )
}

export default MissionVision
