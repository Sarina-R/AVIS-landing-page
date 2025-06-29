import { motion, useScroll, useTransform } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { ModernCard } from './ModernCard'
import { Zap } from 'lucide-react'
import Waves from '../reactBits/Wave'

export default function AboutSection() {
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
          <div className='w-24 h-0.5 bg-gradient-to-r from-white to-white mx-auto mb-8' />
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            AVIS Group pioneers the convergence of technology and creativity,
            crafting digital experiences that transcend conventional boundaries.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <ModernCard>
            <div className='space-y-6'>
              <div className='flex items-center gap-3 mb-6'>
                <motion.div transition={{ duration: 0.5 }}>
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
                <motion.div className='text-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'>
                  <div className='text-3xl font-thin mb-2 text-purple-400'>
                    ∞
                  </div>
                  <div className='text-sm text-white/60'>
                    Infinite Possibilities
                  </div>
                </motion.div>
                <motion.div className='text-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'>
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
