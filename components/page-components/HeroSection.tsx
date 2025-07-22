import Link from 'next/link'
import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

const AnimatedHeroSection = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className='relative min-h-[92vh] top-[8vh] overflow-hidden bg-gradient-to-b from-black via-secondary-darker to-primary-darker'>
      <div
        className='absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[100%] -translate-x-1/2 rounded-[100%] border-accent bg-black'
        style={{
          background:
            'radial-gradient(circle, #000000 0%, #000000 40%, #650d14 60%, #8B1A25 80%, #D14975 100%)',
          boxShadow: `
        0 10px 30px rgba(0, 0, 0, 0.5),
        inset 0 0 20px rgba(101, 13, 20, 0.7)
      `,
          borderColor: '#D14975',
        }}
      />

      <div className='absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-accent/20'>
        <div className='col-span-1 flex h-full items-center justify-center border-r border-accent/10' />
        <div className='col-span-1 flex h-full items-center justify-center border-x border-accent/10' />
        <div className='col-span-1 flex h-full items-center justify-center border-l border-accent/10' />
      </div>

      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-black/50' />

        <div className='absolute inset-0'>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className='absolute animate-float opacity-20'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className='w-1 h-1 bg-accent rounded-full blur-sm' />
            </div>
          ))}
        </div>

        <div
          className='absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse'
          style={{
            background: `radial-gradient(circle, #D14975 0%, #650d14 50%, transparent 100%)`,
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div
          className='absolute w-64 h-64 rounded-full blur-2xl opacity-20 animate-pulse'
          style={{
            background: `radial-gradient(circle, #43080d 0%, #8B1A25 50%, transparent 100%)`,
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
      </div>

      <figure className='pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px] bg-accent/40 animate-pulse' />
      <figure className='pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block bg-primary/30 animate-float' />
      <figure
        className='pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block bg-secondary/30 animate-float'
        style={{ animationDelay: '2s' }}
      />

      <div className='relative z-10 flex flex-col divide-y divide-accent/10 pt-[35px]'>
        <div className='flex flex-col items-center justify-end'>
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className='flex items-center gap-2 !border !border-b-0 border-accent/20 bg-secondary/20 backdrop-blur-sm px-4 py-2'>
              <div className='w-2 h-2 bg-accent rounded-full animate-pulse' />
              <p className='text-foreground/80 text-sm tracking-wide font-medium'>
                AVIS Engine
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='mx-auto flex h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-10 lg:px-24'>
            <h1
              className={`text-pretty text-center text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(50px,7vw,75px)] font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px] transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
            >
              <span className=''>
                Fast and robust simulator for intelligent systems
              </span>
            </h1>
          </div>
        </div>

        <div className='flex items-start justify-center divide-y divide-accent/10 px-8 sm:px-24'>
          <div className='flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]'>
            <Link href='/docs' className='cursor-pointer w-full'>
              <div
                className={`!h-14 items-center justify-center rounded-none !text-base max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-accent/20 !bg-transparent backdrop-blur-xl transition-all duration-300 hover:!bg-accent/10 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <span className='text-foreground/80 hover:text-foreground transition-colors'>
                  View Documentation →
                </span>
              </div>
            </Link>
            <Link href='/docs' className='cursor-pointer w-full'>
              <div
                className={`!h-14 items-center justify-center rounded-none border-none !text-base flex w-full border-[1.2px] border-accent/20 bg-gradient-to-tr from-primary via-secondary to-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <span className='text-white font-semibold'>
                  Discover AVIS Engine
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className='mx-auto max-w-7xl'>
          <AnimatedLogoCloud />
        </div>
      </div>

      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer' />
        <div
          className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-shimmer'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-shimmer'
          style={{ animationDelay: '3s' }}
        />
      </div>
    </section>
  )
}

const logos = [
  {
    name: 'AMD',
    url: 'https://avisengine.com/wp-content/uploads/2023/05/amd-logo-1.svg.png',
  },
  {
    name: 'Stanford University',
    url: 'https://avisengine.com/wp-content/uploads/2024/02/stanford-university-logo-83501A80B4-seeklogo.com_.png',
  },
  {
    name: 'Prime',
    url: 'https://avisengine.com/wp-content/uploads/2024/02/ubc_3-300x125.png',
  },
  {
    name: 'Georgia Tech',
    url: 'https://avisengine.com/wp-content/uploads/2024/02/GeorgiaTech_RGB-300x106.png',
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className='w-full py-12'>
      <div className='mx-auto w-full px-4 md:px-8'>
        <div
          className='group relative mt-6 flex gap-6 overflow-hidden p-2'
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className='flex shrink-0 animate-logo-slide flex-row justify-around gap-6'
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className='h-6 w-24 px-2 flex-none brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300'
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedHeroSection

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes logo-slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 1s ease infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 1s ease-in-out infinite;
  }
  
  .animate-logo-slide {
    animation: logo-slide 5s linear infinite;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
