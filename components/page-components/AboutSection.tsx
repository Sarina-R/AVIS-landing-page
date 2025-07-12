import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { ModernCard } from '../ModernCard'
import { GraduationCap, Layers, Zap } from 'lucide-react'
import { CodeBlock } from '../CodeBlock'
// import Waves from '../reactBits/Wave'

export default function AboutSection() {
  // const { scrollYProgress } = useScroll()
  // const waveAmpX = useTransform(scrollYProgress, [0, 1], [40, 60])
  // const waveAmpY = useTransform(scrollYProgress, [0, 1], [20, 30])

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
            Super easy to get{' '}
            <HolographicText className='font-light'>started</HolographicText>
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto' />
          {/* <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            AVIS Group pioneers the convergence of technology and creativity,
            crafting digital experiences that transcend conventional boundaries.
          </p> */}
        </motion.div>

        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <ModernCard>
            <div className='space-y-8'>
              <div className='flex items-center gap-3 mb-6'>
                <motion.div transition={{ duration: 0.5 }}>
                  <Zap className='w-6 h-6 text-primary' />
                </motion.div>
                <h3 className='text-2xl font-light'>
                  Simple API for best technologies
                </h3>
              </div>
              <p className='text-white/80 leading-relaxed'>
                Easy to understand software and API, easy to maintain. Just
                focus on your logic and AI.
              </p>
              <div className='grid grid-cols-2 gap-4 pt-6'>
                <motion.div className='text-center flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'>
                  <div className='text-xl mb-2 text-primary'>
                    <Layers />
                  </div>
                  <div className='text-sm text-white/60'>High Performance</div>
                </motion.div>
                <motion.div className='text-center flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'>
                  <div className='text-xl mb-2 text-accent'>
                    <GraduationCap />
                  </div>
                  <div className='text-sm text-white/60'>Online Courses</div>
                </motion.div>
                {/* <motion.div className='text-center p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer'>
                  <div className='text-xl font-thin mb-2 text-accent'>📄</div>
                  <div className='text-sm text-white/60'>Well-Documented</div>
                </motion.div> */}
              </div>
            </div>
          </ModernCard>

          <div className='height-full'>
            <CodeBlock />
          </div>

          {/* <Waves
            lineColor='#650d14'
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
          /> */}
        </div>
      </div>
    </section>
  )
}
