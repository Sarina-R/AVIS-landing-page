import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrophySVG } from './TrophySVG'
import { MedalSVG } from './MedalSVG'
import { ArrowRight } from 'lucide-react'
import { RetroGrid } from '../magicui/retro-grid'

interface HeroSectionProps {
  onCelebrate: () => void
}

export const HeroSection: FC<HeroSectionProps> = ({ onCelebrate }) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <RetroGrid
        className='opacity-40'
        angle={65}
        cellSize={45}
        lightLineColor='#FFD700'
        darkLineColor='#B8860B'
      />
      <div className='absolute inset-0 bg-gradient-radial from-yellow-500/20 via-transparent to-transparent' />
      <div className='relative -top-20 z-10 text-center px-6 max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-8'
        >
          <h1 className='text-7xl md:text-8xl font-bold mb-0 text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]'>
            AVIS
          </h1>
          <h2 className='text-3xl md:text-4xl font-light mb-4'>Challenge</h2>
        </motion.div>
        <div className='absolute top-22 -left-48 h-0.5 w-[250%] bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform -translate-y-1/2 animate-glow'>
          <div className='absolute inset-0 bg-yellow-400 blur-3xl'></div>
        </div>
      </div>
    </section>
  )
}
