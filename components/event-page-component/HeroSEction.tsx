import React from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-black text-white overflow-hidden'>
      {/* Enhanced Grid Background */}
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

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
      <div className='absolute bottom-[100px] right-[100px] w-6 h-6 z-20'>
        <div className='absolute top-1/2 left-0 w-full h-[1px] bg-white/25 -translate-y-1/2' />
        <div className='absolute top-0 left-1/2 w-[1px] h-full bg-white/25 -translate-x-1/2' />
      </div>

      {/* Enhanced Radial Circles - More Visible */}
      {/* Top Left Corner */}
      <div className='absolute w-[300px] h-[300px] border border-white/20 rounded-full top-[2%] left-[2%] animate-pulse' />
      <div
        className='absolute w-[240px] h-[240px] border border-white/15 rounded-full top-[5%] left-[5%] animate-pulse'
        style={{ animationDelay: '1s' }}
      />
      <div
        className='absolute w-[180px] h-[180px] border border-white/12 rounded-full top-[8%] left-[8%] animate-pulse'
        style={{ animationDelay: '2s' }}
      />
      <div
        className='absolute w-[120px] h-[120px] border border-white/10 rounded-full top-[11%] left-[11%] animate-pulse'
        style={{ animationDelay: '3s' }}
      />

      {/* Top Right Corner */}
      <div
        className='absolute w-[280px] h-[280px] border border-white/20 rounded-full top-[3%] right-[3%] animate-pulse'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='absolute w-[220px] h-[220px] border border-white/15 rounded-full top-[6%] right-[6%] animate-pulse'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute w-[160px] h-[160px] border border-white/12 rounded-full top-[9%] right-[9%] animate-pulse'
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className='absolute w-[100px] h-[100px] border border-white/10 rounded-full top-[12%] right-[12%] animate-pulse'
        style={{ animationDelay: '3.5s' }}
      />

      {/* Bottom Left Corner */}
      <div
        className='absolute w-[250px] h-[250px] border border-white/20 rounded-full bottom-[4%] left-[4%] animate-pulse'
        style={{ animationDelay: '1s' }}
      />
      <div
        className='absolute w-[200px] h-[200px] border border-white/15 rounded-full bottom-[7%] left-[7%] animate-pulse'
        style={{ animationDelay: '2s' }}
      />
      <div
        className='absolute w-[150px] h-[150px] border border-white/12 rounded-full bottom-[10%] left-[10%] animate-pulse'
        style={{ animationDelay: '3s' }}
      />
      <div
        className='absolute w-[100px] h-[100px] border border-white/10 rounded-full bottom-[13%] left-[13%] animate-pulse'
        style={{ animationDelay: '4s' }}
      />

      {/* Bottom Right Corner */}
      <div
        className='absolute w-[320px] h-[320px] border border-white/20 rounded-full bottom-[1%] right-[1%] animate-pulse'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='absolute w-[260px] h-[260px] border border-white/15 rounded-full bottom-[4%] right-[4%] animate-pulse'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute w-[200px] h-[200px] border border-white/12 rounded-full bottom-[7%] right-[7%] animate-pulse'
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className='absolute w-[140px] h-[140px] border border-white/10 rounded-full bottom-[10%] right-[10%] animate-pulse'
        style={{ animationDelay: '3.5s' }}
      />

      {/* Center Circles */}
      <div
        className='absolute w-[800px] h-[800px] border border-white/8 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'
        style={{ animationDelay: '2s' }}
      />
      <div
        className='absolute w-[600px] h-[600px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'
        style={{ animationDelay: '1s' }}
      />
      <div className='absolute w-[400px] h-[400px] border border-white/12 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse' />
      <div
        className='absolute w-[200px] h-[200px] border border-white/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'
        style={{ animationDelay: '3s' }}
      />

      {/* Modern Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 z-10' />

      {/* Content Container */}
      <div className='relative z-30 flex flex-col items-center justify-center min-h-screen px-6'>
        {/* Modern Logo Circle with Glow */}
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

        {/* Main Heading - Smaller & More Modern */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-8 tracking-tight max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
          The native Next.js platform.
        </h1>

        {/* Subtitle - Modern Typography */}
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

        {/* Modern Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mb-24'>
          <button className='group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20'>
            <div className='w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-current rotate-90 group-hover:rotate-[135deg] transition-transform duration-300' />
            Start Deploying
          </button>
          <button className='px-8 py-4 bg-white/5 text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
            Get a Demo
          </button>
        </div>

        {/* Trust Badge */}
        <div className='text-center'>
          <p className='text-lg md:text-xl text-white/60'>
            Trusted by the{' '}
            <span className='text-white font-semibold'>
              largest Next.js companies
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
