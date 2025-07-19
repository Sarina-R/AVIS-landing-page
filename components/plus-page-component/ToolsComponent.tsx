import React, { useEffect, useRef, useState } from 'react'

export default function ToolsComponent() {
  const containerRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex-col-reverse lg:flex-row flex items-center justify-between p-8 overflow-x-hidden ${
        isVisible ? 'visible' : ''
      }`}
    >
      {/* Left side with diagram */}
      <div className='relative flex-1 flex justify-center w-full'>
        <div className='absolute right-0 h-[400px] w-[400px] lg:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-rose-700 from-rose-400 opacity-30 blur-[100px]' />
        <div className='absolute left-0 h-[400px] w-[400px] md:h-[450px] md:w-[450px] rounded-full bg-gradient-to-r to-indigo-700 from-indigo-400 opacity-30 blur-[100px]' />

        <div className='relative w-[150%] md:w-full max-w-[700px]'>
          <svg
            className={`relative z-10 w-[150%] md:w-full h-auto ${
              isVisible ? 'animate' : ''
            }`}
            fill='none'
            viewBox='0 0 700 500'
            preserveAspectRatio='xMidYMid meet'
          >
            <defs>
              {/* Gradients */}
              <linearGradient
                id='boxGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#3B82F6' />
                <stop offset='100%' stopColor='#8B5CF6' />
              </linearGradient>

              <linearGradient
                id='lineGradient1'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#3B82F6' />
                <stop offset='50%' stopColor='#8B5CF6' />
                <stop offset='100%' stopColor='#EC4899' />
              </linearGradient>

              <linearGradient
                id='lineGradient2'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#8B5CF6' />
                <stop offset='100%' stopColor='#EC4899' />
              </linearGradient>

              <linearGradient
                id='rightBoxGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#EC4899' />
                <stop offset='100%' stopColor='#EF4444' />
              </linearGradient>

              {/* Filters */}
              <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
                <feGaussianBlur stdDeviation='3' result='coloredBlur' />
                <feMerge>
                  <feMergeNode in='coloredBlur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>

              {/* Animation keyframes for path drawing */}
              <style>
                {`
                  .animate .path-animate {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: drawPath 2s ease-in-out forwards;
                  }
                  .animate .path-animate-1 {
                    animation-delay: 0.5s;
                  }
                  .animate .path-animate-2 {
                    animation-delay: 1s;
                  }
                  .animate .path-animate-3 {
                    animation-delay: 1.5s;
                  }

                  .animate .fade-in-box {
                    opacity: 0;
                    animation: fadeIn 1s ease-in-out forwards;
                  }
                  .animate .fade-in-1 {
                    animation-delay: 1s;
                  }
                  .animate .fade-in-2 {
                    animation-delay: 1.5s;
                  }
                  .animate .fade-in-3 {
                    animation-delay: 2s;
                  }

                  @keyframes drawPath {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }

                  @keyframes fadeIn {
                    to {
                      opacity: 1;
                    }
                  }
                `}
              </style>
            </defs>

            {/* Left main box */}
            <g transform='translate(50, 150)'>
              <rect
                x='0'
                y='0'
                width='160'
                height='200'
                rx='8'
                fill='rgba(0, 0, 0, 0.1)'
                stroke='rgba(225,225,225,0.1)'
                strokeWidth='2'
                filter='url(#glow)'
              />

              {/* Header with icon and text */}
              <g transform='translate(15, 20)'>
                <rect
                  x='0'
                  y='0'
                  width='20'
                  height='16'
                  rx='2'
                  fill='#64748B'
                />
                <text
                  x='30'
                  y='12'
                  fill='#E2E8F0'
                  fontSize='14'
                  fontWeight='bold'
                >
                  acme/web
                </text>
              </g>

              {/* Folder items */}
              <g transform='translate(15, 60)'>
                <rect
                  x='15'
                  y='-15'
                  width='200'
                  height='130'
                  rx='8'
                  fill='rgba(15, 15, 15, 0.85)'
                  stroke='url(#boxGradient)'
                  strokeWidth='2'
                  filter='url(#glow)'
                />

                {/* Site folder - bold */}
                <g>
                  <rect
                    x='35'
                    y='15'
                    width='16'
                    height='14'
                    rx='1'
                    fill='#3B82F6'
                  />
                  <rect
                    x='37'
                    y='17'
                    width='10'
                    height='2'
                    fill='white'
                    opacity='0.3'
                  />
                  <text
                    x='60'
                    y='25'
                    fill='#E2E8F0'
                    fontSize='13'
                    fontWeight='600'
                  >
                    site
                  </text>
                </g>

                {/* Dashboard folder */}
                <g transform='translate(35, 50)' opacity='0.5'>
                  <rect
                    x='0'
                    y='0'
                    width='16'
                    height='14'
                    rx='1'
                    fill='#64748B'
                  />
                  <rect
                    x='3'
                    y='3'
                    width='10'
                    height='2'
                    fill='white'
                    opacity='0.3'
                  />
                  <text x='25' y='10' fill='#E2E8F0' fontSize='13'>
                    dashboard
                  </text>
                </g>

                {/* Posts folder */}
                <g transform='translate(35, 85)' opacity='0.5'>
                  <rect
                    x='0'
                    y='0'
                    width='16'
                    height='14'
                    rx='1'
                    fill='#64748B'
                  />
                  <rect
                    x='3'
                    y='3'
                    width='10'
                    height='2'
                    fill='white'
                    opacity='0.3'
                  />
                  <text x='25' y='10' fill='#E2E8F0' fontSize='13'>
                    posts
                  </text>
                </g>
              </g>

              {/* Connection dots */}
              <circle cx='200' cy='85' r='4' fill='#3B82F6' />
              <circle cx='200' cy='120' r='4' fill='#8B5CF6' />
              <circle cx='200' cy='155' r='4' fill='#EC4899' />
            </g>

            {/* Animated curved connection lines */}
            <path
              d='M 250 235 Q 320 235 320 160 Q 320 140 340 140'
              stroke='url(#lineGradient1)'
              strokeWidth='2'
              fill='none'
              opacity='0.8'
              className='path-animate path-animate-1'
            />

            <path
              d='M 250 270 Q 300 270 300 250 Q 300 230 340 230'
              stroke='url(#lineGradient2)'
              strokeWidth='2'
              fill='none'
              opacity='0.8'
              className='path-animate path-animate-2'
            />

            <path
              d='M 250 305 Q 280 305 280 320 Q 280 340 340 340'
              stroke='url(#lineGradient2)'
              strokeWidth='2'
              fill='none'
              opacity='0.8'
              className='path-animate path-animate-3'
            />

            {/* Right side boxes with fade animation */}
            {/* WWW box */}
            <g
              transform='translate(350, 110)'
              className='fade-in-box fade-in-1'
            >
              <rect
                x='0'
                y='0'
                width='220'
                height='60'
                className='w-[60px] h-[60px] md:w-[220px]'
                rx='12'
                fill='rgba(0, 0, 0, 0.25)'
                stroke='url(#rightBoxGradient)'
                strokeWidth='2'
                filter='url(#glow)'
              />
              <circle cx='30' cy='30' r='12' fill='#3B82F6' />
              <text x='26' y='35' fill='white' fontSize='12' fontWeight='bold'>
                N
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='25'
                fill='#E2E8F0'
                fontSize='14'
                fontWeight='600'
              >
                www
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='42'
                fill='#64748B'
                fontSize='12'
              >
                acme.com
              </text>
            </g>

            {/* App box */}
            <g
              transform='translate(350, 200)'
              className='fade-in-box fade-in-2'
            >
              <rect
                x='0'
                y='0'
                width='220'
                height='60'
                className='w-[60px] h-[60px] md:w-[220px]'
                rx='12'
                fill='rgba(0, 0, 0, 0.25)'
                stroke='url(#rightBoxGradient)'
                strokeWidth='2'
                filter='url(#glow)'
              />
              <circle cx='30' cy='30' r='12' fill='#EF4444' />
              <text x='26' y='35' fill='white' fontSize='12' fontWeight='bold'>
                S
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='25'
                fill='#E2E8F0'
                fontSize='14'
                fontWeight='600'
              >
                app
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='42'
                fill='#64748B'
                fontSize='12'
              >
                app.acme.com
              </text>
            </g>

            {/* Blog box */}
            <g
              transform='translate(350, 290)'
              className='fade-in-box fade-in-3'
            >
              <rect
                x='0'
                y='0'
                width='220'
                height='60'
                className='w-[60px] h-[60px] md:w-[220px]'
                rx='12'
                fill='rgba(0, 0, 0, 0.25)'
                stroke='url(#rightBoxGradient)'
                strokeWidth='2'
                filter='url(#glow)'
              />
              <circle cx='30' cy='30' r='12' fill='#10B981' />
              <text x='24' y='35' fill='white' fontSize='12' fontWeight='bold'>
                M
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='25'
                fill='#E2E8F0'
                fontSize='14'
                fontWeight='600'
              >
                blog
              </text>
              <text
                className='hidden md:block'
                x='45'
                y='42'
                fill='#64748B'
                fontSize='12'
              >
                blog.acme.com
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Right side content */}
      <div className='flex-1 max-w-lg lg:max-w-80 text-center lg:text-left px-4 lg:pr-8'>
        <h2 className='text-4xl font-bold tracking-tight text-white'>
          Align your workflow
        </h2>
        <p className='mt-6 text-lg leading-8 text-neutral-400'>
          The Turborepo team collaborates with the creators behind your favorite
          tools at Vercel—ensuring alignment, stability, and the ultimate
          developer experience.
        </p>
      </div>
    </div>
  )
}
