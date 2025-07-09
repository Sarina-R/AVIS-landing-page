import React from 'react'
import {
  Cloud,
  RefreshCw,
  Settings,
  Shield,
  Users,
  Infinity,
  Bell,
  Container,
  Database,
  Grid3x3,
  Lock,
  Archive,
  LucideIcon,
} from 'lucide-react'

interface Feature {
  text: string
  position: string
  style: React.CSSProperties
  image?: string
  icon?: LucideIcon
}

export default function FloatingStuff() {
  const features: Feature[] = [
    {
      image:
        'https://avisengine.com/wp-content/uploads/2023/05/amd-logo-1.svg.png',
      text: 'AMD',
      position: 'top-left',
      style: { top: '8%', left: '18%' },
    },
    {
      image:
        'https://avisengine.com/wp-content/uploads/2024/02/stanford-university-logo-83501A80B4-seeklogo.com_.png',
      text: 'Stanford University',
      position: 'top-center',
      style: { top: '12%', left: '45%' },
    },
    {
      image:
        'https://avisengine.com/wp-content/uploads/2024/02/ubc_3-300x125.png',
      text: 'UBC',
      position: 'top-right',
      style: { top: '8%', right: '15%' },
    },
    {
      image:
        'https://avisengine.com/wp-content/uploads/2024/02/GeorgiaTech_RGB-300x106.png',
      text: 'Georgia Tech',
      position: 'mid-left',
      style: { top: '25%', left: '10%' },
    },
    {
      icon: Users,
      text: 'Region-locked for compliance',
      position: 'mid-right',
      style: { top: '20%', right: '12%' },
    },
    {
      icon: Shield,
      text: 'Secure by default',
      position: 'left',
      style: { top: '45%', left: '8%' },
    },
    {
      icon: Infinity,
      text: 'Performant for\nunlimited issues and projects',
      position: 'right',
      style: { top: '32%', right: '8%' },
    },
    {
      icon: Container,
      text: 'Docker + Kubernetes support',
      position: 'bottom-left',
      style: { bottom: '26%', left: '5%' },
    },
    {
      icon: Bell,
      text: 'Popular Linux-compatible',
      position: 'bottom-right',
      style: { bottom: '30%', right: '18%' },
    },
    {
      icon: Database,
      text: 'Scales easily\nwith your infra',
      position: 'bottom-left-2',
      style: { bottom: '18%', left: '28%' },
    },
    {
      icon: Archive,
      text: '99.9% feature parity\nwith our Cloud',
      position: 'bottom-right-2',
      style: { bottom: '20%', right: '10%' },
    },
    {
      icon: Grid3x3,
      text: 'Modular monolith\nfor customization',
      position: 'bottom-left-3',
      style: { bottom: '8%', left: '18%' },
    },
    {
      icon: Lock,
      text: 'One-click install',
      position: 'bottom-center',
      style: { bottom: '12%', left: '45%' },
    },
    {
      icon: Archive,
      text: 'Available on\npopular marketplaces',
      position: 'bottom-right-3',
      style: { bottom: '8%', right: '2%' },
    },
  ]

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className='absolute z-10 hidden md:block'
            style={{
              ...feature.style,
              animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className='flex items-center gap-2 bg-primary/15 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 hover:bg-primary/20 transition-colors'>
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.text}
                  className='w-8 h-8 object-contain flex-shrink-0'
                />
              ) : Icon ? (
                <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon className='w-4 h-4 text-white' />
                </div>
              ) : null}
              <span className='text-sm font-medium whitespace-pre-line text-gray-200'>
                {feature.text}
              </span>
            </div>
          </div>
        )
      })}

      <div className='relative z-20 flex items-center justify-center min-h-screen px-4'>
        <div className='text-center max-w-4xl'>
          <h1 className='text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 leading-tight'>
            TRUSTED BY
          </h1>
          <p className='text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            COMPANIES AND RESEARCH CENTERS AROUND THE WORLD
          </p>
        </div>
      </div>

      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
