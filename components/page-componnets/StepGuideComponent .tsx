import { useState, useEffect, useRef, useCallback } from 'react'
import steps from './steps'

const ModernStepGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight

    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerTop = containerRect.top + scrollTop

    const componentProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollTop + windowHeight / 2 - containerTop) /
          (containerRect.height - windowHeight)
      )
    )

    setScrollProgress(componentProgress)

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = windowHeight / 2

        if (Math.abs(elementCenter - viewportCenter) < windowHeight / 4) {
          setActiveStep(index)
          setCompletedSteps(
            (prev) =>
              new Set([...prev, ...Array.from({ length: index }, (_, i) => i)])
          )
        }
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const isStepCompleted = (index: number) => completedSteps.has(index)
  const isStepActive = (index: number) => activeStep === index

  return (
    <div className=''>
      <div className='md:hidden block'>
        <div
          ref={containerRef}
          className='relative bg-black text-white min-h-screen flex'
        >
          {/* Timeline */}
          <div className='fixed left-4 top-0 h-full w-1 bg-gradient-to-b from-transparent via-neutral-700 to-transparent z-10 md:left-8'>
            <div
              className='bg-gradient-to-b from-violet-500 via-cyan-500 to-purple-500 w-full transition-all duration-1000 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className='relative z-20 w-full max-w-4xl mx-auto px-4 md:px-8'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className='relative py-8 md:py-12'
              >
                {/* Step Marker */}
                <div className='absolute left-0 transform -translate-x-1/2 z-30'>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 backdrop-blur-md md:w-16 md:h-16 ${
                      isStepCompleted(index) || isStepActive(index)
                        ? `bg-gradient-to-r ${step.color} border-white/30 text-white scale-110 shadow-2xl`
                        : 'bg-neutral-800/80 border-neutral-600 text-neutral-400 scale-90'
                    }`}
                  >
                    <div className={isStepActive(index) ? 'animate-pulse' : ''}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className='ml-16 md:ml-24'>
                  <div className='mb-4'>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold transition-all duration-500 md:px-4 md:py-2 ${
                        isStepActive(index)
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2
                    className={`text-3xl font-bold mb-4 transition-all duration-500 md:text-4xl ${
                      isStepActive(index) ? 'text-white' : 'text-neutral-600'
                    }`}
                  >
                    {step.title}
                  </h2>
                  <p
                    className={`text-lg leading-relaxed transition-all duration-500 md:text-xl ${
                      isStepActive(index)
                        ? 'text-neutral-300'
                        : 'text-neutral-700'
                    }`}
                  >
                    {step.description}
                  </p>
                  <div
                    className={`mt-6 transition-all duration-700 ${
                      isStepActive(index)
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-50 scale-95 translate-y-4'
                    }`}
                  >
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='md:block hidden'>
        <div ref={containerRef} className='relative bg-black text-white'>
          {/* Timeline */}
          <div className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent z-10'>
            <div
              className='bg-gradient-to-b from-violet-500 via-cyan-500 to-purple-500 w-full transition-all duration-1000 ease-out'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className='relative z-20'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className='min-h-screen flex items-center py-20'
              >
                <div className='absolute left-1/2 transform -translate-x-1/2 z-30'>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 backdrop-blur-md ${
                      isStepCompleted(index) || isStepActive(index)
                        ? `bg-gradient-to-r ${step.color} border-white/30 text-white scale-110 shadow-2xl`
                        : 'bg-neutral-800/80 border-neutral-600 text-neutral-400 scale-90'
                    }`}
                  >
                    <div
                      className={`${
                        isStepActive(index) ? 'animate-pulse' : ''
                      }`}
                    >
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
                          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                            isStepActive(index)
                              ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                              : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2
                        className={`text-5xl font-bold mb-6 transition-all duration-500 ${
                          isStepActive(index)
                            ? 'text-white'
                            : 'text-neutral-600'
                        }`}
                      >
                        {step.title}
                      </h2>
                      <p
                        className={`text-xl leading-relaxed transition-all duration-500 ${
                          isStepActive(index)
                            ? 'text-neutral-300'
                            : 'text-neutral-700'
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
                        className={`transition-all duration-700 ${
                          isStepActive(index)
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-50 scale-95 translate-y-4'
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
