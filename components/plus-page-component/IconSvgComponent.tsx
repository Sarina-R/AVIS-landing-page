'use client'

import React from 'react'

const IconSvgComponent: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8'>
      <h1 className='text-5xl font-bold mb-6 text-center max-w-4xl'>
        Optimized, automated rendering for the web's favorite frameworks.
      </h1>
      <p className='text-gray-400 mb-24 text-center max-w-2xl text-xl'>
        Leverage the power of serverless architecture to deliver your content
        globally, without added infrastructure overhead.
      </p>

      <div className='relative w-full max-w-6xl'>
        {/* SVG for curved paths */}
        <svg className='absolute top-0 left-0 w-full h-[400px] z-0'>
          <path
            d='M200 50 Q 200 200, 600 350'
            stroke='#666666'
            fill='none'
            strokeWidth='2'
          />
          <path
            d='M320 50 Q 320 180, 600 350'
            stroke='#3B82F6'
            fill='none'
            strokeWidth='2'
          />
          <path
            d='M440 50 Q 440 160, 600 350'
            stroke='#22C55E'
            fill='none'
            strokeWidth='2'
          />
          <path
            d='M560 50 Q 560 140, 600 350'
            stroke='#F97316'
            fill='none'
            strokeWidth='2'
          />
          <path
            d='M680 50 Q 680 180, 600 350'
            stroke='#EC4899'
            fill='none'
            strokeWidth='2'
          />
          <path
            d='M800 50 Q 800 200, 600 350'
            stroke='#EAB308'
            fill='none'
            strokeWidth='2'
          />
        </svg>

        {/* Icons container */}
        <div className='flex justify-between mb-48 relative z-10'>
          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <span className='text-2xl'>N</span>
          </div>

          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-blue-400'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
            </svg>
          </div>

          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <span className='text-2xl text-green-400'>△</span>
          </div>

          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <span className='text-2xl text-orange-400'>S</span>
          </div>

          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-pink-400'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
            </svg>
          </div>

          <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-yellow-400'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
            </svg>
          </div>
        </div>

        {/* Deployed button */}
        <div className='flex justify-center relative z-10'>
          <div className='bg-white text-black rounded-full px-8 py-3 flex items-center gap-2'>
            <span className='text-lg font-semibold'>▲ Deployed.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconSvgComponent
