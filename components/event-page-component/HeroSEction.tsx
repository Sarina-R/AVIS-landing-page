import React from 'react'
import Image from 'next/image'
import { TrustedBySection } from './TrustedBy'

const HeroSection: React.FC = () => {
  return (
    <div
      className='relative h-full lg:min-h-[90vh] bg-[length:8vw_8vw] lg:bg-[length:6rem_6rem]'
      style={{
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
    `,
      }}
    >
      {/* Logo */}
      {/* desctop */}
      <div className='relative z-30 lg:flex hidden flex-col items-center justify-center px-6 h-[12rem] overflow-hidden'>
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 right-[-6rem]' />
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 right-[6rem]' />
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 right-[18rem]' />

        {/* middle */}
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 ' />

        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 left-[18rem]' />
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 left-[-6rem]' />
        <div className='absolute w-[12rem] h-[12rem] border border-white/15 rounded-full top-0 left-[6rem]' />
        <div className='relative group'>
          <div className='relative group'>
            <div className='relative w-[60px] sm:w-[80px] lg:w-[100px] h-[60px] sm:h-[80px] lg:h-[100px] rounded-full border-2 border-white/30 bg-black/60 backdrop-blur-xl flex items-center justify-center hover:border-white/50 transition-all duration-300'>
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
      </div>
      {/* mobile */}
      <div className='lg:hidden relative z-30 flex flex-col items-center justify-center px-6 h-[16vw] overflow-hidden'>
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 right-[-8vw]' />
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 right-[8vw]' />
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 right-[24vw]' />

        {/* middle */}
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 bg-black z-10' />

        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 left-[24vw]' />
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 left-[-8vw]' />
        <div className='absolute w-[16vw] h-[16vw] border border-white/15 rounded-full top-0 left-[8vw]' />
        <div className='relative group'>
          {/* <div className='absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse' /> */}
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
      </div>

      {/* black box */}
      <div className='relative z-30 lg:sm:px-6'>
        <div className='bg-black flex flex-col items-center justify-center h-[15rem] sm:h-[18rem] w-full lg:max-w-[36rem] mx-auto py-8 sm:py-12 border border-white/15'>
          <h1 className='text-2xl lg:text-4xl font-bold text-center leading-tight mb-6 sm:mb-8 tracking-tight max-w-[90%] sm:max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
            The native Next.js platform.
          </h1>

          <div className='text-center max-w-[90%] sm:max-w-2xl mb-8 sm:mb-16'>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed'>
              <span className='text-white font-semibold'>
                Made by the creators of Next.js
              </span>
              , AVIS is designed
            </p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed'>
              to build, scale, and secure your Next.js apps.
            </p>
          </div>

          <div className='flex flex-row gap-3 sm:gap-4 text-sm'>
            <button className='group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20'>
              <div className='w-0 h-0 border-l-[4px] sm:border-l-[5px] border-r-[4px] sm:border-r-[5px] border-b-[6px] sm:border-b-[7px] border-l-transparent border-r-transparent border-b-current rotate-90 group-hover:rotate-[135deg] transition-transform duration-300' />
              Start Deploying
            </button>
            <button className='px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 text-white font-semibold border border-white/15 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
              Get a Demo
            </button>
          </div>
        </div>
      </div>

      <div className='bg-black lg:absolute w-full -bottom-2'>
        <TrustedBySection />
      </div>

      {/* Crosses */}
      <div className='absolute top-[-13px] left-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='absolute top-[-13px] right-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='lg:block hidden absolute bottom-[200px] left-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
      <div className='lg:block hidden absolute bottom-[200px] right-[-12px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>
    </div>
  )
}

export default HeroSection
