'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isHoverActivated, setIsHoverActivated] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
        setIsHoverActivated(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseLeave = () => {
    if (isHoverActivated) {
      timeoutRef.current = setTimeout(() => {
        setDropdownOpen(false)
        setIsHoverActivated(false)
      }, 500)
    }
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setDropdownOpen(true)
    setIsHoverActivated(true)
  }

  return (
    <nav className='fixed top-0 w-full z-50 bg-black/90 text-white border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='text-2xl font-bold'
        >
          AVIS
        </motion.div>

        <div className='hidden md:flex space-x-8 items-center'>
          {navItems.map((item, i) => (
            <div
              key={item.name}
              className='relative'
              ref={item.children ? dropdownRef : null}
            >
              <motion.a
                href={item.link}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                onClick={() => {
                  if (item.children) {
                    setDropdownOpen(!dropdownOpen)
                    setIsHoverActivated(false)
                  }
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) => {
                  if (e.key === 'Enter' && item.children) {
                    setDropdownOpen(!dropdownOpen)
                    setIsHoverActivated(false)
                  }
                }}
                onMouseEnter={() => item.children && handleMouseEnter()}
                onMouseLeave={() => item.children && handleMouseLeave()}
                className='text-sm font-medium hover:text-white/70 transition-colors flex items-center gap-1 cursor-pointer'
                aria-expanded={item.children ? dropdownOpen : undefined}
                aria-haspopup={item.children ? 'true' : 'false'}
              >
                {item.name}
                {item.children && <ChevronDown className='w-4 h-4' />}
                <span className='absolute -bottom-1 left-0 h-0.5 bg-white/70 w-0 group-hover:w-full transition-all duration-200' />
              </motion.a>
              {item.children && dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  transition={{ duration: 0.2 }}
                  className='absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 rounded-md shadow-lg py-2'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.link}
                      className='block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-sm mx-1'
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
          className='md:hidden p-3 rounded-md hover:bg-white/10 transition-colors'
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden bg-black/95 border-t border-white/10'
        >
          <div className='px-6 py-6 space-y-4'>
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.link}
                  className='block text-base font-medium hover:bg-white/10 rounded-md px-3 py-2 transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item.children && (
                  <div className='ml-4 mt-2 space-y-2'>
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.link}
                        className='block text-sm text-white/80 hover:bg-white/10 rounded-md px-3 py-2 transition-colors'
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
