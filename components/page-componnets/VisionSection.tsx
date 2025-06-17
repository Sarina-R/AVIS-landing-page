import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { ModernCard } from './ModernCard'

export default function VisionSection() {
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
                &quot;We position ourselves as architects of the digital future,
                where technology serves not just functionality, but human
                potential. Our mission transcends conventional boundaries—we
                engineer solutions that elevate consciousness and empower global
                transformation.&quot;
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
