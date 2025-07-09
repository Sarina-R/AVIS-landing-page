import { useState } from 'react'
import { motion } from 'framer-motion'

export const PlayfulButton: React.FC<{
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks((prev) => prev + 1)
    onClick?.()
  }

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{
        scale: 0.95,
        rotateZ: clicks % 2 === 0 ? -5 : 5,
      }}
      className={`
        group relative px-8 py-4 rounded-full overflow-hidden shadow-2xl
        transition-all duration-300 font-medium
        ${
          variant === 'primary'
            ? 'bg-primary-gradient text-foreground'
            : 'border border-border backdrop-blur-sm hover:bg-secondary/10'
        }
        ${className}
      `}
    >
      <span className='relative z-10 flex items-center gap-2'>{children}</span>

      {/* Fun click effect */}
      {clicks > 0 && (
        <motion.div
          key={clicks}
          className='absolute inset-0 bg-gradient-to-r from-primary-lighter/20 to-accent/20'
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Hover particles */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-accent rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              y: [0, -20, -40],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}
