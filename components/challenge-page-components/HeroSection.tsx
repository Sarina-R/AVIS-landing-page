import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WarpBackground } from '../magicui/warp-background'
import { TrophySVG } from './TrophySVG'

interface HeroSectionProps {
  onCelebrate: () => void
}

export const HeroSection: FC<HeroSectionProps> = ({ onCelebrate }) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'
    >
      <WarpBackground
        className='w-full h-full absolute inset-0 border-none p-0'
        beamsPerSide={4}
        beamSize={5}
        gridColor='rgba(255, 255, 255, 0.1)'
      >
        <div className='relative z-10 py-2 text-center max-w-[34.5rem] max-h-min mx-auto bg-black top-40'>
          <motion.div
            animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
            transition={{ duration: 4 }}
            className='drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]' // Golden glow
          >
            <TrophySVG className='w-24 h-24 mx-auto mb-6' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <h1 className='text-3xl md:text-5xl font-bold text-white'>
              AVIS
              <br />
              Challenge
            </h1>
            <p className='text-xl text-neutral-400'>
              The managed, global rendering layer for modern web applications.
            </p>
          </motion.div>
        </div>
      </WarpBackground>
    </section>
  )
}
