import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown } from 'lucide-react'

interface ConfettiPieceProps {
  delay: number
}

const ConfettiPiece: FC<ConfettiPieceProps> = ({ delay }) => (
  <motion.div
    initial={{ opacity: 1, y: -100, x: Math.random() * 100 - 50, rotate: 0 }}
    animate={{ y: window.innerHeight + 100, rotate: 360, opacity: 0 }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay,
      ease: 'easeIn',
      repeat: 0,
    }}
    className={`absolute w-3 h-3 ${
      Math.random() > 0.5
        ? 'bg-blue-400'
        : Math.random() > 0.5
        ? 'bg-purple-500'
        : 'bg-pink-400'
    } ${Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm'}`}
    style={{ left: `${Math.random() * 100}%` }}
  />
)

interface CelebrationPopupProps {
  isVisible: boolean
  onClose: () => void
}

export const CelebrationPopup: FC<CelebrationPopupProps> = ({
  isVisible,
  onClose,
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, repeat: 0 }}
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center'
        onClick={onClose}
      >
        {[...Array(50)].map((_, i) => (
          <ConfettiPiece key={i} delay={i * 0.05} />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 15, repeat: 0 }}
          className='bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 text-center max-w-md mx-4'
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: 0 }}
            className='mb-6'
          >
            <Crown className='w-20 h-20 text-yellow-400 mx-auto' />
          </motion.div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, repeat: 0 }}
            className='text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text mb-4'
          >
            Challenge Accepted!
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, repeat: 0 }}
            className='text-gray-300 mb-6'
          >
            Welcome to the arena where legends are born!
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, repeat: 0 }}
            onClick={onClose}
            className='bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
          >
            Let's Compete!
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)
