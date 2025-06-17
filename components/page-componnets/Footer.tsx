import { ArrowRight } from 'lucide-react'
import { HolographicText } from '../HolographicText'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className='py-16 border-t border-white/10 backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-thin mb-4 md:mb-0 cursor-pointer'
          >
            <HolographicText>AVIS GROUP</HolographicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-white/60 text-center'
          >
            <p>© 2025 AVIS Group. Transcending Reality.</p>
            <motion.a
              href='https://avisengine.com'
              className='hover:text-white transition-colors inline-flex items-center gap-2 mt-2 group'
              whileHover={{ scale: 1.05 }}
            >
              avisengine.com
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className='w-3 h-3' />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
