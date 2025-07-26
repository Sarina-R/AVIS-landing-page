'use client'

import { Code, Users, BookOpen, Trophy, Sparkles, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import Workflow from './WorkflowAnimation'

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
    <div className='mb-36 mt-72'>
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

      <Workflow />

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
                  <span className='text-sm font-medium whitespace-pre-line text-neutral-200'>
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
