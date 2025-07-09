'use client'

import Image from 'next/image'

const ProductsComponent: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 font-bold md:mb-auto mb-80'>
      <div className='relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4'>
        {/* Product Labels - Top for small, sides for md+ */}
        <div className='flex flex-col md:absolute md:top-0 md:left-0 text-center space-y-4 md:space-y-0 md:space-x-0 md:pl-4 md:py-4 z-20'>
          <div className='md:absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:top-4 md:left-16'>
            AVIS Magazine
          </div>
        </div>

        <div className='flex flex-col md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 text-center space-y-4 z-20'>
          <div className='md:absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:left-16'>
            AVIS Community
          </div>
        </div>

        <div className='flex flex-col md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 text-center space-y-4 z-20'>
          <div className='md:absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:right-16'>
            AVIS Tutorials
          </div>
        </div>

        <div className='flex flex-col md:absolute md:bottom-0 md:left-0 text-center space-y-4 md:pl-4 md:pb-4 z-20'>
          <div className='absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:bottom-4 md:left-16 right-[30%] product-bottom-label -bottom-44'>
            AVIS Plus +
          </div>
        </div>

        <div className='flex flex-col md:absolute md:bottom-0 md:right-0 text-center space-y-4 md:pr-4 md:pb-4 z-20'>
          <div className='absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:bottom-4 md:right-16 right-[30%] product-bottom-label -bottom-32'>
            AVIS Conference
          </div>
        </div>

        <div className='flex flex-col md:absolute md:top-12 md:right-0 text-center space-y-4 md:pr-4 md:pb-4 z-20'>
          <div className='absolute w-40 h-9 bg-primary/15 backdrop-blur-sm rounded-lg pt-1 shadow-lg border border-white/20 hover:bg-primary/15 transition-colors md:bottom-4 -bottom-20 right-[30%] product-bottom-label md:right-16'>
            AVIS Challenge
          </div>
        </div>

        {/* Central Image with shadow */}
        <div className='relative w-72 h-72 md:w-96 md:h-96 z-10'>
          <Image
            src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/procuts.svg'
            alt='AVIS Engine Logo'
            fill
            className='hidden md:block object-contain'
            priority
          />
          <Image
            src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/picsvg_download.svg'
            alt='AVIS Engine Logo'
            fill
            className='block md:hidden object-contain'
            priority
          />
        </div>

        {/* Mobile stacked labels */}
        {/* <div className='md:hidden text-sm font-medium flex flex-wrap justify-center gap-2 pt-4'>
          <span>AVIS Magazine</span>
          <span>AVIS Challenge</span>
          <span>AVIS Community</span>
        </div> */}
        {/* <div className='md:hidden absolute -bottom-36 text-sm font-medium flex flex-wrap justify-center gap-2 pt-4'>
          <span>AVIS Tutorials</span>
          <span>AVIS Plus +</span>
          <span>AVIS Conference</span>
        </div> */}
      </div>
    </div>
  )
}

export default ProductsComponent
