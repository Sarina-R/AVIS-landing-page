export const Navigation = () => (
  <nav className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10'>
    <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
      <div className='flex items-center space-x-8'>
        <img
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
          alt='Avis Events'
          className='h-8'
        />
        <div className='hidden md:flex space-x-6'>
          <a
            href='#services'
            className='text-neutral-300 hover:text-white transition-colors text-sm'
          >
            Services
          </a>
          <a
            href='#about'
            className='text-neutral-300 hover:text-white transition-colors text-sm'
          >
            About
          </a>
          <a
            href='#portfolio'
            className='text-neutral-300 hover:text-white transition-colors text-sm'
          >
            Portfolio
          </a>
          <a
            href='#contact'
            className='text-neutral-300 hover:text-white transition-colors text-sm'
          >
            Contact
          </a>
        </div>
      </div>
      <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors'>
        Get Started
      </button>
    </div>
  </nav>
)
