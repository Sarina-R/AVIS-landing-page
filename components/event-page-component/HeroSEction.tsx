'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { TrustedBySection } from './TrustedBy'
import Link from 'next/link'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const circleSize = containerWidth / 6 || 100
  const gridSize = containerWidth / 12 || 50

  return (
    <div
      ref={containerRef}
      className='relative h-full lg:min-h-[90vh] mx-auto max-w-[1200px]'
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    >
      {/* Circles */}
      <div
        className='relative z-30 flex flex-col items-center justify-center px-6 overflow-hidden'
        style={{ height: `${circleSize}px` }}
      >
        {[-0.5, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5].map((multiplier, idx) => (
          <div
            key={idx}
            className={`absolute border border-white/15 rounded-full top-0 ${
              multiplier === 2.5 ? ' z-10' : ''
            }`}
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              left: `${circleSize * multiplier}px`,
            }}
          />
        ))}

        <div className='relative group'>
          <div className='relative w-[60px] sm:w-[80px] lg:w-[100px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full border-2 border-white/30 bg-black/60 backdrop-blur-xl flex items-center justify-center hover:border-white/50 transition-all duration-300 z-50'>
            <Image
              src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
              alt='AVIS Logo'
              width={40}
              height={40}
              className='w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 object-contain'
            />
          </div>
        </div>
      </div>

      {/* Black Box */}
      <div className='relative z-30 lg:px-6'>
        <div className='bg-black flex flex-col items-center justify-center h-[15rem] sm:h-[18rem] w-full lg:max-w-[36rem] mx-auto py-10 sm:py-14 border border-white/15'>
          <h1 className='text-2xl lg:text-4xl font-bold text-center leading-tight mb-4 sm:mb-6 tracking-tight max-w-[90%] sm:max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
            Accelerating Connections, Delivering Impact
          </h1>
          <div className='text-center max-w-[90%] sm:max-w-2xl mb-6 sm:mb-8'>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed'>
              <span className='text-white font-semibold'>
                Fully featured events platform
              </span>{' '}
              for participants and
            </p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed'>
              organizers all in one place.
            </p>
          </div>
          <div className='flex flex-row gap-4 sm:gap-6 text-xs sm:text-sm'>
            <Link href='https://events.avisengine.com/auth/register'>
              <button className='group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 cursor-pointer'>
                <div className='w-0 h-0 border-l-[4px] sm:border-l-[5px] border-r-[4px] sm:border-r-[5px] border-b-[6px] sm:border-b-[7px] border-l-transparent border-r-transparent border-b-current rotate-90 group-hover:rotate-[135deg] transition-transform duration-300' />
                Register Now
              </button>
            </Link>
            <Link href='https://events.avisengine.com/'>
              <button className='px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 text-white font-semibold border border-white/15 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer'>
                Go to AVIS Event
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-black  w-full '>
        <TrustedBySection />
      </div>

      {/* Crosses */}
      <div className='absolute top-[-12px] left-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/50 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/50 -translate-x-1/2' />
      </div>
      <div className='absolute top-[-12px] right-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/50 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/50 -translate-x-1/2' />
      </div>
      <div className=' absolute bottom-[180px] sm:bottom-[200px] lg:bottom-[266px] left-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/50 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/50 -translate-x-1/2' />
      </div>
      <div className=' absolute bottom-[180px] sm:bottom-[200px] lg:bottom-[266px] right-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/50 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/50 -translate-x-1/2' />
      </div>
    </div>
  )
}

export default HeroSection
