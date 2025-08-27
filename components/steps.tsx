import { motion } from 'framer-motion'
import { Plus, BarChart3, ArrowRight, TrendingUp, Zap } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Unified Profile Creation',
    description: 'Create your AVIS Plus profile with one click.',
    icon: <Plus className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <Plus className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-base font-medium text-white'>Profile Setup</h3>
        </div>
        <div className='text-sm text-gray-400'>No active profile</div>
        <button className='flex items-center gap-2 px-4 py-2 bg-pink-600/70 text-sm rounded-full'>
          <Zap className='w-4 h-4' /> Create Profile
        </button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Connected Insights',
    description: 'Track your activity across all AVIS platforms.',
    icon: <BarChart3 className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <BarChart3 className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-base font-medium text-white'>
            Activity Insights
          </h3>
        </div>
        <div className='text-sm text-gray-400'>80% profile completion</div>
        <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden'>
          <motion.div
            className='bg-pink-500/70 h-full rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Seamless Platform Access',
    description: 'Access all AVIS platforms with one identity.',
    icon: <ArrowRight className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <ArrowRight className='w-5 h-5 text-pink-500/50' />
          <h3 className='text-base font-medium text-white'>Platform Access</h3>
        </div>
        <div className='text-sm text-gray-400'>3 platforms connected</div>
        <button className='px-4 py-2 bg-pink-600/70 text-sm rounded-full'>
          Connect Now
        </button>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Personalized Experience',
    description: 'Tailored recommendations across AVIS platforms.',
    icon: <TrendingUp className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <TrendingUp className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-base font-medium text-white'>Personalization</h3>
        </div>
        <div className='text-sm text-gray-400'>Based on your activity</div>
        <div className='text-pink-500/70 text-sm'>Explore new events</div>
      </div>
    ),
  },
]

import { useState, useEffect, useRef, useCallback } from 'react'

const StepGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = stepRefs.current.findIndex((ref) => ref === entry.target)
        if (entry.isIntersecting && index !== -1) {
          setActiveStep(index)
          setCompletedSteps(
            (prev) =>
              new Set([
                ...prev,
                ...Array.from({ length: index + 1 }, (_, i) => i),
              ])
          )
        }
      })

      if (containerRef.current) {
        const scrollTop = window.pageYOffset
        const containerRect = containerRef.current.getBoundingClientRect()
        const containerTop = containerRect.top + scrollTop
        const containerHeight = Math.max(
          containerRect.height,
          window.innerHeight
        )
        const progress = Math.max(
          0,
          Math.min(
            1,
            (scrollTop + window.innerHeight / 2 - containerTop) /
              (containerHeight - window.innerHeight / 2)
          )
        )
        setScrollProgress(progress)
      }
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
      rootMargin: '-20% 0px',
    })

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [handleIntersection])

  const isStepCompleted = (index: number) => completedSteps.has(index)
  const isStepActive = (index: number) => activeStep === index

  return (
    <div
      id='steps'
      className='relative min-h-screen font-sans bg-black/50 backdrop-blur-xl'
    >
      <div ref={containerRef} className='relative px-6 py-12 min-h-screen'>
        {/* Steps */}
        <div className='relative z-20 w-full max-w-3xl mx-auto'>
          {/* Timeline */}
          <div className='absolute left-3 top-0 h-full w-[2px] bg-neutral-700/50 z-10'>
            <div
              className='bg-gradient-to-tr from-red-700/50 to-[#1F11CE]/50 w-full transition-all duration-1000 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              className='relative py-6'
            >
              {/* Step Marker */}
              <div className='absolute left-2 -translate-x-1/2 z-30'>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isStepCompleted(index) || isStepActive(index)
                      ? 'bg-gradient-to-tr from-red-700/50 to-[#1F11CE]/50 border-gradient-to-tr text-white scale-110'
                      : 'bg-neutral-700/50 border-neutral-700/50 text-neutral-400 scale-90'
                  }`}
                >
                  <div className={isStepActive(index) ? 'animate-pulse' : ''}>
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className='ml-12 pl-4 border-l-2 border-neutral-700/50'>
                <div className='mb-2'>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      isStepActive(index)
                        ? 'bg-gradient-to-tr from-red-700/50 to-[#1F11CE]/50 text-white'
                        : 'bg-neutral-700/50 text-neutral-400'
                    }`}
                  >
                    {String(index + 1)}
                  </span>
                </div>
                <h2 className='text-lg font-semibold mb-2 text-white'>
                  {step.title}
                </h2>
                <p className='text-sm text-neutral-400 mb-3'>
                  {step.description}
                </p>
                <div className='text-sm'>{step.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepGuide
