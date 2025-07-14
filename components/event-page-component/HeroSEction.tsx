import React from 'react'
import Image from 'next/image'
import { TrustedBySection } from './TrustedBy'

const HeroSection: React.FC = () => {
  return (
    <div
      className='relative min-h-[90vh] bg-black text-white overflow-hidden'
      style={{
        backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.10) 1px, transparent 1px)
          `,
        backgroundSize: '6rem 6rem',
      }}
    >
      {/* Corner Crosses - Same as before */}
      <div className='absolute top-[100px] left-[100px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='absolute top-[100px] right-[100px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='absolute bottom-[100px] left-[100px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='absolute bottom-[0] right-[100px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>

      {/* Logo */}
      <div className='relative z-30 flex flex-col items-center justify-center px-6 h-[12rem]'>
        <div className='mb-16'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse' />
            <div className='relative w-[100px] h-[100px] rounded-full border-2 border-white/30 bg-black/60 backdrop-blur-xl flex items-center justify-center hover:border-white/50 transition-all duration-300'>
              <Image
                src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
                alt='AVIS Logo'
                width={56}
                height={56}
                className='w-14 h-14 object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      {/* black box */}
      <div className='relative z-30 px-6'>
        <div className='bg-black flex flex-col items-center justify-center h-[18rem] w-[36rem] mx-auto py-12 border border-white/10'>
          <h1 className='text-lg md:text-2xl lg:text-4xl font-bold text-center leading-tight mb-8 tracking-tight max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
            The native Next.js platform.
          </h1>

          <div className='text-center max-w-2xl mb-16'>
            <p className='text-lg md:text-xl text-white/70 leading-relaxed'>
              <span className='text-white font-semibold'>
                Made by the creators of Next.js
              </span>
              , AVIS is designed
            </p>
            <p className='text-lg md:text-xl text-white/70 leading-relaxed'>
              to build, scale, and secure your Next.js apps.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='group flex items-center gap-3 px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20'>
              <div className='w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-current rotate-90 group-hover:rotate-[135deg] transition-transform duration-300' />
              Start Deploying
            </button>
            <button className='px-4 py-2 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
              Get a Demo
            </button>
          </div>
        </div>
      </div>

      <div className='bg-black absolute w-full bottom-0'>
        <TrustedBySection />
      </div>
    </div>
  )
}

export default HeroSection
