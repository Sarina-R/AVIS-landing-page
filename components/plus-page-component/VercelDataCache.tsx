export const VercelDataCache = () => {
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
              d='M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H5C3.89543 7 3 7.89543 3 7Z'
              stroke='currentColor'
              strokeWidth='1.5'
            />
            <path
              d='M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7'
              stroke='currentColor'
              strokeWidth='1.5'
            />
          </svg>
        </div>
        <h2 className='text-lg font-medium'>Vercel Data Cache</h2>
      </div>

      <div className='mb-8 flex-1'>
        <p className='text-base font-medium mb-2'>
          <span className='font-bold'>Total control.</span>{' '}
          <span className='text-gray-400'>
            Regenerate pages or cache function responses on demand, improving
            performance and reducing backend load.
          </span>
        </p>
      </div>

      <div className='space-y-4'>
        {/* User 1 Flow */}
        <div className='flex items-center space-x-3 text-sm'>
          <div className='bg-white/10 px-3 py-1.5 rounded-md font-medium'>
            User 1
          </div>
          <div className='w-3 h-3 bg-white/20 rounded-sm'></div>
          <div className='w-3 h-3 bg-white/20 rounded-sm'></div>
          <div className='flex items-center space-x-2 bg-black border border-white/20 px-3 py-2 rounded-md'>
            <div className='w-4 h-4'>
              <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
                <path
                  d='M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <span className=''>Page Cache</span>
            <span className='bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded text-xs font-medium'>
              Old
            </span>
          </div>
        </div>

        {/* Trigger Flow */}
        <div className='flex items-center justify-center'>
          <div className='bg-gray-700 px-4 py-2 rounded-md text-gray-300 text-sm'>
            Trigger or interval
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='bg-gray-700 px-4 py-2 rounded-md text-gray-300 text-sm'>
            Regenerate page + update cache
          </div>
        </div>

        {/* User 2 Flow */}
        <div className='flex items-center space-x-3 text-sm'>
          <div className='bg-white/10 px-3 py-1.5 rounded-md font-medium'>
            User 2
          </div>
          <div className='w-3 h-3 bg-white/20 rounded-sm'></div>
          <div className='w-3 h-3 bg-white/20 rounded-sm'></div>
          <div className='flex items-center space-x-2 bg-black border border-white/20 px-3 py-2 rounded-md'>
            <div className='w-4 h-4'>
              <svg viewBox='0 0 24 24' fill='none' className='w-full h-full'>
                <path
                  d='M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <span className=''>Page Cache</span>
            <span className='bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded text-xs font-medium'>
              New
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
