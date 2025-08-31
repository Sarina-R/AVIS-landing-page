import { useEffect, useRef, useState, useCallback } from 'react'
import { Star, MessageCircle, User, Heart } from 'lucide-react'
import { ModernCard } from '../ModernCard'

interface Testimonial {
  id: number
  name: string
  avatar: string
  platform: string
  text: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Niran',
    avatar: 'N',
    platform: 'discord',
    text: 'I’m in high school and started using AVIS Engine for our robotics club. Didn’t expect it to be this fun—the car sims feel super real.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 2,
    name: 'The Ghost Lab',
    avatar: 'TL',
    platform: 'discord',
    text: "Hey guys, I've been using AVIS for the past few months and I think it's dope!",
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    name: 'McHectic',
    avatar: 'MC',
    platform: 'discord',
    text: "Yo, how is this free? It's just so good!",
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 4,
    name: 'Legend',
    avatar: 'LE',
    platform: 'reddit',
    text: 'More intuitive. You can easily just understand how to use it unlike other apps where u spend weeks and still not get the hang of it.',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 5,
    name: 'Rockeer',
    avatar: 'RO',
    platform: 'discord',
    text: 'Our uni team’s been testing self-driving stuff with AVIS Engine. The physics are amazing, and now we’re even showing results at an AVIS Events workshop. Honestly feels like a huge W for us 🔥.',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 6,
    name: 'JGalt',
    avatar: 'JG',
    platform: 'discord',
    text: 'I’m not a pro coder, just a hobbyist, but AVIS Engine is actually fun for messing around with AI cars. Tried one of the AVIS Challenges too—didn’t win lol but the vibes were great 😅.',
    color: 'from-teal-600 to-blue-600',
  },
]

const moreTestimonials: Testimonial[] = [
  {
    id: 7,
    name: 'DevMaster',
    avatar: 'DM',
    platform: 'github',
    text: 'Used AVIS Engine for my uni project proposal on autonomous vehicles. The docs were super clear, and I found some really chill ppl on AVIS Community. My proposal actually got approved 😭🙌.',
    color: 'from-rose-600 to-pink-600',
  },
  {
    id: 8,
    name: 'CodeNinja',
    avatar: 'CN',
    platform: 'twitter',
    text: 'I’m a researcher and AVIS Engine made my autonomous vehicle study so much easier. The tutorials from AVIS Events were actually useful (rare lol).',
    color: 'from-violet-600 to-purple-600',
  },
  {
    id: 9,
    name: 'TechGuru',
    avatar: 'TG',
    platform: 'linkedin',
    text: 'AVIS has revolutionized how our team manages projects. Highly recommend!',
    color: 'from-amber-600 to-orange-600',
  },
]

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'discord':
      return <MessageCircle className='w-4 h-4 text-indigo-400' />
    case 'reddit':
      return <MessageCircle className='w-4 h-4 text-orange-400' />
    case 'github':
      return <Star className='w-4 h-4 text-neutral-400' />
    case 'twitter':
      return <MessageCircle className='w-4 h-4 text-blue-400' />
    case 'linkedin':
      return <User className='w-4 h-4 text-blue-600' />
    default:
      return <Heart className='w-4 h-4 text-red-400' />
  }
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className='flex-shrink-0 w-80 h-56 mx-3 sm:mx-4 select-none'>
    <ModernCard className='h-full'>
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center space-x-3'>
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
            >
              {testimonial.avatar}
            </div>
            <div>
              <h3 className='text-white font-semibold text-sm tracking-tight'>
                {testimonial.name}
              </h3>
              <div className='flex items-center space-x-1.5 mt-1'>
                {getPlatformIcon(testimonial.platform)}
                <span className='text-neutral-300 text-xs capitalize font-medium'>
                  {testimonial.platform}
                </span>
              </div>
            </div>
          </div>
          <div className='flex space-x-1'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='w-3 h-3 text-yellow-400 fill-current' />
            ))}
          </div>
        </div>
        <p className='text-neutral-200 text-sm leading-relaxed font-light flex-1 overflow-hidden'>
          {testimonial.text}
        </p>
      </div>
    </ModernCard>
  </div>
)

const InfiniteSlider: React.FC<{
  items: Testimonial[]
  direction?: 'left' | 'right'
  speed?: number
}> = ({ items, direction = 'left', speed = 50 }) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const animationRef = useRef<number>(0)
  const basePositionRef = useRef(0)
  const lastUpdateTimeRef = useRef<number>(0)
  const dragStartRef = useRef({ x: 0, startPosition: 0 })

  const duplicatedItems = [...items, ...items, ...items, ...items]
  const cardWidth = 352
  const totalWidth = items.length * cardWidth

  const updatePosition = useCallback(
    (currentTime: number) => {
      if (!sliderRef.current) return

      if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = currentTime
      }

      if (!isPaused && !isDragging) {
        const deltaTime = currentTime - lastUpdateTimeRef.current
        const movement = (deltaTime / 1000) * (totalWidth / speed)

        if (direction === 'left') {
          basePositionRef.current -= movement
        } else {
          basePositionRef.current += movement
        }

        basePositionRef.current = basePositionRef.current % totalWidth
        if (basePositionRef.current > 0) basePositionRef.current -= totalWidth
        if (basePositionRef.current < -totalWidth)
          basePositionRef.current += totalWidth
      }

      lastUpdateTimeRef.current = currentTime

      const finalPosition = basePositionRef.current + dragOffset
      sliderRef.current.style.transform = `translateX(${finalPosition}px)`
    },
    [direction, speed, totalWidth, isPaused, isDragging, dragOffset]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      updatePosition(currentTime)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [updatePosition])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartRef.current = {
      x: e.clientX,
      startPosition: basePositionRef.current,
    }
  }, [])

  // const handleMouseMove = useCallback(
  //   (e: React.MouseEvent) => {
  //     if (!isDragging) return

  //     const deltaX = e.clientX - dragStartRef.current.x
  //     setDragOffset(deltaX)
  //   },
  //   [isDragging]
  // )

  // const handleMouseUp = useCallback(() => {
  //   if (!isDragging) return

  //   basePositionRef.current += dragOffset
  //   setDragOffset(0)
  //   setIsDragging(false)
  //   setIsPaused(false)
  // }, [isDragging, dragOffset])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartRef.current = {
      x: e.touches[0].clientX,
      startPosition: basePositionRef.current,
    }
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return

      const deltaX = e.touches[0].clientX - dragStartRef.current.x
      setDragOffset(deltaX)
    },
    [isDragging]
  )

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return

    basePositionRef.current += dragOffset
    setDragOffset(0)
    setIsDragging(false)
    setIsPaused(false)
  }, [isDragging, dragOffset])

  useEffect(() => {
    if (!isDragging) return

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - dragStartRef.current.x
      setDragOffset(deltaX)
    }

    const handleGlobalMouseUp = () => {
      basePositionRef.current += dragOffset
      setDragOffset(0)
      setIsDragging(false)
      setIsPaused(false)
    }

    document.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseup', handleGlobalMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden py-4 cursor-grab active:cursor-grabbing'
      onMouseEnter={() => !isDragging && setIsPaused(true)}
      onMouseLeave={() => !isDragging && setIsPaused(false)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none'></div>
      <div className='absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none'></div>
      <div
        ref={sliderRef}
        className='flex will-change-transform'
        style={{ width: `${duplicatedItems.length * cardWidth}px` }}
      >
        {duplicatedItems.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} testimonial={item} />
        ))}
      </div>
    </div>
  )
}

const TestimonialSlider: React.FC = () => {
  return (
    <div className='min-h-screen bg-black text-white py-20 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto text-center mb-16 sm:mb-20'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent tracking-tight'>
          What Our Customers Say
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto'>
          Discover why developers and teams love our platform&lsquo;s simplicity
          and power
        </p>
      </div>
      <div className='space-y-12'>
        <InfiniteSlider items={testimonials} direction='right' speed={60} />
        <InfiniteSlider
          items={[...moreTestimonials, ...testimonials.slice(0, 3)]}
          direction='left'
          speed={45}
        />
      </div>
    </div>
  )
}

export default TestimonialSlider
