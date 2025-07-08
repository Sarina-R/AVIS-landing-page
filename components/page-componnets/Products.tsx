'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const ProductsComponent: React.FC = () => {
  const dot1Ref = useRef<SVGCircleElement>(null)
  const dot2Ref = useRef<SVGCircleElement>(null)
  const dot3Ref = useRef<SVGCircleElement>(null)
  const dot4Ref = useRef<SVGCircleElement>(null)
  const dot5Ref = useRef<SVGCircleElement>(null)
  const dot6Ref = useRef<SVGCircleElement>(null)

  const mobileDot1Ref = useRef<SVGCircleElement>(null)
  const mobileDot2Ref = useRef<SVGCircleElement>(null)
  const mobileDot3Ref = useRef<SVGCircleElement>(null)
  const mobileDot4Ref = useRef<SVGCircleElement>(null)
  const mobileDot5Ref = useRef<SVGCircleElement>(null)
  const mobileDot6Ref = useRef<SVGCircleElement>(null)

  const topPathLeftRef = useRef<SVGPathElement>(null)
  const topPathRightRef = useRef<SVGPathElement>(null)
  const middlePathLeftRef = useRef<SVGCircleElement>(null)
  const middlePathRightRef = useRef<SVGPathElement>(null)
  const bottomPathLeftRef = useRef<SVGPathElement>(null)
  const bottomPathRightRef = useRef<SVGPathElement>(null)

  const mobileLeftPath1Ref = useRef<SVGPathElement>(null)
  const mobileLeftPath2Ref = useRef<SVGPathElement>(null)
  const mobileMiddlePath1Ref = useRef<SVGPathElement>(null)
  const mobileMiddlePath2Ref = useRef<SVGPathElement>(null)
  const mobileRightPath1Ref = useRef<SVGPathElement>(null)
  const mobileRightPath2Ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    const animateDot = (
      dot: SVGCircleElement | null,
      path: SVGPathElement | null,
      duration: number,
      fromEnd: boolean
    ) => {
      if (!dot || !path) return

      const totalLength = path.getTotalLength()

      let start: number | null = null
      const animate = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = ((timestamp - start) / (duration / 2)) % 2
        const t = progress < 1 ? progress : 2 - progress // Creates a ping-pong effect: 0 to 1 to 0
        const currentLength = fromEnd ? totalLength * (1 - t) : totalLength * t
        const point = path.getPointAtLength(currentLength)
        dot.setAttribute('cx', `${point.x}`)
        dot.setAttribute('cy', `${point.y}`)

        requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }

    // Desktop animations
    animateDot(dot1Ref.current, topPathLeftRef.current, 3000, true) // Starts at end (x=100)
    animateDot(dot2Ref.current, topPathRightRef.current, 4000, true) // Starts at end (x=700)
    animateDot(dot3Ref.current, middlePathLeftRef.current, 5000, false) // Starts at start (x=100)
    animateDot(dot4Ref.current, middlePathRightRef.current, 2500, true) // Starts at end (x=700)
    animateDot(dot5Ref.current, bottomPathLeftRef.current, 3500, true) // Starts at end (x=100)
    animateDot(dot6Ref.current, bottomPathRightRef.current, 4500, true) // Starts at end (x=700)

    // Mobile animations
    animateDot(mobileDot1Ref.current, mobileLeftPath1Ref.current, 3000, false) // Starts at start (y=200)
    animateDot(mobileDot2Ref.current, mobileLeftPath2Ref.current, 4000, false) // Starts at start (y=500)
    animateDot(mobileDot3Ref.current, mobileMiddlePath1Ref.current, 5000, false) // Starts at start (y=200)
    animateDot(mobileDot4Ref.current, mobileMiddlePath2Ref.current, 2500, false) // Starts at start (y=500)
    animateDot(mobileDot5Ref.current, mobileRightPath1Ref.current, 3500, false) // Starts at start (y=200)
    animateDot(mobileDot6Ref.current, mobileRightPath2Ref.current, 4500, false) // Starts at start (y=500)
  }, [])

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center p-4'>
      {/* Mobile Vertical Layout */}
      <div className='flex flex-col items-center w-full max-w-sm md:hidden'>
        {/* Central Logo */}
        <div className='relative w-32 h-32 z-10 mb-8'>
          <Image
            src='https://avisengine.com/wp-content/uploads/2023/05/76964453-1.png'
            alt='AVIS Engine Logo'
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Left Vertical Lines (S-shaped curves) */}
        <svg className='absolute left-8 top-0 w-16 h-full' viewBox='0 0 80 800'>
          <path
            d='M40 200 C20 250 60 300 40 350 C20 400 60 450 40 500'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileLeftPath1Ref}
          />
          <path
            d='M40 500 C20 550 60 600 40 650 C20 700 60 750 40 800'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileLeftPath2Ref}
          />
          <circle ref={mobileDot1Ref} cx='40' cy='200' r='4' fill='#ef4444' />
          <circle ref={mobileDot2Ref} cx='40' cy='500' r='4' fill='#06b6d4' />
        </svg>

        {/* Middle Vertical Line */}
        <svg
          className='absolute left-1/2 top-0 w-16 h-full transform -translate-x-1/2'
          viewBox='0 0 80 800'
        >
          <path
            d='M40 200 L40 400'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileMiddlePath1Ref}
          />
          <path
            d='M40 500 L40 700'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileMiddlePath2Ref}
          />
          <circle ref={mobileDot3Ref} cx='40' cy='200' r='4' fill='#10b981' />
          <circle ref={mobileDot4Ref} cx='40' cy='500' r='4' fill='#ec4899' />
        </svg>

        {/* Right Vertical Lines (S-shaped curves) */}
        <svg
          className='absolute right-8 top-0 w-16 h-full'
          viewBox='0 0 80 800'
        >
          <path
            d='M40 200 C60 250 20 300 40 350 C60 400 20 450 40 500'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileRightPath1Ref}
          />
          <path
            d='M40 500 C60 550 20 600 40 650 C60 700 20 750 40 800'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={mobileRightPath2Ref}
          />
          <circle ref={mobileDot5Ref} cx='40' cy='200' r='4' fill='#8b5cf6' />
          <circle ref={mobileDot6Ref} cx='40' cy='500' r='4' fill='#f59e0b' />
        </svg>

        {/* Product Labels */}
        <div className='absolute top-16 left-4 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Magazine
        </div>
        <div className='absolute top-16 right-4 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Challenge
        </div>
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Community
        </div>
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Tutorials
        </div>
        <div className='absolute bottom-16 left-4 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Plus +
        </div>
        <div className='absolute bottom-16 right-4 text-gray-400 text-sm font-medium transform -rotate-90'>
          AVIS Conference
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex items-center justify-center w-full max-w-6xl relative'>
        {/* Central Logo */}
        <div className='relative w-40 h-40 z-10'>
          <Image
            src='https://avisengine.com/wp-content/uploads/2023/05/76964453-1.png'
            alt='AVIS Engine Logo'
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Top S-shaped Lines */}
        <svg className='absolute top-8 left-0 w-full h-16' viewBox='0 0 800 80'>
          <path
            d='M400 40 C350 20 300 60 250 40 C200 20 150 60 100 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={topPathLeftRef}
          />
          <path
            d='M400 40 C450 20 500 60 550 40 C600 20 650 60 700 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={topPathRightRef}
          />
          <circle ref={dot1Ref} cx='100' cy='40' r='4' fill='#ef4444' />
          <circle ref={dot2Ref} cx='700' cy='40' r='4' fill='#10b981' />
        </svg>

        {/* Middle Horizontal Lines */}
        <svg
          className='absolute top-1/2 left-0 w-full h-16 transform -translate-y-1/2'
          viewBox='0 0 800 80'
        >
          <path
            d='M100 40 L300 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={middlePathLeftRef}
          />
          <path
            d='M500 40 L700 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={middlePathRightRef}
          />
          <circle ref={dot3Ref} cx='100' cy='40' r='4' fill='#8b5cf6' />
          <circle ref={dot4Ref} cx='700' cy='40' r='4' fill='#f59e0b' />
        </svg>

        {/* Bottom S-shaped Lines */}
        <svg
          className='absolute bottom-8 left-0 w-full h-16'
          viewBox='0 0 800 80'
        >
          <path
            d='M400 40 C350 60 300 20 250 40 C200 60 150 20 100 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={bottomPathLeftRef}
          />
          <path
            d='M400 40 C450 60 500 20 550 40 C600 60 650 20 700 40'
            stroke='#374151'
            strokeWidth='2'
            fill='none'
            ref={bottomPathRightRef}
          />
          <circle ref={dot5Ref} cx='100' cy='40' r='4' fill='#06b6d4' />
          <circle ref={dot6Ref} cx='700' cy='40' r='4' fill='#ec4899' />
        </svg>

        {/* Product Labels */}
        <div className='absolute top-4 left-16 text-gray-400 text-sm font-medium'>
          AVIS Magazine
        </div>
        <div className='absolute top-4 right-16 text-gray-400 text-sm font-medium'>
          AVIS Challenge
        </div>
        <div className='absolute top-1/2 left-16 transform -translate-y-1/2 text-gray-400 text-sm font-medium'>
          AVIS Community
        </div>
        <div className='absolute top-1/2 right-16 transform -translate-y-1/2 text-gray-400 text-sm font-medium'>
          AVIS Tutorials
        </div>
        <div className='absolute bottom-4 left-16 text-gray-400 text-sm font-medium'>
          AVIS Plus +
        </div>
        <div className='absolute bottom-4 right-16 text-gray-400 text-sm font-medium'>
          AVIS Conference
        </div>
      </div>
    </div>
  )
}

export default ProductsComponent
