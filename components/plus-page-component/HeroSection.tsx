import React from 'react'
import { ArrowRight } from 'lucide-react'

const ModernHeroGrid = () => {
  const GridPattern = () => (
    <div className='absolute inset-0 opacity-10'>
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

  const AbstractShape = ({
    className,
    delay = 0,
  }: {
    className: string
    delay: number
  }) => (
    <div
      className={`${className} absolute animate-pulse`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '4s',
      }}
    >
      <svg viewBox='0 0 100 100' className='w-full h-full'>
        <path
          d='M20,50 Q50,20 80,50 Q50,80 20,50'
          fill='rgba(255,255,255,0.05)'
          stroke='rgba(255,255,255,0.1)'
          strokeWidth='1'
        />
      </svg>
    </div>
  )

  return (
    <div
      id='hero-container'
      className='relative min-h-[90vh] bg-black text-white overflow-hidden border-b border-white/10'
    >
      {/* Minimal Background Gradients */}
      <div className='absolute right-0 top-0 h-[400px] w-[400px] lg:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-rose-700 from-rose-400 opacity-20 blur-[120px]' />
      <div className='absolute left-0 top-20 h-[400px] w-[400px] md:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-indigo-700 from-indigo-400 opacity-20 blur-[120px]' />

      {/* Grid Pattern */}
      <GridPattern />

      {/* Abstract Shapes */}
      <AbstractShape className='top-20 right-20 w-16 h-16' delay={0} />
      <AbstractShape className='bottom-32 left-16 w-12 h-12' delay={2} />

      {/* 3D Grid Container */}
      <div
        className='relative z-10 min-h-screen perspective-1000'
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className='grid grid-cols-12 grid-rows-6  h-screen'>
          {/* Main Hero Content */}
          <div
            className='col-span-12 lg:col-span-7 row-span-4 flex flex-col justify-center'
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className='space-y-8'>
              <h1
                className='text-6xl lg:text-8xl font-light leading-none'
                style={{
                  transform: 'translateZ(30px)',
                }}
              >
                <span className='block opacity-40'>Create</span>
                <span className='block font-medium'>Beyond</span>
                <span className='block opacity-60'>Reality</span>
              </h1>

              <p
                className='text-lg text-white/50 max-w-md font-light'
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                Where imagination meets innovation in three-dimensional space.
              </p>

              <button
                className='group inline-flex items-center text-lg font-light hover:font-normal transition-all duration-500'
                style={{
                  transform: 'translateZ(40px)',
                }}
              >
                Enter Experience
                <ArrowRight className='w-5 h-5 transition-transform duration-500 group-hover:translate-x-2' />
              </button>
            </div>
          </div>

          {/* 3D Cards */}
          <div
            className='col-span-12 lg:col-span-5 row-span-6 grid grid-cols-2'
            style={{
              transform: 'translateZ(20px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className='backdrop-blur-sm bg-white/[0.02] border border-white/10  p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='h-24 flex items-end'>
                <span className='text-sm text-white/40 font-light'>
                  Immersive
                </span>
              </div>
            </div>

            <div
              className='backdrop-blur-sm bg-white/[0.02] border border-white/10  p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='h-24 flex items-end'>
                <span className='text-sm text-white/40 font-light'>
                  Interactive
                </span>
              </div>
            </div>

            <div
              className='backdrop-blur-sm bg-white/[0.02] border border-white/10  p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105 col-span-2'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='h-20 flex items-end'>
                <span className='text-sm text-white/40 font-light'>
                  Revolutionary
                </span>
              </div>
            </div>

            <div
              className='backdrop-blur-sm bg-white/[0.02] border border-white/10  p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='h-16 flex items-end'>
                <span className='text-sm text-white/40 font-light'>Future</span>
              </div>
            </div>

            <div
              className='backdrop-blur-sm bg-white/[0.02] border border-white/10  p-6 hover:bg-white/[0.05] transition-all duration-700 hover:scale-105'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className='h-16 flex items-end'>
                <span className='text-sm text-white/40 font-light'>
                  Infinite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className='fixed w-1 h-1 rounded-full bg-white/60 pointer-events-none z-50 transition-all duration-75 ease-out'
        style={{
          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
        }}
      />
    </div>
  )
}

export default ModernHeroGrid
