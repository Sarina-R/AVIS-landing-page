export const VercelFirewall = () => {
  return (
    <div className='bg-black p-6 md:p-8 lg:p-10 border border-white/10 flex flex-col h-full'>
      <div className='flex items-center mb-4'>
        <div className='w-5 h-5 mr-3 flex items-center justify-center'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-4 h-4 text-gray-400'
          >
            <path
              d='M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z'
              stroke='currentColor'
              strokeWidth='1.5'
            />
          </svg>
        </div>
        <h2 className='text-lg font-medium'>Vercel Firewall</h2>
      </div>

      <div className='mb-8 flex-1'>
        <p className='text-base font-medium mb-2'>
          <span className='font-bold'>Edge-localized protection.</span>{' '}
          <span className='text-gray-400'>
            L3/L4 protection at every edge location. Your site stays protected
            without adding latency.
          </span>
        </p>
      </div>

      {/* Protection visualization */}
      <div className='space-y-6'>
        {/* Top row of shields */}
        <div className='flex justify-center space-x-8 md:space-x-12'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className='flex flex-col items-center'>
              <div
                className={`w-6 h-8 rounded-sm ${
                  i === 3 ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Protection types */}
        <div className='bg-black border border-white/20 rounded-lg p-4'>
          <div className='grid grid-cols-3 gap-4 text-center'>
            <div className='space-y-2'>
              <div className='w-8 h-8 mx-auto flex items-center justify-center'>
                <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
                  <path
                    d='M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
              <div className='text-xs text-gray-400'>L3/L4 DDoS</div>
              <div className='w-full h-2 bg-red-500 rounded'></div>
              <div className='text-xs'>Protection</div>
            </div>

            <div className='space-y-2'>
              <div className='w-8 h-8 mx-auto flex items-center justify-center'>
                <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
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
              <div className='text-xs text-gray-400'>Global L7</div>
              <div className='w-full h-2 bg-green-500 rounded'></div>
              <div className='text-xs'>Firewall</div>
            </div>

            <div className='space-y-2'>
              <div className='w-8 h-8 mx-auto flex items-center justify-center'>
                <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
                  <path
                    d='M12 8V4L16 8L12 12V8ZM8 16V20L4 16L8 12V16Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
              <div className='text-xs text-gray-400'>Bot</div>
              <div className='w-full h-2 bg-red-500 rounded'></div>
              <div className='text-xs'>Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
