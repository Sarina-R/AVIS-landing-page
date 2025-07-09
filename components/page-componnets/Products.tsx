'use client'

import Image from 'next/image'

const ProductsComponent: React.FC = () => {
  const featureGroups = [
    [
      { text: 'Object Manipulation' },
      { text: 'Customizable Scene' },
      { text: 'ROS Integration' },
      { text: 'Data Plotting' },
      { text: 'Advanced Sensors' },
    ],
    [
      { text: 'AVIS Magazine' },
      { text: 'AVIS Challenge' },
      { text: 'AVIS Community' },
      { text: 'AVIS Tutorials' },
      { text: 'AVIS Plus +' },
      { text: 'AVIS Conference' },
    ],
    [
      { text: 'API for Python' },
      { text: 'API for C++' },
      { text: 'API for Matlab' },
      { text: 'API for Java' },
      { text: 'API for C#' },
      { text: 'Blazing Fast' },
      { text: 'Open Doc' },
      { text: 'Easy Syntax' },
    ],
  ]

  return (
    <div className=' my-26'>
      <div className='md:min-h-[75vh] min-h-screen flex items-center justify-center p-4 font-bold md:mb-auto'>
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

      <div className='space-y-6 pb-40 md:pt-0 pt-20  flex items-center flex-col'>
        {featureGroups.map((group, index) => (
          <div key={index} className='w-full max-w-3xl overflow-hidden'>
            <div className='flex animate-infinite-scroll'>
              {[...group, ...group].map((feature, i) => (
                <div
                  key={`${index}-${i}`}
                  className='flex items-center gap-2 bg-primary/15 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 hover:bg-primary/20 transition-colors mx-2 flex-shrink-0'
                >
                  <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-4 h-4 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </div>
                  <span className='text-sm font-medium whitespace-pre-line text-gray-200'>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-infinite-scroll {
          display: flex;
          animation: scroll 50s linear infinite;
          width: max-content;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default ProductsComponent
