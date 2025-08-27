export const AVISGlobalConnect = () => {
  return (
    <div className='bg-black p-6 md:p-8 lg:p-10 border border-white/10 flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <div className='w-5 h-5 mr-3 flex items-center justify-center'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-4 h-4 text-gray-400'
          >
            <circle
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='1.5'
            />
            <path
              d='M8 12H16M12 8V16'
              stroke='currentColor'
              strokeWidth='1.5'
            />
          </svg>
        </div>
        <h2 className='text-lg font-medium'>AVIS Global Connect</h2>
      </div>

      <div className='mb-8 flex-1'>
        <p className='text-base font-medium mb-2'>
          <span className='font-bold'>Global access.</span>{' '}
          <span className='text-gray-400'>
            Your AVIS Plus identity connects you to platforms worldwide,
            ensuring seamless access from any location.
          </span>
        </p>
      </div>

      <div className='flex justify-center items-center flex-1'>
        <div className='relative w-64 h-64 md:w-80 md:h-80'>
          {/* Globe wireframe */}
          <svg viewBox='0 0 320 320' className='w-full h-full'>
            {/* Outer circle */}
            <circle
              cx='160'
              cy='160'
              r='140'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.6'
            />

            {/* Longitude lines */}
            <ellipse
              cx='160'
              cy='160'
              rx='140'
              ry='70'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />
            <ellipse
              cx='160'
              cy='160'
              rx='140'
              ry='105'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />
            <ellipse
              cx='160'
              cy='160'
              rx='105'
              ry='140'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />
            <ellipse
              cx='160'
              cy='160'
              rx='70'
              ry='140'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />

            {/* Latitude lines */}
            <line
              x1='20'
              y1='160'
              x2='300'
              y2='160'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />
            <ellipse
              cx='160'
              cy='160'
              rx='120'
              ry='40'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />
            <ellipse
              cx='160'
              cy='160'
              rx='120'
              ry='80'
              fill='none'
              stroke='rgb(75, 85, 99)'
              strokeWidth='1'
              opacity='0.4'
            />

            {/* Edge nodes */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const x = 160 + 130 * Math.cos(angle)
              const y = 160 + 130 * Math.sin(angle)
              return (
                <g key={i}>
                  <line
                    x1='160'
                    y1='160'
                    x2={x}
                    y2={y}
                    stroke='rgb(59, 130, 246)'
                    strokeWidth='1'
                    opacity='0.6'
                  />
                  <circle cx={x} cy={y} r='3' fill='rgb(59, 130, 246)' />
                </g>
              )
            })}

            {/* Center point */}
            <circle cx='160' cy='160' r='4' fill='rgb(59, 130, 246)' />
          </svg>
        </div>
      </div>
    </div>
  )
}
