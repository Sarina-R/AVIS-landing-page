import { motion } from 'framer-motion'

export default function AnimatedBeamSection() {
  return (
    <section className='py-24 px-4 bg-black'>
      <div className='container mx-auto max-w-4xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-light mb-4'>Data Flow</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Watch how data flows through our systems with lightning speed.
          </p>
        </motion.div>
        <div className='relative w-full h-64 bg-black overflow-hidden rounded-xl border border-red-600/20'>
          <svg className='absolute inset-0 w-full h-full'>
            <defs>
              <linearGradient
                id='beam-gradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='transparent' />
                <stop offset='50%' stopColor='#ef4444' />
                <stop offset='100%' stopColor='transparent' />
              </linearGradient>
            </defs>
            <motion.line
              x1='0'
              y1='50%'
              x2='100%'
              y2='50%'
              stroke='url(#beam-gradient)'
              strokeWidth='2'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-white text-lg font-medium'>
              Animated Beam
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
