'use client'

import { motion } from 'framer-motion'
import { DollarSign, Award, TrendingUp } from 'lucide-react'

const AvisTripleCore = () => {
  const coreElements = [
    {
      id: 'P',
      title: 'Profitability',
      subtitle: 'Wealth Creation & Profitability for AVIS Stakeholders',
      icon: DollarSign,
      description: [
        'Creating sustainable value and intelligent profitability for shareholders, employees, and business partners',
        'Developing innovative and sustainable business models to ensure long-term economic growth',
        'Fair distribution of benefits from financial successes among all stakeholders',
      ],
      color: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      position: { top: '5%', left: '42%', transform: 'translate(-50%, 0)' }, // Adjusted position
    },
    {
      id: 'Q',
      title: 'Quality',
      subtitle: 'Highest Quality Service to Customers',
      icon: Award,
      description: [
        'Delivering excellent products and services with global standards and satisfaction',
        'Attention to customer needs and fulfilling their expectations with commitment to quality and professional ethics',
        'Continuous monitoring of customer satisfaction and process improvement for constant enhancement of their experience',
      ],
      color: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      position: { bottom: '18%', left: '5%', transform: 'translate(-50%, 0)' }, // Adjusted position
    },
    {
      id: 'G',
      title: 'Growth',
      subtitle: 'Ambition, Growth & Continuous Development',
      icon: TrendingUp,
      description: [
        'Striving for organizational excellence through innovation, continuous learning, and process optimization',
        'Expanding activities in national and international arenas with a forward-looking and transformative approach',
        'Investment in human resources and advanced technologies to maintain leadership position in the industry',
      ],
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      position: { bottom: '18%', right: '5%', transform: 'translate(50%, 0)' }, // Adjusted position
    },
  ]

  return (
    <section className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            AVIS <span className='text-white font-light'>Triple Core</span>
          </h2>
          <div className='w-24 h-0.5 bg-white mx-auto mb-8' />
          <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>
            The three fundamental pillars that power our cosmic journey
          </p>
          <div className='text-3xl font-mono text-white/60'>P • Q • G</div>
        </motion.div>

        {/* Triangle Visualization */}
        <div className='relative mb-20'>
          <div className='aspect-square max-w-2xl mx-auto relative'>
            {/* Central Triangle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className='absolute inset-0'
            >
              <svg viewBox='0 0 400 400' className='w-full h-full'>
                <defs>
                  <linearGradient
                    id='triangleGrad'
                    x1='0%'
                    y1='0%'
                    x2='100%'
                    y2='100%'
                  >
                    <stop offset='0%' stopColor='rgba(255,255,255,0.1)' />
                    <stop offset='100%' stopColor='rgba(255,255,255,0.05)' />
                  </linearGradient>
                </defs>
                <motion.path
                  d='M200 50 L350 300 L50 300 Z'
                  fill='url(#triangleGrad)'
                  stroke='rgba(255,255,255,0.15)'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>

            {/* Core Elements at Triangle Points */}
            {coreElements.map((element, index) => {
              const Icon = element.icon
              return (
                <motion.div
                  key={element.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                  className='absolute'
                  style={element.position}
                >
                  <div className='relative group cursor-pointer'>
                    <div
                      className={`w-28 h-28 rounded-full bg-gradient-to-br ${element.bgGradient} border-2 border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/30 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500`}
                    >
                      <Icon
                        className={`w-12 h-12 text-transparent bg-gradient-to-br ${element.color} bg-clip-text drop-shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      />
                    </div>
                    <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'>
                      <div className='bg-black/90 backdrop-blur-md rounded-lg px-4 py-2.5 text-sm text-white whitespace-nowrap border border-white/10 shadow-xl'>
                        <span className='font-mono mr-2'>{element.id}</span>
                        <span className='font-light'>{element.title}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Central Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            >
              <div className='w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500'>
                <span className='text-3xl font-thin text-white/90'>A</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {coreElements.map((element, index) => {
            const Icon = element.icon
            return (
              <motion.div
                key={element.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='relative group'
              >
                <div className='relative backdrop-blur-sm bg-black/20 border border-white/10 rounded-2xl p-8 overflow-hidden h-full'>
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${element.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                  />

                  <div className='relative z-10'>
                    {/* Header */}
                    <div className='flex items-center gap-4 mb-6'>
                      <div
                        className={`p-3 bg-gradient-to-br ${element.bgGradient} rounded-full`}
                      >
                        <Icon
                          className={`w-6 h-6 text-transparent bg-gradient-to-br ${element.color} bg-clip-text`}
                        />
                      </div>
                      <div>
                        <div className='text-3xl font-mono text-white/60'>
                          {element.id}
                        </div>
                        <h3 className='text-2xl font-light'>{element.title}</h3>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <p
                      className={`text-transparent bg-gradient-to-br ${element.color} bg-clip-text font-medium mb-6`}
                    >
                      {element.subtitle}
                    </p>

                    {/* Description Points */}
                    <ul className='space-y-4'>
                      {element.description.map((point, i) => (
                        <li key={i} className='flex items-start gap-3'>
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${element.color} mt-2 flex-shrink-0`}
                          />
                          <span className='text-white/70 text-sm leading-relaxed'>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AvisTripleCore
