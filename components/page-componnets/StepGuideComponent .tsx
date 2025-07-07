import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  CheckCircle,
  Circle,
  Plus,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Target,
  Activity,
} from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
  color: string
  gradient: string
}

const ModernStepGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const steps: Step[] = [
    {
      id: 1,
      title: 'One-Click Cycle Creation',
      description:
        "Effortlessly create cycles with intelligent templates and automated workflows that adapt to your team's rhythm.",
      icon: <Plus className='w-6 h-6' />,
      color: 'from-violet-500 to-purple-600',
      gradient: 'bg-gradient-to-br from-violet-500/10 to-purple-600/10',
      content: (
        <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 p-8 hover:border-violet-500/50 transition-all duration-700'>
          <div className='absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
          <div className='relative z-10'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-3 h-3 rounded-full bg-red-500 animate-pulse' />
              <span className='text-neutral-300 text-sm font-medium'>
                No active cycles
              </span>
            </div>
            <div className='bg-neutral-800/50 rounded-xl p-6 mb-6 border border-neutral-700/50'>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-white font-semibold text-lg'>
                  New Cycle
                </span>
                <div className='flex items-center gap-2'>
                  <Sparkles className='w-4 h-4 text-violet-400' />
                  <span className='text-neutral-400 text-sm'>
                    AI-powered naming
                  </span>
                </div>
              </div>
              <div className='space-y-3'>
                {[
                  { color: 'bg-blue-500', label: 'Backlog', count: 12 },
                  { color: 'bg-amber-500', label: 'In Progress', count: 5 },
                  { color: 'bg-emerald-500', label: 'Done', count: 23 },
                ].map((status, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700/30 transition-colors'
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${status.color} shadow-lg`}
                    />
                    <span className='text-neutral-300 text-sm font-medium flex-1'>
                      {status.label}
                    </span>
                    <span className='text-neutral-400 text-xs'>
                      {status.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className='w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2'>
              <Zap className='w-4 h-4' />
              Create Cycle
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Intelligent Progress Insights',
      description:
        'Real-time analytics and predictive insights that help you understand team velocity and identify bottlenecks before they impact delivery.',
      icon: <BarChart3 className='w-6 h-6' />,
      color: 'from-cyan-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10',
      content: (
        <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 p-8 hover:border-cyan-500/50 transition-all duration-700'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
          <div className='relative z-10'>
            <div className='flex justify-between items-start mb-6'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Activity className='w-5 h-5 text-cyan-400' />
                  <span className='text-white font-semibold text-lg'>
                    Progress Overview
                  </span>
                </div>
                <div className='text-neutral-400 text-sm'>
                  32/45 issues completed
                </div>
              </div>
              <div className='text-right'>
                <div className='text-white font-semibold text-lg'>Velocity</div>
                <div className='w-20 h-12 bg-neutral-800/50 rounded-lg flex items-end justify-center p-2 border border-neutral-700/50'>
                  <div className='w-full h-full bg-gradient-to-t from-cyan-600 to-blue-500 rounded opacity-80' />
                </div>
              </div>
            </div>

            <div className='relative mb-6'>
              <div className='w-full bg-neutral-800 rounded-full h-3 overflow-hidden'>
                <div
                  className='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000'
                  style={{ width: '71%' }}
                />
              </div>
              <div className='absolute -top-1 right-0 transform translate-x-1/2'>
                <div className='w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-neutral-900 animate-pulse' />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {[
                {
                  status: 'Completed',
                  count: 32,
                  color: 'bg-emerald-500',
                  percentage: 71,
                },
                {
                  status: 'In Progress',
                  count: 8,
                  color: 'bg-amber-500',
                  percentage: 18,
                },
                {
                  status: 'Blocked',
                  count: 3,
                  color: 'bg-red-500',
                  percentage: 7,
                },
                {
                  status: 'Backlog',
                  count: 2,
                  color: 'bg-neutral-500',
                  percentage: 4,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30'
                >
                  <div
                    className={`w-3 h-3 rounded-full ${item.color} shadow-lg`}
                  />
                  <div className='flex-1'>
                    <div className='text-neutral-300 text-sm font-medium'>
                      {item.status}
                    </div>
                    <div className='text-neutral-400 text-xs'>
                      {item.count} issues
                    </div>
                  </div>
                  <div className='text-white text-sm font-semibold'>
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Seamless Issue Migration',
      description:
        'Smart issue transfer with context preservation and automated dependency mapping across cycles.',
      icon: <ArrowRight className='w-6 h-6' />,
      color: 'from-emerald-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/10',
      content: (
        <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 p-8 hover:border-emerald-500/50 transition-all duration-700'>
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
          <div className='relative z-10'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <Target className='w-5 h-5 text-emerald-400' />
                <span className='text-neutral-300 text-sm font-medium'>
                  Cycle completed - 5 issues remaining
                </span>
              </div>
              <button className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg'>
                Smart Transfer
              </button>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-neutral-300 text-sm font-semibold'>
                    Pending Issues
                  </span>
                  <div className='w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-amber-400 text-xs font-bold'>5</span>
                  </div>
                </div>
                {[
                  {
                    title: 'API Integration',
                    priority: 'high',
                    team: 'Backend',
                  },
                  { title: 'UI Polish', priority: 'medium', team: 'Frontend' },
                  { title: 'Testing Suite', priority: 'low', team: 'QA' },
                ].map((issue, i) => (
                  <div
                    key={i}
                    className='bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/30 hover:border-emerald-500/30 transition-all duration-300'
                  >
                    <div className='text-white text-sm font-medium mb-2'>
                      {issue.title}
                    </div>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          issue.priority === 'high'
                            ? 'bg-red-500'
                            : issue.priority === 'medium'
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                      <span className='text-neutral-400 text-xs'>
                        {issue.team}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-neutral-300 text-sm font-semibold'>
                    Next Cycle
                  </span>
                  <div className='w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-emerald-400 text-xs font-bold'>
                      12
                    </span>
                  </div>
                </div>
                <div className='bg-neutral-800/30 rounded-xl p-4 border-2 border-dashed border-emerald-500/30 text-center'>
                  <div className='text-emerald-400 text-sm font-medium mb-2'>
                    Auto-Transfer Zone
                  </div>
                  <div className='text-neutral-400 text-xs'>
                    Issues will be intelligently categorized and prioritized
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Predictive Planning',
      description:
        'AI-powered forecasting and historical pattern analysis to optimize future cycles and resource allocation.',
      icon: <TrendingUp className='w-6 h-6' />,
      color: 'from-orange-500 to-red-600',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/10',
      content: (
        <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 p-8 hover:border-orange-500/50 transition-all duration-700'>
          <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
          <div className='relative z-10'>
            <div className='flex justify-between items-start mb-6'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <TrendingUp className='w-5 h-5 text-orange-400' />
                  <span className='text-white font-semibold text-lg'>
                    Cycle Analytics
                  </span>
                </div>
                <div className='text-neutral-400 text-sm'>
                  Historical performance & predictions
                </div>
              </div>
              <div className='text-right'>
                <div className='text-white font-semibold text-lg'>Forecast</div>
                <div className='w-20 h-12 bg-neutral-800/50 rounded-lg flex items-end justify-center p-2 border border-neutral-700/50'>
                  <div className='w-full h-full bg-gradient-to-t from-orange-600 to-red-500 rounded opacity-80' />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6 mb-6'>
              <div className='space-y-3'>
                <div className='text-neutral-300 text-sm font-semibold'>
                  Performance Metrics
                </div>
                {[
                  { label: 'Completion Rate', value: '94%', trend: 'up' },
                  { label: 'Velocity', value: '32 pts', trend: 'up' },
                  { label: 'Quality Score', value: '4.8/5', trend: 'stable' },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className='flex items-center justify-between p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30'
                  >
                    <span className='text-neutral-300 text-sm'>
                      {metric.label}
                    </span>
                    <div className='flex items-center gap-2'>
                      <span className='text-white font-semibold text-sm'>
                        {metric.value}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          metric.trend === 'up'
                            ? 'bg-emerald-500'
                            : 'bg-amber-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className='space-y-3'>
                <div className='text-neutral-300 text-sm font-semibold'>
                  Upcoming Cycles
                </div>
                <div className='space-y-2'>
                  {[
                    { period: 'Jul 15 - Aug 24', capacity: '85%', risk: 'low' },
                    {
                      period: 'Aug 25 - Sep 30',
                      capacity: '92%',
                      risk: 'medium',
                    },
                  ].map((cycle, i) => (
                    <div
                      key={i}
                      className='p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30'
                    >
                      <div className='text-neutral-300 text-sm font-medium'>
                        {cycle.period}
                      </div>
                      <div className='flex items-center gap-2 mt-1'>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            cycle.risk === 'low'
                              ? 'bg-emerald-500'
                              : 'bg-amber-500'
                          }`}
                        />
                        <span className='text-neutral-400 text-xs'>
                          {cycle.capacity} capacity
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20'>
              <div className='text-orange-400 text-sm font-semibold mb-2'>
                AI Recommendation
              </div>
              <div className='text-neutral-300 text-sm'>
                Based on historical data, consider adding 2 buffer days to the
                next cycle for optimal delivery confidence.
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerTop = containerRect.top + scrollTop
    const containerBottom = containerTop + containerRect.height

    // Calculate progress within the component
    const componentProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollTop + windowHeight / 2 - containerTop) /
          (containerRect.height - windowHeight)
      )
    )

    setScrollProgress(componentProgress)

    // Check which step is active
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
    <div ref={containerRef} className='relative bg-black text-white'>
      {/* Animated Background - only within component */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20' />
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Timeline - only within component */}
      <div className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent z-10'>
        <div
          className='bg-gradient-to-b from-violet-500 via-cyan-500 to-orange-500 w-full transition-all duration-1000 ease-out'
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className='relative z-20'>
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            className='min-h-screen flex items-center py-20'
          >
            <div className='absolute left-1/2 transform -translate-x-1/2 z-30'>
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 backdrop-blur-md ${
                  isStepCompleted(index) || isStepActive(index)
                    ? `bg-gradient-to-r ${step.color} border-white/30 text-white scale-110 shadow-2xl`
                    : 'bg-neutral-800/80 border-neutral-600 text-neutral-400 scale-90'
                }`}
              >
                {isStepCompleted(index) && !isStepActive(index) ? (
                  <CheckCircle className='w-8 h-8' />
                ) : (
                  <div
                    className={`${isStepActive(index) ? 'animate-pulse' : ''}`}
                  >
                    {step.icon}
                  </div>
                )}
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
                      isStepActive(index) ? 'text-white' : 'text-neutral-600'
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
  )
}

export default ModernStepGuide
