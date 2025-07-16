import React from 'react'

export const VercelEdgeNetwork: React.FC = () => {
  return (
    <div className='bg-black p-10 border border-white/10'>
      <div className='flex items-center mb-2'>
        <span className='text-gray-400 mr-2'>🌐</span>
        <h2 className='text-lg font-semibold'>Vercel Edge Network</h2>
      </div>
      <p className='text-sm mb-4'>
        Accelerate your delivery. Every request travels through private fiber to
        the nearest of hundreds of Edge locations.
      </p>
      <div className='flex justify-center'>
        <svg width='200' height='150' className='text-white'>
          <circle
            cx='100'
            cy='75'
            r='70'
            fill='none'
            stroke='currentColor'
            strokeWidth='1'
          />
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <g key={i}>
                <line
                  x1='100'
                  y1='75'
                  x2={100 + 70 * Math.cos(((i * 30 - 90) * Math.PI) / 180)}
                  y2={75 + 70 * Math.sin(((i * 30 - 90) * Math.PI) / 180)}
                  stroke='currentColor'
                  strokeWidth='1'
                />
                <circle
                  cx={100 + 70 * Math.cos(((i * 30 - 90) * Math.PI) / 180)}
                  cy={75 + 70 * Math.sin(((i * 30 - 90) * Math.PI) / 180)}
                  r='2'
                  fill='currentColor'
                />
              </g>
            ))}
        </svg>
      </div>
    </div>
  )
}
