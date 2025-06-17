import { motion } from 'framer-motion'

export default function FloatingParticles({ count = 80 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
  }))

  return (
    <div className='fixed inset-0 z-10 pointer-events-none'>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute rounded-full'
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(59,130,246,0.4) 50%, transparent 100%)`,
            boxShadow: '0 0 20px rgba(147,51,234,0.5)',
          }}
          animate={{
            y: [-30, -150],
            x: [0, Math.sin(particle.id) * 100],
            opacity: [0, 0.8, 0.4, 0.9, 0],
            scale: [0, 1.2, 0.8, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
