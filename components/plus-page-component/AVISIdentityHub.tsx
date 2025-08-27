export const AVISIdentityHub = () => {
  return (
    <div className='bg-black/50 p-6 md:p-8 lg:p-10 border border-white/10 flex flex-col h-full backdrop-blur-xl'>
      {/* Header */}
      <div className='flex items-center mb-6'>
        <div className='w-5 h-5 mr-3 flex items-center justify-center'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-4 h-4 text-gray-400'
            aria-hidden='true'
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
        <h2 className='text-lg font-medium text-white/90'>AVIS Identity Hub</h2>
      </div>

      {/* Description */}
      <div className='mb-12 flex-1'>
        <p className='text-base font-medium mb-2'>
          <span className='font-bold text-white/90'>Single Sign-On.</span>{' '}
          <span className='text-gray-400'>
            Access all AVIS platforms with one unified identity, streamlining
            your experience across Engine, Event, and Community.
          </span>
        </p>
      </div>

      <div className='w-full'>
        {/* User 1 Flow */}
        <div className='flex items-center space-x-6 justify-between'>
          <div className='bg-white/95 shadow-sm rounded-md px-4 py-2 min-w-[80px] text-center'>
            <span className='text-black font-medium text-sm'>User 1</span>
          </div>
          <div className='w-1.5 h-1.5 bg-white/20 rounded-full'></div>
          <div className='w-1.5 h-1.5 bg-white/20 rounded-full'></div>
          <div className='flex items-center space-x-3 bg-zinc-900/90 border border-white/[0.08] px-4 py-2.5 rounded-lg shadow-lg mr-8 sm:mr-4'>
            <svg
              className='w-5 h-5 text-white/80'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </svg>
            <span className='text-white/90 text-sm font-medium'>
              Identity Cache
            </span>
            <span className='bg-orange-500/[0.15] text-orange-400 px-2 py-0.5 rounded-md text-xs font-semibold'>
              Old
            </span>
          </div>
        </div>

        {/* Trigger Flow */}
        <div className='flex flex-col items-end'>
          <div className='relative right-28 h-8 border-l border-zinc-800/80'></div>

          <div className='flex items-center justify-end mr-12 w-full'>
            <div className='bg-zinc-800/80 px-4 py-1 rounded-xl shadow-sm backdrop-blur-sm'>
              <span className='text-zinc-400 text-xs'>Login or Update</span>
            </div>
          </div>
          <div className='relative right-28 h-8 border-l border-zinc-800/80'></div>
          <div className='bg-zinc-800/80 px-4 py-1 rounded-xl shadow-sm backdrop-blur-sm'>
            <span className='text-zinc-400 text-xs'>
              Sync identity + update cache
            </span>
          </div>
          <div className='relative right-28 h-8 border-l border-zinc-800/80'></div>
        </div>

        {/* User 2 Flow */}
        <div className='flex items-center space-x-6 justify-between'>
          <div className='bg-white/95 shadow-sm rounded-md px-4 py-2 min-w-[80px] text-center'>
            <span className='text-black font-medium text-sm'>User 2</span>
          </div>
          <div className='w-1.5 h-1.5 bg-white/20 rounded-full sm:block hidden'></div>
          <div className='w-1.5 h-1.5 bg-white/20 rounded-full sm:block hidden'></div>
          <div className='flex items-center space-x-3 bg-zinc-900/90 border border-white/[0.08] px-4 py-2.5 rounded-lg shadow-lg sm:mr-3'>
            <svg
              className='w-5 h-5 text-white/80'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </svg>
            <span className='text-white/90 text-sm font-medium'>
              Identity Cache
            </span>
            <span className='bg-yellow-500/[0.15] text-yellow-400 px-2 py-0.5 rounded-md text-xs font-semibold'>
              New
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
