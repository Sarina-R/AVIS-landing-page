import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ModernCardProps } from '@/app/type'
import { GlowingEffect } from './ui/glowing-effect'

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`
        relative backdrop-blur-xl bg-primary-gradient
        border border-border rounded-2xl p-8 overflow-hidden group cursor-pointer
        shadow-lg hover:shadow-2xl transition-all duration-500
        dark:bg-primary-gradient dark:border-dark-border
        ${className}
      `}
    >
      <GlowingEffect
        glow
        blur={20}
        spread={25}
        proximity={80}
        className='z-0'
        disabled={false}
        variant='default'
      />
      <div className='relative z-10'>{children}</div>

      {/* Minimal glow effect */}
      <motion.div
        className='absolute inset-0 rounded-2xl opacity-0'
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, #8B1A25, transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle border highlight */}
      <motion.div
        className='absolute inset-0 rounded-2xl border border-primary-lighter opacity-0 dark:border-primary-lighter'
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Interactive sparkles */}
      {isHovered && (
        <motion.div
          className='absolute inset-0 pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-accent rounded-full'
              style={{
                left: `${mousePosition.x + (Math.random() - 0.5) * 100}px`,
                top: `${mousePosition.y + (Math.random() - 0.5) * 100}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
