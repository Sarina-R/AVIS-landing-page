'use client'

import Image from 'next/image'
import { Code, Users, BookOpen, Trophy, Sparkles, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'

const ProductsComponent: React.FC = () => {
  const featureGroups = [
    [
      { text: 'Object Manipulation', icon: Code },
      { text: 'Customizable Scene', icon: Code },
      { text: 'ROS Integration', icon: Code },
      { text: 'Data Plotting', icon: Code },
      { text: 'Advanced Sensors', icon: Code },
    ],
    [
      { text: 'AVIS Magazine', icon: BookOpen },
      { text: 'AVIS Challenge', icon: Trophy },
      { text: 'AVIS Community', icon: Users },
      { text: 'AVIS Tutorials', icon: BookOpen },
      { text: 'AVIS Plus +', icon: Sparkles },
      { text: 'AVIS Conference', icon: Globe },
    ],
    [
      { text: 'API for Python', icon: Code },
      { text: 'API for C++', icon: Code },
      { text: 'API for Matlab', icon: Code },
      { text: 'API for Java', icon: Code },
      { text: 'API for C#', icon: Code },
      { text: 'Blazing Fast', icon: Code },
      { text: 'Open Doc', icon: Code },
      { text: 'Easy Syntax', icon: Code },
    ],
  ]

  return (
    <div className='my-26'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative text-center '
      >
        <h2 className='text-5xl md:text-6xl font-thin mb-8'>
          More than just a{' '}
          <HolographicText className='font-light'>Software</HolographicText>
        </h2>
        <div className='w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto' />
        <p className='text-xl text-muted max-w-3xl mx-auto py-4'>
          Develop, Learn, Do Research!
        </p>
      </motion.div>

      <div className='md:min-h-[75vh] min-h-screen flex items-center justify-center p-4 font-bold md:mb-auto'>
        <div className='relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4'>
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
        </div>
      </div>

      <div className='space-y-6 pb-40 md:pt-0 pt-20 flex items-center flex-col'>
        {featureGroups.map((group, index) => (
          <div key={index} className='w-full max-w-3xl overflow-hidden'>
            <div
              className={`flex ${
                index === 1
                  ? 'animate-infinite-scroll-reverse'
                  : 'animate-infinite-scroll'
              }`}
            >
              {[...group, ...group].map((feature, i) => (
                <div
                  key={`${index}-${i}`}
                  className={`flex items-center gap-2 bg-primary/15 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 hover:bg-primary/20 transition-colors mx-2 flex-shrink-0 ${
                    index === 1 ? 'opacity-80' : ''
                  }`}
                >
                  <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                    <feature.icon className='w-4 h-4 text-white' />
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
        .animate-infinite-scroll-reverse {
          display: flex;
          animation: scroll-reverse 50s linear infinite;
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
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-infinite-scroll:hover,
        .animate-infinite-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default ProductsComponent
