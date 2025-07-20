import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WarpBackground } from '../magicui/warp-background'

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
      <WarpBackground
        className='w-full h-full absolute inset-0 border-none p-0'
        beamsPerSide={4}
        beamSize={4}
        gridColor='rgba(255, 255, 255, 0.1)'
      >
        <div className='relative z-10 py-8 text-center max-w-[34.5rem] max-h-min mx-auto bg-black top-48 border border-white/10'>
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
            <div className='flex items-center justify-center gap-4'>
              <button className='bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2'>
                <span>Start Deploying</span>
                <ArrowRight className='w-4 h-4' />
              </button>
              <button className='border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors'>
                Get a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </WarpBackground>
    </section>
  )
}
