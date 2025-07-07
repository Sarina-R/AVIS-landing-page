import { useState, useEffect, useRef, useCallback } from 'react'
import steps from './steps'

const ModernStepGuide: React.FC = () => {
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
    <div className='relative bg-background text-foreground min-h-screen'>
      <div className='lg:hidden block touch-action-auto'>
        <div ref={containerRef} className='relative px-4 py-8 min-h-screen'>
          {/* Timeline */}
          <div className='absolute left-6 top-0 h-full w-[2px] bg-muted z-20'>
            <div
              className='bg-primary-gradient w-full transition-all duration-1000 ease-out z-30'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className='relative z-30 w-full max-w-4xl mx-auto'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className='relative py-6'
              >
                {/* Step Marker */}
                <div className='absolute left-2 -translate-x-1/2 z-40'>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ease-in-out backdrop-blur-md ${
                      isStepCompleted(index) || isStepActive(index)
                        ? `bg-primary-gradient border-border text-accent scale-110 shadow-2xl`
                        : 'bg-muted/80 border-muted text-muted-foreground scale-90'
                    }`}
                  >
                    <div className={isStepActive(index) ? 'animate-pulse' : ''}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className='ml-12'>
                  <div className='mb-3'>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out ${
                        isStepActive(index)
                          ? `bg-primary-gradient text-foreground shadow-lg`
                          : 'bg-muted/50 text-muted-foreground border border-border'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className='text-2xl font-bold mb-3 transition-all duration-500 ease-in-out text-foreground'>
                    {step.title}
                  </h2>
                  <p className='text-base leading-relaxed transition-all duration-500 ease-in-out text-muted-foreground'>
                    {step.description}
                  </p>
                  <div className='mt-4 transition-all duration-700 ease-in-out'>
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='lg:block hidden'>
        <div ref={containerRef} className='relative min-h-screen'>
          {/* Timeline */}
          <div className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-muted z-10'>
            <div
              className='bg-primary-gradient w-full transition-all duration-1000 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className='relative z-30'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className='min-h-screen flex items-center py-20'
              >
                <div className='absolute left-1/2 -translate-x-1/2 z-40'>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ease-in-out backdrop-blur-md ${
                      isStepCompleted(index) || isStepActive(index)
                        ? `bg-primary-gradient border-border text-accent scale-110 shadow-2xl`
                        : 'bg-muted/80 border-muted text-muted-foreground scale-90'
                    }`}
                  >
                    <div className={isStepActive(index) ? 'animate-pulse' : ''}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                <div className='w-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12 items-center'>
                  {/* Left Content */}
                  <div className='col-span-5'>
                    <div className='text-right pr-20'>
                      <div className='mb-4'>
                        <span
                          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out ${
                            isStepActive(index)
                              ? `bg-primary-gradient text-foreground shadow-lg`
                              : 'bg-muted/50 text-muted-foreground border border-border'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2
                        className={`text-5xl font-bold mb-6 transition-all duration-500 ease-in-out ${
                          isStepActive(index)
                            ? 'text-foreground !opacity-100'
                            : 'text-muted !opacity-50'
                        }`}
                      >
                        {step.title}
                      </h2>
                      <p
                        className={`text-xl leading-relaxed transition-all duration-500 ease-in-out ${
                          isStepActive(index)
                            ? 'text-foreground !opacity-100'
                            : 'text-muted-foreground !opacity-50'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className='col-span-6 col-start-7'>
                    <div className='pl-20'>
                      <div
                        className={`transition-all duration-700 ease-in-out ${
                          isStepActive(index)
                            ? '!opacity-100 scale-100 translate-y-0'
                            : '!opacity-50 scale-95 translate-y-4'
                        }`}
                      >
                        {step.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernStepGuide
