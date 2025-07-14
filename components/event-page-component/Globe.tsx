export const Globe = () => (
  <div className='relative w-64 h-64 mx-auto'>
    <div className='absolute inset-0 rounded-full border-2 border-white-500/30 animate-spin-slow'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white-500/20'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white-500/10'></div>

      <div className='absolute top-4 left-8 w-2 h-2 white rounded-full animate-pulse'></div>
      <div
        className='absolute top-12 right-6 w-2 h-2 white rounded-full animate-pulse'
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div
        className='absolute bottom-8 left-12 w-2 h-2 white rounded-full animate-pulse'
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className='absolute bottom-4 right-8 w-2 h-2 white rounded-full animate-pulse'
        style={{ animationDelay: '1.5s' }}
      ></div>
    </div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <Globe />
    </div>
  </div>
)
