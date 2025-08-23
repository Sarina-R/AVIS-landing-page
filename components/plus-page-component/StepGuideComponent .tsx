'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import steps from '../steps'

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
    <div id='steps' className='relative min-h-screen font-sans'>
      <div ref={containerRef} className='relative px-4 py-8 min-h-screen'>
        {/* Steps */}
        <div className='relative z-20 w-full max-w-3xl mx-auto'>
          {/* Timeline */}
          <div className='absolute left-1.5  top-0 h-full w-[2px] bg-neutral-700 z-10'>
            <div
              className='bg-sky-400/80 w-full transition-all duration-1000 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              className='relative py-4'
            >
              {/* Step Marker */}
              <div className='absolute left-2 -translate-x-1/2 z-30'>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isStepCompleted(index) || isStepActive(index)
                      ? 'bg-sky-400 border-sky-400 text-black scale-110'
                      : 'bg-neutral-700 border-neutral-700 text-neutral-400 scale-90'
                  }`}
                >
                  <div className={isStepActive(index) ? 'animate-pulse' : ''}>
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className='ml-10 pl-2 border-l-2 border-neutral-700'>
                <div className='mb-1'>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      isStepActive(index)
                        ? 'bg-sky-400/80 text-black'
                        : 'bg-neutral-700 text-neutral-400'
                    }`}
                  >
                    {String(index + 1)}
                  </span>
                </div>
                <h2 className='text-sm font-semibold mb-1 text-white'>
                  {step.title}
                </h2>
                <p className='text-xs text-neutral-400 mb-2'>
                  {step.description}
                </p>
                <div className='text-xs'>{step.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepGuide
