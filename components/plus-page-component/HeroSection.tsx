import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className='relative border-b border-white/10 min-h-screen flex items-center justify-center bg-background overflow-hidden'>
      <div
        className='absolute inset-0 z-0'
        style={{
          background: '',
          // 'radial-gradient(ellipse at center, #0f0f0f 0%, #090909 100%)',
        }}
      />

      {/* Red to Blue Blurred Blob */}
      <motion.div
        className='absolute w-[600px] h-[600px] bg-gradient-to-tr from-red-500 to-blue-500 rounded-full opacity-20 blur-[160px]'
        style={{ top: '-200px', left: '-150px' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Abstract Floating SVGs */}
      <motion.svg
        className='absolute top-0 left-0 w-[150%] h-[150%] opacity-30'
        viewBox='0 0 1200 800'
        fill='none'
      >
        <motion.path
          d='M0 400 Q300 0 600 400 T1200 400'
          stroke='hsl(0 0% 30%)'
          strokeWidth='2'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.svg>

      <motion.svg
        className='absolute bottom-0 right-0 w-[150%] h-[150%] opacity-20'
        viewBox='0 0 1200 800'
        fill='none'
      >
        <motion.path
          d='M0 600 Q300 300 600 600 T1200 600'
          stroke='hsl(0 0% 40%)'
          strokeWidth='1.5'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.svg>

      {/* Abstract Organic Shapes */}
      <motion.div
        className='absolute top-10 right-10 w-96 h-96 rounded-[40%] bg-blue-400 opacity-10 blur-3xl'
        animate={{ rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className='absolute bottom-10 left-10 w-72 h-72 rounded-[50%] bg-pink-400 opacity-10 blur-3xl'
        animate={{ rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Hero Content */}
      <div className='relative z-10 text-center space-y-6'>
        <h1 className='text-7xl font-bold tracking-tighter bg-gradient-to-tr from-red-400 to-blue-400 bg-clip-text text-transparent'>
          We Craft Cool Digital Things
        </h1>
        <p className='text-xl text-muted-foreground'>
          Design, Code, Motion, Detail
        </p>
      </div>
    </section>
  )
}
