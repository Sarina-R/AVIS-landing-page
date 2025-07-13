import { useState } from 'react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navItems = [
    {
      name: 'Products',
      link: '#products',
      children: [
        { name: 'AVIS Events', link: '/avis-events' },
        { name: 'AVIS Challenge', link: '/avis-challenge' },
        { name: 'AVIS Community', link: '/avis-community' },
        { name: 'AVIS Plus +', link: '/avis-plus' },
      ],
    },
    { name: 'Get Started', link: '#get-started' },
    { name: 'Research', link: '#research' },
    { name: 'Download', link: '#download' },
  ]

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-background to-secondary-darker border-b border-border shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='text-3xl font-extrabold cursor-pointer bg-clip-text text-transparent bg-primary-gradient'
        >
          <HolographicText>AVIS</HolographicText>
        </motion.div>

        <div className='hidden md:flex space-x-10 items-center'>
          {navItems.map((item, i) => (
            <div key={item.name} className='relative group'>
              <motion.a
                href={item.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                onMouseEnter={() => {
                  setHoveredItem(item.name)
                  if (item.children) setDropdownOpen(true)
                }}
                onMouseLeave={() => {
                  setHoveredItem(null)
                  if (item.children) setDropdownOpen(false)
                }}
                className='relative text-foreground/80 text-sm font-medium hover:text-foreground transition-colors duration-300 flex items-center gap-1'
              >
                {item.name}
                {item.children && (
                  <ChevronDown className='w-4 h-4 text-muted group-hover:text-foreground transition-colors' />
                )}
                <motion.span
                  className='absolute -bottom-1 left-0 h-0.5 bg-primary-gradient'
                  initial={{ width: 0 }}
                  animate={{ width: hoveredItem === item.name ? '100%' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.a>
              {item.children && dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute top-full -left-2 mt-3 w-48 bg-black/90 backdrop-blur-2xl border border-border rounded-lg shadow-xl py-2'
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.link}
                      className='block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent-gradient/20 transition-all duration-200 rounded-md mx-1'
                    >
                      {child.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.button
          className='md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='md:hidden bg-secondary-darker/95 backdrop-blur-2xl border-t border-border'
        >
          <div className='px-6 py-6 space-y-4'>
            {navItems.map((item) => (
              <div key={item.name}>
                <motion.a
                  href={item.link}
                  className='block text-foreground text-base font-medium hover:text-foreground hover:bg-secondary/50 rounded-md px-3 py-2 transition-all duration-200'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
                {item.children && (
                  <div className='ml-4 mt-2 space-y-2'>
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.link}
                        className='block text-foreground/60 text-sm hover:text-foreground hover:bg-secondary/50 rounded-md px-3 py-2 transition-all duration-200'
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
