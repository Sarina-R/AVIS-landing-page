import { useState } from 'react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className='text-2xl font-bold cursor-pointer'
        >
          <HolographicText>AVIS</HolographicText>
        </motion.div>

        <div className='hidden md:flex space-x-8'>
          {['About', 'Services', 'Vision', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className='relative text-white/80 hover:text-white transition-colors group'
            >
              {item}
              <motion.span
                className='absolute -bottom-1 left-0 h-0.5 '
                initial={{ width: 0 }}
                animate={{ width: hoveredItem === item ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className='md:hidden text-white p-2'
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10'
        >
          <div className='px-6 py-4 space-y-4'>
            {['About', 'Services', 'Vision', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='block text-white/80 hover:text-white transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
