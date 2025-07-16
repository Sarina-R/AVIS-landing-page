'use client'

import React from 'react'

const IconSvgComponent: React.FC = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-[110vh] p-8'>
      <h1 className='text-5xl font-bold mb-6 text-center max-w-4xl'>
        Optimized, automated rendering for the web's favorite frameworks.
      </h1>
      <p className='text-neutral-400 mb-24 text-center max-w-2xl text-xl'>
        Leverage the power of serverless architecture to deliver your content
        globally, without added infrastructure overhead.
      </p>

      <div className='relative'>
        <div className=' absolute -top-10 -right-5 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-orange-400'>△</span>
        </div>
        <div className=' absolute -top-10 right-40 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-pink-400'>△</span>
        </div>
        <div className=' absolute -top-10 right-[21rem] w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-red-400'>△</span>
        </div>
        <div className=' absolute -top-10 right-[32.3rem] w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-green-400'>△</span>
        </div>
        <div className=' absolute -top-10 right-[43.6rem] w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-blue-400'>△</span>
        </div>
        <div className=' absolute -top-10 right-[55rem] w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center'>
          <span className='text-2xl text-zinc-400'>△</span>
        </div>

        <div aria-hidden='true' className='lines_lines__CuUyE'>
          <svg
            className='geist-show-on-desktop'
            fill='none'
            height='180'
            preserveAspectRatio='none'
            viewBox='0 0 902 180'
            width='100%'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M541 -3.58434e-06L541 13.3512C541 44.418 525.655 73.4795 500 91V91C474.345 108.52 459 137.582 459 168.649L459 180'
              stroke='#FF3E00'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
            <path
              d='M361 -3.58434e-06L361 13.3512C361 44.418 376.345 73.4795 402 91V91C427.655 108.52 443 137.582 443 168.649L443 180'
              stroke='#00DC82'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
            <path
              d='M721 -1.0753e-05V-1.0753e-05C721 49.7056 680.706 90 631 90L565 90C515.294 90 475 130.294 475 180V180'
              stroke='#e53ba2'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
            <path
              d='M901 -1.79217e-05V-1.79217e-05C901 58.5422 853.542 106 795 106L565 106C524.131 106 491 139.131 491 180V180'
              stroke='#ffac04'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
            <path
              d='M181 -1.0753e-05V-1.0753e-05C181 49.7056 221.294 90 271 90L337 90C386.706 90 427 130.294 427 180V180'
              stroke='#149ECA'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
            <path
              d='M1 -1.79217e-05V-1.79217e-05C0.999997 58.5422 48.4578 106 107 106L337 106C377.869 106 411 139.131 411 180V180'
              stroke='#8F8F8F'
              stroke-width='2'
              vector-effect='non-scaling-stroke'
            ></path>
          </svg>
        </div>
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
