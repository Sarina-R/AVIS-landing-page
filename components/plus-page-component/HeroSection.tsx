import { ArrowRight } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
}

const cardItem: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
}

const ModernHeroGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      containerRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const GridPattern = () => (
    <div className='absolute inset-0 opacity-15'>
      <div
        className='h-full w-full'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )

  return (
    <div
      id='hero-container'
      className='relative min-h-[90vh] overflow-hidden border-b border-white/10'
    >
      <div className='absolute right-0 top-0 h-[400px] w-[400px] lg:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-rose-700 from-rose-400 opacity-20 blur-[120px]' />
      <div className='absolute left-0 top-20 h-[400px] w-[400px] md:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-indigo-700 from-indigo-400 opacity-20 blur-[120px]' />

      <GridPattern />

      <div
        ref={containerRef}
        className='relative z-10 min-h-screen perspective-1000 transition-transform duration-300 ease-out'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className='grid grid-cols-12 grid-rows-6 h-screen'>
          <div
            className='col-span-12 lg:col-span-7 row-span-4 flex flex-col justify-center'
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              variants={textContainer}
              initial='hidden'
              animate='show'
              className='space-y-8 px-4'
            >
              <motion.h1
                className='text-6xl lg:text-8xl font-light leading-none'
                variants={textItem}
                style={{ transform: 'translateZ(30px)' }}
              >
                <motion.span className='block opacity-40' variants={textItem}>
                  Connect
                </motion.span>
                <motion.span className='block font-medium' variants={textItem}>
                  Your
                </motion.span>
                <motion.span className='block opacity-60' variants={textItem}>
                  Identity
                </motion.span>
              </motion.h1>

              <motion.p
                className='text-lg text-white/50 max-w-md font-light'
                variants={textItem}
                style={{ transform: 'translateZ(20px)' }}
              >
                Seamlessly unite your AVIS experiences with a single identity.
              </motion.p>

              <motion.button
                variants={textItem}
                className='group inline-flex items-center text-lg font-light hover:font-normal transition-all duration-500'
                style={{ transform: 'translateZ(40px)' }}
              >
                Join AVIS Plus
                <ArrowRight className='w-5 h-5 transition-transform duration-500 group-hover:translate-x-2' />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className='col-span-12 lg:col-span-5 row-span-6 grid grid-cols-2'
            style={{
              transform: 'translateZ(20px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {[
              'Immersive',
              'Interactive',
              'Revolutionary',
              'Future',
              'Infinite',
            ].map((label, idx) => (
              <motion.div
                key={idx}
                variants={cardItem}
                className={`backdrop-blur-sm bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105 ${
                  label === 'Revolutionary' ? 'col-span-2' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className={`h-${
                    label === 'Revolutionary' ? '20' : '24'
                  } flex items-end`}
                >
                  <span className='text-sm text-white/40 font-light'>
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className='fixed w-1 h-1 rounded-full bg-white/60 pointer-events-none z-50 transition-all duration-75 ease-out'
        style={{ boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
      />
    </div>
  )
}

export default ModernHeroGrid
