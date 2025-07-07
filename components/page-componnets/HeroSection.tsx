import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { TextParticle } from './TextParticle'
import { HolographicText } from '../HolographicText'
import { PlayfulButton } from './PlayfulButton'
import { Play } from 'lucide-react'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
  const [funMode, setFunMode] = useState(false)

  return (
    <section className='h-screen relative flex items-center justify-center overflow-hidden bg-background'>
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
              className='text-4xl md:text-7xl max-w-3xl font-light text-foreground mb-4 cursor-pointer'
              whileHover={{ scale: 1.05, rotateY: 10 }}
              onClick={() => setFunMode(!funMode)}
              animate={
                funMode
                  ? {
                      color: ['#F5F5F5', '#8B1A25', '#FFD700', '#F5F5F5'],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: funMode ? Infinity : 0 }}
            >
              Fast and robust simulator for intelligent systems|
            </motion.h1>
            <div className='h-24 md:h-32 w-full max-w-4xl mx-auto'>
              <TextParticle
                text='AVIS'
                fontSize={100}
                particleColor='#8B1A25'
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
          className='text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-primary-lighter'
        >
          Built by experts for {''}
          <HolographicText className='inline'>Everyone</HolographicText>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className='flex flex-col sm:flex-row gap-6 justify-center items-center'
        >
          <PlayfulButton variant='secondary'>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Play className='w-4 h-4 text-accent' />
            </motion.div>
            Discover AVIS Engine
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
                } rounded-full border border-primary-lighter/30`}
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
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
