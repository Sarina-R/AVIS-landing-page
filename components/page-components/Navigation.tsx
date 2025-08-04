'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NavigationProps } from '@/app/type'
import Link from 'next/link'

export default function Navigation({ logo, navItems }: NavigationProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isHoverActivated, setIsHoverActivated] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
    },
  }

  const mobileDropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
    },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false)
        setMobileDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileOpen])

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

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name))
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileDropdown(null)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-6 lg:space-x-8'>
          <Link href='/' onClick={closeMobileMenu}>
            <img src={logo} alt='Logo' className='h-6 sm:h-8 w-auto' />
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex space-x-4 lg:space-x-6'>
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
                  className='text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-1 cursor-pointer py-2'
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className='w-3 h-3 lg:w-4 lg:h-4' />
                  )}
                </motion.a>

                {item.children && dropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    transition={{ duration: 0.2 }}
                    className='absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 rounded-lg shadow-xl py-2 backdrop-blur-md'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.link}
                        className='block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-md mx-1'
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

        <button className='hidden md:block bg-white text-black px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-all duration-200 shadow-sm'>
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden p-1 rounded-md hover:bg-white/10 transition-colors'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden'
          >
            <div className='px-4 py-3 space-y-1 max-h-screen overflow-y-auto'>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className='border-b border-white/5 last:border-b-0 pb-2 last:pb-0'
                >
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => {
                      if (item.children) {
                        toggleMobileDropdown(item.name)
                      } else {
                        closeMobileMenu()
                      }
                    }}
                  >
                    <Link
                      href={item.link}
                      className='text-sm block py-3 flex-1 hover:text-neutral-200 transition-colors'
                      onClick={(e) => {
                        if (item.children) {
                          e.preventDefault()
                        } else {
                          closeMobileMenu()
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && mobileDropdown === item.name && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className='overflow-hidden'
                      >
                        <div className='ml-4 mt-1 mb-2 space-y-1 pl-3 border-l border-white/20'>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.link}
                              className='block text-white/80 text-sm py-2.5 hover:text-white hover:bg-white/5 px-3 rounded-md transition-all duration-200'
                              onClick={closeMobileMenu}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className='pt-4 pb-2'>
                <button
                  className='w-full bg-white text-black px-4 py-3 rounded-lg text-base font-medium hover:bg-neutral-200 transition-all duration-200 shadow-sm'
                  onClick={closeMobileMenu}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
