'use client'

import { ArrowRight } from 'lucide-react'
import { HolographicText } from '../HolographicText'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className='relative py-16 border-t border-border backdrop-blur-xl bg-background'>
      <div className='absolute inset-0 bg-primary-gradient opacity-5 pointer-events-none'></div>

      <div className='absolute inset-0 pointer-events-none'>
        {Array.from({ length: 4 }).map((_, i) => (
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
              y: [0, -30, -60],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              // boxShadow: '0 0 20px rgba(209, 73, 117, 0.5)',
            }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-thin mb-4 md:mb-0 cursor-pointer'
          >
            <HolographicText>AVIS GROUP</HolographicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-muted text-center'
          >
            <p>© 2025 AVIS Group. Transcending Reality.</p>
            <motion.a
              href='https://avisengine.com'
              className='text-foreground hover:text-accent transition-colors inline-flex items-center gap-2 mt-2 group'
              whileHover={{ scale: 1.05 }}
            >
              avisengine.com
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className='w-3 h-3 text-accent' />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
