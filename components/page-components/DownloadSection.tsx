import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const DownloadSection = () => {
  const [glitchOffset, setGlitchOffset] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(Math.random() * 3 - 1.5)
    }, 4000 + Math.random() * 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animationFrame = () => {
      setTime(Date.now() * 0.001)
      requestAnimationFrame(animationFrame)
    }
    requestAnimationFrame(animationFrame)
  }, [])

  return (
    <div
      id='download'
      className='relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden'
    >
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-black to-[#2B0508] opacity-90' />

        <div
          className='absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-3xl opacity-40'
          style={{
            background: `radial-gradient(circle at 30% 40%, #650d14 0%, #45080E 35%, #2B0508 70%, transparent 100%)`,
            transform: `translate(${
              Math.sin(time * 0.3) * 50 + glitchOffset * 2
            }px, ${Math.cos(time * 0.2) * 30 + glitchOffset}px) scale(${
              1 + Math.sin(time * 0.4) * 0.1
            })`,
          }}
        />

        <div
          className='absolute top-[35%] right-[15%] w-[400px] h-[400px] rounded-full blur-3xl opacity-35'
          style={{
            background: `radial-gradient(circle at 60% 30%, #D14975 0%, #8B1A25 40%, #43080d 75%, transparent 100%)`,
            transform: `translate(${
              Math.cos(time * 0.25) * 40 - glitchOffset * 1.5
            }px, ${Math.sin(time * 0.35) * 25 - glitchOffset}px) scale(${
              1 + Math.cos(time * 0.3) * 0.08
            })`,
          }}
        />

        <div
          className='absolute bottom-[20%] left-[30%] w-[350px] h-[350px] rounded-full blur-3xl opacity-30'
          style={{
            background: `radial-gradient(circle at 50% 60%, #67121A 0%, #43080d 45%, #2B0508 80%, transparent 100%)`,
            transform: `translate(${
              Math.sin(time * 0.4) * 35 + glitchOffset
            }px, ${Math.cos(time * 0.3) * 20 - glitchOffset * 0.5}px) scale(${
              1 + Math.sin(time * 0.25) * 0.12
            })`,
          }}
        />

        <div
          className='absolute top-[60%] right-[25%] w-[200px] h-[200px] rounded-full blur-2xl opacity-25'
          style={{
            background: `radial-gradient(circle, #D14975 0%, #650d14 60%, transparent 100%)`,
            transform: `translate(${Math.sin(time * 0.6) * 20}px, ${
              Math.cos(time * 0.5) * 15
            }px)`,
          }}
        />

        <div
          className='absolute bottom-[40%] right-[40%] w-[150px] h-[150px] rounded-full blur-2xl opacity-20'
          style={{
            background: `radial-gradient(circle, #8B1A25 0%, #45080E 70%, transparent 100%)`,
            transform: `translate(${Math.cos(time * 0.45) * 25}px, ${
              Math.sin(time * 0.55) * 18
            }px)`,
          }}
        />
      </div>

      <div
        className='absolute inset-0 opacity-15 mix-blend-screen'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40' />

      <div className='z-10 text-center space-y-8 relative'>
        <div className='relative'>
          <h1 className='text-6xl md:text-7xl font-bold text-white tracking-tight'>
            DOWNLOAD AVIS ENGINE
          </h1>
          <h1
            className='absolute top-0 left-0 text-6xl md:text-7xl font-bold tracking-tight opacity-40'
            style={{
              color: '#D14975',
              transform: `translate(${glitchOffset * 2}px, ${
                glitchOffset * 0.5
              }px)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            }}
          >
            DOWNLOAD AVIS ENGINE
          </h1>
          <h1
            className='absolute top-0 left-0 text-6xl md:text-7xl font-bold tracking-tight opacity-35'
            style={{
              color: '#8B1A25',
              transform: `translate(${-glitchOffset * 1.5}px, ${
                -glitchOffset * 0.8
              }px)`,
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            }}
          >
            DOWNLOAD AVIS ENGINE
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className='text-lg font-light tracking-wide'
          style={{ color: '#F5F5F5' }}
        >
          Premium engine software
        </p>

        <div className='pt-4'>
          <Button
            variant='ghost'
            className='relative backdrop-blur-sm border hover:border-opacity-60 text-base px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 group'
            style={{
              background: `linear-gradient(135deg, rgba(101, 13, 20, 0.25) 0%, rgba(67, 8, 13, 0.25) 50%, rgba(209, 73, 117, 0.15) 100%)`,
              borderColor: 'rgba(209, 73, 117, 0.4)',
            }}
          >
            <Link
              target='_blank'
              href='https://avisengine.com/downloads/avis-engine-free-version/'
              className='flex items-center space-x-2'
            >
              <span>Download Free</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className='absolute inset-0 pointer-events-none'>
        <div
          className='absolute inset-0 opacity-3'
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245, 245, 245, 0.05) 2px, rgba(245, 245, 245, 0.05) 4px)',
          }}
        ></div>
      </div>
    </div>
  )
}

export default DownloadSection
