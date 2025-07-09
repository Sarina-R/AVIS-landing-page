import { motion } from 'framer-motion'

export default function GalaxyBackground() {
  return (
    <div className='fixed inset-0 z-0 overflow-hidden bg-black'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20' />

      <svg className='absolute inset-0 w-full h-full' viewBox='0 0 1920 1080'>
        <defs>
          <radialGradient id='starGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='rgba(255,255,255,0.8)' />
            <stop offset='50%' stopColor='rgba(147,51,234,0.4)' />
            <stop offset='100%' stopColor='rgba(59,130,246,0.2)' />
          </radialGradient>
          <filter id='glow'>
            <feGaussianBlur stdDeviation='3' />
          </filter>
        </defs>

        {Array.from({ length: 100 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={Math.random() * 2 + 0.5}
            fill='url(#starGlow)'
            filter='url(#glow)'
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.3, 1, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`grid-${i}`}
            x1={i * 96}
            y1='0'
            x2={i * 96}
            y2='1080'
            stroke='rgba(147,51,234,0.1)'
            strokeWidth='1'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>

      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
    </div>
  )
}
