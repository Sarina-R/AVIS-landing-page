'use client'

import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

const triangles = [
  { color: 'text-orange-400' },
  { color: 'text-pink-400' },
  { color: 'text-red-400' },
  { color: 'text-green-400' },
  { color: 'text-blue-400' },
  { color: 'text-zinc-400' },
]

const IconSvgComponent: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= 768
  }, [])

  return (
    <div
      ref={ref}
      className='relative flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 lg:p-24'
    >
      <h1 className='text-3xl sm:text-5xl font-bold mb-6 text-center max-w-4xl'>
        Optimized, automated rendering for the web's favorite frameworks.
      </h1>
      <p className='text-neutral-400 mb-24 text-center max-w-2xl text-lg sm:text-xl'>
        Leverage the power of serverless architecture to deliver your content
        globally, without added infrastructure overhead.
      </p>

      <div className='relative w-full max-w-[900px] mx-auto'>
        {triangles.map((triangle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`absolute top-0 w-9 h-9 sm:w-12 sm:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center`}
            style={{
              right: isDesktop
                ? `${index * 20 - 2.7}%`
                : `${index * 20 - 3.7}%`,
              top: '-2.5rem',
            }}
          >
            <span className={`text-xl sm:text-2xl ${triangle.color}`}>△</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          aria-hidden='true'
          className='w-full'
        >
          <svg
            className='w-full h-40 sm:h-48'
            fill='none'
            viewBox='0 0 902 180'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
          >
            <path
              d='M541 0L541 13.3512C541 44.418 525.655 73.4795 500 91C474.345 108.52 459 137.582 459 168.649L459 180'
              stroke='#FF3E00'
              strokeWidth='2'
            />
            <path
              d='M361 0L361 13.3512C361 44.418 376.345 73.4795 402 91C427.655 108.52 443 137.582 443 168.649L443 180'
              stroke='#00DC82'
              strokeWidth='2'
            />
            <path
              d='M721 0C721 49.7056 680.706 90 631 90L565 90C515.294 90 475 130.294 475 180'
              stroke='#e53ba2'
              strokeWidth='2'
            />
            <path
              d='M901 0C901 58.5422 853.542 106 795 106L565 106C524.131 106 491 139.131 491 180'
              stroke='#ffac04'
              strokeWidth='2'
            />
            <path
              d='M181 0C181 49.7056 221.294 90 271 90L337 90C386.706 90 427 130.294 427 180'
              stroke='#149ECA'
              strokeWidth='2'
            />
            <path
              d='M1 0C0.999997 58.5422 48.4578 106 107 106L337 106C377.869 106 411 139.131 411 180'
              stroke='#8F8F8F'
              strokeWidth='2'
            />
          </svg>
        </motion.div>

        <div className='relative min-h-[35vh]'>
          <button
            className='absolute top-6 text-xl bg-white text-black font-bold px-8 py-3 rounded-3xl z-10'
            style={{
              transform: 'translate(-50%, -50%)',
              left: '50%',
            }}
          >
            Deployed.
          </button>
          <div className='absolute left-1/2 -bottom-[70vh] h-screen w-[0.1rem] bg-gradient-to-b from-white to-transparent '></div>
        </div>
      </div>
    </div>
  )
}

export default IconSvgComponent
