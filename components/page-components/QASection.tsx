import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const QASection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index)
  }

  const qaData = [
    {
      question: 'What operating systems does AVIS Engine support?',
      answer: `Currently, AVIS Engine is cross-platform and supports macOS, Linux, Windows and Web and is actively maintained to give a seamless experience on all of them.`,
    },
    {
      question: 'What is the minimum hardware requirement?',
      answer: `We aimed to build AVIS Engine as performant and lightweight as possible. Here are the spec required:
      CPU: Intel Core i3 4950U
      GPU: Intel Iris 6100 1.5G VRAM
      RAM: 4GB`,
    },
    {
      question: 'What knowledge is required to get started?',
      answer: `The software itself is easy to use and get started, but a basic understanding of Python programming language is required.
      Also you can use other APIs in C++, MATLAB, etc. as you wish.`,
    },
    {
      question: 'What are the resources to learn AVIS Engine?',
      answer: `AVIS is launching an online educational portal where you can explore courses not only about AVIS Engine, but also about all the other topics in AI, Electronics, Mechanics, Control, etc.`,
    },
  ]

  return (
    <div className='min-h-screen'>
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-16'>
        {/* Header Section */}
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16'>
          <div className='lg:w-1/2'>
            <h1 className='text-5xl lg:text-7xl font-bold mb-6 leading-tight'>
              Have any{' '}
              <span className='bg-gradient-to-r from-red-300 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                question?
              </span>{' '}
              <span className='bg-gradient-to-r from-pink-400 via-red-500 to-pink-300 bg-clip-text text-transparent'>
                Find answer here.
              </span>
            </h1>
            <p className='text-gray-400 text-lg'>
              Some frequently asked questions about AVIS Engine.
            </p>
          </div>

          {/* Q&A Items */}
          <div className='lg:w-1/2 space-y-4'>
            {qaData.map((item, index) => (
              <div
                key={index}
                className='rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50'
              >
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-6 text-left flex items-center justify-between bg-primary/20 hover:bg-primary/30 transition-colors duration-200'
                >
                  <span className='text-lg font-medium text-white pr-4'>
                    {item.question}
                  </span>
                  <div className='flex-shrink-0'>
                    {openIndex === index ? (
                      <ChevronUp className='w-6 h-6 text-primary' />
                    ) : (
                      <ChevronDown className='w-6 h-6 text-gray-400' />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-6 pb-6'>
                    <div className='h-px bg-gradient-to-r from-accent/50 via-primary/50 to-transparent mb-4'></div>
                    <p className='text-gray-300 leading-relaxed'>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />
      </div>
    </div>
  )
}

export default QASection
