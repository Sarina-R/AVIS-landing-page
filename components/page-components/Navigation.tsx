'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { NavigationProps } from '@/app/type'
import Link from 'next/link'

export default function Navigation({ logo, navItems }: NavigationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isHoverActivated, setIsHoverActivated] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
      }, 400)
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
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-8'>
          <Link href='/'>
            <img src={logo} alt='Logo' className='h-8' />
          </Link>

          <div className='hidden md:flex space-x-6'>
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
                  onMouseEnter={() => item.children && handleMouseEnter()}
                  onMouseLeave={() => item.children && handleMouseLeave()}
                  className='text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-1 cursor-pointer'
                >
                  {item.name}
                  {item.children && <ChevronDown className='w-4 h-4' />}
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
                      <Link
                        key={child.name}
                        href={child.link}
                        className='block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-sm mx-1'
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors'>
          Get Started
        </button>
      </div>
    </nav>
  )
}
