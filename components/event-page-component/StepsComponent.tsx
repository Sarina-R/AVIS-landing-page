import React, { useState } from 'react'
import { Package, Clock, Zap } from 'lucide-react'

const StepsComponent = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      icon: Package,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      title: 'Extract and prerender all static content.',
      description: 'Automatically get an optimized HTML page shell.',
      highlight: 'static',
    },
    {
      id: 2,
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      title: 'Prerender fallbacks of dynamic content.',
      description: 'Leave space in your app for data to flow in.',
      highlight: 'fallback',
    },
    {
      id: 3,
      icon: Zap,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500',
      title: 'Stream in your dynamic content.',
      description:
        'Personalize the experience. Define granular loading and error states.',
      highlight: 'dynamic',
    },
  ]

  const renderWebsite = () => {
    if (activeStep === 1) {
      return (
        <div className='h-[360px] rounded-lg p-4 border border-orange-500 border-dashed transition-all duration-500 ease-in-out'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-white text-sm font-semibold'>Acme®</div>
            <div className='flex space-x-4 text-neutral-400 text-xs'>
              <span>Shop All</span>
              <span>Apparel</span>
              <span>Sale</span>
            </div>
          </div>
          <div className='h-72 bg-black border border-white/10 rounded '></div>
        </div>
      )
    }

    if (activeStep === 2) {
      return (
        <div className='h-[360px] rounded-lg p-4 border border-blue-500 border-dashed transition-all duration-500 ease-in-out'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-white text-sm font-semibold'>Acme®</div>
            <div className='flex space-x-4 text-neutral-400 text-xs'>
              <span>Shop All</span>
              <span>Apparel</span>
              <span>Sale</span>
            </div>
            <div className='flex items-center space-x-1'>
              <div className='w-4 h-4 bg-blue-600/30 rounded flex items-center justify-center'>
                <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
              </div>
              <div className='w-4 h-4 bg-blue-600/30 rounded-full'></div>
            </div>
          </div>

          <div className='mb-6'>
            <div className='h-16 bg-blue-600/30 border border-dashed border-blue-600 rounded mb-4 flex items-center justify-center transition-all duration-300'>
              <div className='bg-blue-500 text-white text-xs px-1 py-0.5 rounded'>
                &lt;Suspense&gt;
              </div>
            </div>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-neutral-400 text-xs'>
                Welcome to the Acme store, your one-stop destination for all
                your online shopping needs.
              </p>
              <button className='bg-black border border-white/10 text-white px-2 py-1 rounded text-xs hover:border-white/20 transition-colors duration-200'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3'>
            {['Hoodie', 'Cap', 'Mug'].map((item, index) => {
              const prices = ['$45', '$30', '$15']
              return (
                <div
                  key={item}
                  className='bg-black border border-white/10 rounded-lg p-3 text-center transition-all duration-200 hover:border-white/20'
                >
                  <div className='w-full h-20 bg-black border border-white/10 rounded mb-2'></div>
                  <div className='text-white text-xs font-medium'>{item}</div>
                  <div className='text-neutral-400 text-xs'>
                    {prices[index]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    if (activeStep === 3) {
      return (
        <div className='h-[360px] border rounded-lg p-4 border-teal-500 border-dashed transition-all duration-500 ease-in-out'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-white text-sm font-semibold'>Acme®</div>
            <div className='flex space-x-4 text-neutral-400 text-xs'>
              <span>Shop All</span>
              <span>Apparel</span>
              <span>Sale</span>
            </div>
            <div className='flex items-center space-x-1'>
              <div className='w-4 h-4 bg-teal-600/30 rounded flex items-center justify-center'>
                <div className='w-2 h-2 bg-white rounded-sm'></div>
              </div>
              <div className='w-4 h-4 bg-black border border-white/10 rounded-full'></div>
            </div>
          </div>

          <div className='mb-6'>
            <div className='bg-teal-600/30 border border-dashed border-teal-600 text-white p-3 rounded mb-4 h-16 flex items-center transition-all duration-300'>
              <span className='font-medium text-xs'>Welcome back, Rauno!</span>
            </div>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-neutral-400 text-xs'>
                Welcome to the Acme store, your one-stop destination for all
                your online shopping needs.
              </p>
              <button className='bg-black border border-white/10 text-white px-2 py-1 rounded text-xs hover:border-white/20 transition-colors duration-200'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3'>
            {['Hoodie', 'Cap', 'Mug'].map((item, index) => {
              const prices = ['$45', '$30', '$15']
              return (
                <div
                  key={item}
                  className='bg-black border border-white/10 rounded-lg p-3 text-center transition-all duration-200 hover:border-white/20'
                >
                  <div className='w-full h-20 bg-black border border-white/10 rounded mb-2'></div>
                  <div className='text-white text-xs font-medium'>{item}</div>
                  <div className='text-neutral-400 text-xs'>
                    {prices[index]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }

  return (
    <section className='px-4 py-3'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-light mb-2'>
            <span className='text-white font-semibold'>
              Partial prerendering.
            </span>
            <span className='text-neutral-400'>
              {' '}
              Ultra-quick static edge delivery with fully dynamic capabilities.
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 items-start'>
          {/* Left side - Website mockup */}
          <div className='order-2 md:order-1 col-span-3'>{renderWebsite()}</div>

          {/* Right side - Steps */}
          <div className='order-1 md:order-2 space-y-6 col-span-2'>
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === step.id

              return (
                <div key={step.id} className='relative'>
                  {/* Vertical line */}
                  {index < steps.length - 1 && (
                    <div className='absolute left-4 top-8 w-0.5 h-12 bg-black border border-white/10'></div>
                  )}

                  <div
                    className='flex items-start space-x-3 cursor-pointer group'
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                        isActive
                          ? step.bgColor + ' shadow-lg'
                          : 'bg-black border border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      <IconComponent
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-neutral-300'
                        }`}
                      />
                    </div>

                    <div className='flex-1 pt-0.5'>
                      <h3
                        className={`text-sm font-medium mb-1 transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-neutral-300'
                        }`}
                      >
                        <span
                          className={`font-semibold transition-colors duration-300 ${
                            isActive ? step.color : 'text-neutral-500'
                          }`}
                        >
                          {step.title.split('.')[0]}.
                        </span>
                        {step.title.includes('.') && (
                          <span className='text-neutral-400'>
                            {' '}
                            {step.title.split('.')[1]}
                          </span>
                        )}
                      </h3>
                      <p
                        className={`text-xs transition-all duration-300 ${
                          isActive
                            ? 'text-neutral-300'
                            : 'text-neutral-500 group-hover:text-neutral-400'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className='pt-4'>
              <div className='flex items-center space-x-2'>
                <button className='bg-black border border-white/10 text-white px-4 py-2 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-sm'>
                  Learn about PPR
                </button>
                <span className='bg-teal-600/30 text-white text-xs px-2 py-1 rounded-full'>
                  Experimental
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsComponent
