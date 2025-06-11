'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Sparkles } from 'lucide-react'

const MissionVision = () => {
  return (
    <section className='py-32 px-6 relative overflow-hidden'>
      {/* Background SVG Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <svg
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <pattern id='grid' width='8' height='8' patternUnits='userSpaceOnUse'>
            <path
              d='M 8 0 L 0 0 0 8'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
            />
          </pattern>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
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
            Our <span className='text-white font-light'>Constellation</span>
          </h2>
          <motion.div
            className='w-24 h-0.5 bg-white/30 mx-auto mb-8'
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 1 }}
          />
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            Guiding principles that illuminate our path through the digital
            universe
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className='relative group'
          >
            <div className='relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden min-h-full'>
              <div className='absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg' />

              <div className='relative z-10'>
                <motion.div
                  className='flex items-center gap-4 mb-6'
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className='p-3 bg-white/10 rounded-full'>
                    <Eye className='w-6 h-6 text-white/80' />
                  </div>
                  <h3 className='text-3xl font-light'>Vision</h3>
                </motion.div>

                <div className='space-y-6'>
                  <p className='text-white/80 leading-relaxed text-lg'>
                    To become a{' '}
                    <span className='text-white font-medium'>shining star</span>{' '}
                    in the technology and digital marketing sky, pioneering
                    innovative and high-quality solutions globally.
                  </p>

                  <p className='text-white/70 leading-relaxed'>
                    A place where customers recognize us as a{' '}
                    <span className='text-white/90'>
                      trusted and creative partner
                    </span>
                    , and sustainable foreign currency revenue serves as proof
                    of our global success.
                  </p>

                  <div className='flex items-center gap-2 pt-4'>
                    <Sparkles className='w-4 h-4 text-white/80' />
                    <span className='text-sm text-white/60'>
                      Global Recognition
                    </span>
                    <div className='w-1 h-1 bg-white/30 rounded-full' />
                    <span className='text-sm text-white/60'>
                      Sustainable Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className='relative group'
          >
            <div className='relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden'>
              <div className='absolute -inset-1 bg-gradient-to-r from-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg' />

              <div className='relative z-10'>
                <motion.div
                  className='flex items-center gap-4 mb-6'
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className='p-3 bg-white/10 rounded-full'>
                    <Target className='w-6 h-6 text-white/80' />
                  </div>
                  <h3 className='text-3xl font-light'>Mission</h3>
                </motion.div>

                <div className='space-y-6'>
                  <p className='text-white/80 leading-relaxed text-lg'>
                    At AVIS Group, we are{' '}
                    <span className='text-white font-medium'>
                      passionately committed
                    </span>{' '}
                    to creating technological products and delivering
                    exceptional digital marketing services.
                  </p>

                  <p className='text-white/70 leading-relaxed'>
                    We bring businesses to the{' '}
                    <span className='text-white/90'>peak of success</span> by
                    focusing on quality, innovation, and customer-centricity,
                    creating lasting value for customers, stakeholders, and
                    society.
                  </p>

                  <p className='text-white/70 leading-relaxed'>
                    With a global perspective, we build bridges to international
                    markets.
                  </p>

                  <div className='flex items-center gap-2 pt-4'>
                    <Sparkles className='w-4 h-4 text-white/80' />
                    <span className='text-sm text-white/60'>
                      Innovation First
                    </span>
                    <div className='w-1 h-1 bg-white/30 rounded-full' />
                    <span className='text-sm text-white/60'>Global Bridge</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
