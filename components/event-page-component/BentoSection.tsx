import { useState, useEffect, useRef } from 'react'
import {
  Shield,
  Award,
  CheckCircle,
  FileCheck,
  Users,
  Globe,
  Circle,
  Lock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { BentoCard, BentoGrid } from '../magicui/bento-grid'

const CertificateSchematic = () => {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      {/* Blue Header */}
      <div className='w-full h-8 bg-white/20'></div>

      {/* Content Container */}
      <div className='p-8 space-y-10 text-center'>
        {/* Medal */}
        <div className='flex justify-center'>
          <div className='w-20 h-20 rounded-full flex items-center justify-center bg-neutral-800'>
            <Award className='w-10 h-10 text-neutral-500' />
          </div>
        </div>

        {/* Title */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-serif'>Certificate of Award</h1>
          <p className='text-sm text-neutral-400'>Presented to</p>
        </div>

        {/* Recipient Info */}
        <div className='space-y-2'>
          <div className='h-4 bg-neutral-700 w-3/4 mx-auto'></div>
          <p className='text-xs text-neutral-500'>from</p>
          <div className='h-3 bg-neutral-700 w-16 mx-auto'></div>
        </div>

        {/* Achievement */}
        <div className='space-y-2'>
          <p className='text-sm text-neutral-400'>achieved</p>
          <div className='h-4 bg-neutral-700 w-24 mx-auto'></div>
          <p className='text-sm text-neutral-400'>in</p>
          <div className='h-4 bg-neutral-700 w-3/4 mx-auto'></div>
        </div>

        {/* Event Details */}
        <div className='space-y-2'>
          <p className='text-xs text-neutral-500'>
            This certificate is awarded for participation in
          </p>
          <div className='h-3  w-5/6 mx-auto'></div>
          <div className='h-3  w-2/3 mx-auto'></div>
        </div>
      </div>

      {/* Signature */}
      <div className='absolute bottom-8 w-full px-8 text-center'>
        <div className='h-px bg-neutral-600 w-1/3 mx-auto'></div>
        <p className='text-sm mt-2'>Authorized Signature</p>
      </div>
    </div>
  )
}

const VerificationStats = () => (
  <div className='h-full flex flex-col justify-center p-6'>
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <span className='text-white/60 text-sm'>Active Certificates</span>
        <span className='text-white font-mono text-lg'>1,247</span>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-white/60 text-sm'>Verified Organizations</span>
        <span className='text-white font-mono text-lg'>89</span>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-white/60 text-sm'>Success Rate</span>
        <span className='text-white font-mono text-lg'>99.8%</span>
      </div>
    </div>
    <div className='mt-6 h-1 bg-white/10 rounded-full'>
      <div className='h-full w-[99.8%] bg-white/30 rounded-full'></div>
    </div>
  </div>
)

const RecentVerifications = () => (
  <div className='h-full p-6'>
    <div className='space-y-3'>
      {[
        { name: 'StoneTime', status: 'verified', time: '2m ago' },
        { name: 'Academy Robozoom', status: 'verified', time: '5m ago' },
        { name: 'FIRA Competition', status: 'verified', time: '12m ago' },
        { name: 'Autonomous Challenge', status: 'pending', time: '15m ago' },
      ].map((item, idx) => (
        <div
          key={idx}
          className='flex items-center justify-between py-2 border-b border-white/5 last:border-b-0'
        >
          <div className='flex items-center space-x-3'>
            <div
              className={cn(
                'w-2 h-2 rounded-full',
                item.status === 'verified'
                  ? 'bg-green-400/60'
                  : 'bg-yellow-400/60'
              )}
            ></div>
            <span className='text-white/80 text-sm'>{item.name}</span>
          </div>
          <span className='text-white/40 text-xs'>{item.time}</span>
        </div>
      ))}
    </div>
  </div>
)

const SecurityFeatures = () => (
  <div className='h-full flex items-center justify-center p-6'>
    <div className='grid grid-cols-2 gap-6 w-full'>
      <div className='flex flex-col items-center space-y-2'>
        <Lock className='w-8 h-8 text-white/60' />
        <span className='text-white/80 text-sm font-medium'>Encrypted</span>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <Shield className='w-8 h-8 text-white/60' />
        <span className='text-white/80 text-sm font-medium'>Secure</span>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <CheckCircle className='w-8 h-8 text-white/60' />
        <span className='text-white/80 text-sm font-medium'>Verified</span>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <Globe className='w-8 h-8 text-white/60' />
        <span className='text-white/80 text-sm font-medium'>Global</span>
      </div>
    </div>
  </div>
)

const VerificationFlow = () => {
  interface Step {
    id: number
    label: string
    description: string
  }

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [clickedStep, setClickedStep] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const steps: Step[] = [
    { id: 0, label: 'Submit', description: 'Document submission' },
    { id: 1, label: 'Verify', description: 'Identity verification' },
    { id: 2, label: 'Issue', description: 'Certificate generation' },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1)
          setIsAnimating(false)
        }, 300)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [currentStep, steps.length, isVisible])

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep && !isAnimating) {
      setClickedStep(stepId)
      setIsAnimating(true)

      setTimeout(() => {
        setClickedStep(null)
        setIsAnimating(false)
      }, 200)

      if (stepId < currentStep) {
        setCurrentStep(stepId)
      }
    }
  }

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'completed'
    if (stepId === currentStep) return 'active'
    return 'pending'
  }

  const isClickable = (stepId: number) => stepId <= currentStep

  return (
    <div
      ref={containerRef}
      className='h-full flex flex-col items-center justify-center p-8 bg-black'
    >
      {/* Main Stepper */}
      <div className='relative w-full max-w-4xl'>
        <div className='flex items-center justify-between relative'>
          {steps.map((step, index) => {
            const status = getStepStatus(step.id)
            const isHovered = hoveredStep === step.id
            const isClicked = clickedStep === step.id
            const clickable = isClickable(step.id)

            return (
              <div key={step.id} className='flex items-center pt-8 group'>
                {/* Step Container */}
                <div
                  className={`relative flex flex-col items-center transition-all duration-300 ease-out
                    ${clickable ? 'cursor-pointer' : 'cursor-default'}
                    ${isHovered && clickable ? 'transform -translate-y-1' : ''}
                    ${isClicked ? 'transform scale-95' : ''}
                  `}
                  onMouseEnter={() => clickable && setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Step Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ease-out flex items-center justify-center
                    ${
                      status === 'completed'
                        ? 'bg-white border-white'
                        : status === 'active'
                        ? 'bg-black border-white'
                        : 'bg-black border-neutral-600'
                    }
                    ${
                      isHovered && clickable
                        ? status === 'pending'
                          ? 'border-neutral-400 shadow-lg shadow-neutral-500/20'
                          : 'shadow-lg shadow-white/20'
                        : ''
                    }
                    ${isClicked ? 'shadow-inner' : ''}
                  `}
                  >
                    {/* Step Content */}
                    {status === 'completed' ? (
                      <CheckCircle
                        className={`w-5 h-5 text-black transition-transform duration-200
                        ${isClicked ? 'scale-90' : ''}
                      `}
                      />
                    ) : status === 'active' ? (
                      <div
                        className={`w-3 h-3 bg-white rounded-full transition-all duration-300
                        ${isAnimating ? 'animate-pulse scale-125' : ''}
                      `}
                      />
                    ) : (
                      <Circle
                        className={`w-5 h-5 transition-colors duration-300
                        ${
                          isHovered && clickable
                            ? 'text-neutral-400'
                            : 'text-neutral-600'
                        }
                      `}
                      />
                    )}

                    {/* Active Step Pulse Ring */}
                    {status === 'active' && (
                      <div className='absolute inset-0 rounded-full border-2 border-white/30 animate-ping' />
                    )}
                  </div>

                  {/* Step Label */}
                  <div
                    className={`mt-3 text-center transition-all duration-300
                    ${status === 'active' ? 'text-white' : 'text-neutral-400'}
                    ${
                      isHovered && clickable
                        ? 'text-white transform scale-105'
                        : ''
                    }
                  `}
                  >
                    <div className='font-medium text-sm'>{step.label}</div>
                    <div
                      className={`text-xs mt-1 transition-opacity duration-300
                      ${isHovered && clickable ? 'opacity-100' : 'opacity-60'}
                    `}
                    >
                      {step.description}
                    </div>
                  </div>

                  {/* Hover Indicator Line */}
                  {isHovered && clickable && (
                    <div className='absolute -bottom-2 w-8 h-0.5 bg-white/60 transition-all duration-300' />
                  )}
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className='flex-1 mx-8 relative h-px overflow-hidden'>
                    {/* Base Line */}
                    <div className='absolute inset-0 bg-neutral-700' />

                    {/* Progress Line */}
                    <div
                      className={`absolute inset-0 bg-white transition-all duration-700 ease-out origin-left
                      ${
                        getStepStatus(index) === 'completed'
                          ? 'scale-x-100'
                          : 'scale-x-0'
                      }
                    `}
                    />

                    {/* Active Progress Animation */}
                    {getStepStatus(index) === 'completed' &&
                      getStepStatus(index + 1) === 'active' && (
                        <div className='absolute right-0 top-0 w-2 h-full bg-gradient-to-l from-transparent to-white animate-pulse' />
                      )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    Icon: Award,
    name: 'Certificate Design',
    description: 'Professional certificate templates with secure verification.',
    href: '#',
    className: 'col-span-3 lg:col-span-2 row-span-2',
    background: <CertificateSchematic />,
  },
  {
    Icon: FileCheck,
    name: 'Verification Stats',
    description: 'Real-time verification statistics and success rates.',
    href: '#',
    cta: 'View Stats',
    className: 'col-span-3 lg:col-span-1',
    background: <VerificationStats />,
  },
  {
    Icon: Users,
    name: 'Recent Activity',
    description: 'Latest certificate verifications and activity.',
    href: '#',
    cta: 'View All',
    className: 'col-span-3 lg:col-span-1',
    background: <RecentVerifications />,
  },
  {
    Icon: Shield,
    name: 'Security',
    description: 'End-to-end encryption and secure verification.',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-1',
    background: <SecurityFeatures />,
  },
  {
    Icon: CheckCircle,
    name: 'Process Flow',
    description: 'Simple 3-step verification process.',
    className: 'col-span-3 lg:col-span-2',
    href: '#',
    cta: 'Get Started',
    background: <VerificationFlow />,
  },
]

export function BentoDemo() {
  return (
    <section className='min-h-screen py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-6'>
            Certificate and Verification
          </h2>
          <p className='text-xl text-white/60'>
            Secure, verified, and globally recognized certification system.
          </p>
        </div>
        <BentoGrid className='grid-cols-3'>
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              {...feature}
              className={cn(
                feature.className,
                'bg-black border border-white/10 hover:border-white/20 transition-colors'
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
