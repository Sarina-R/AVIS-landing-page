import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Adaptable and simple',
    description:
      'Unlike opinionated, purpose-built, or legacy project management software, Plane helps you along your unique paths to progress. Instead of asking you to adapt to the software, Plane adapts to how you work best.',
  },
  {
    title: 'Secure and reliable',
    description:
      'Built with enterprise-grade security and modern infrastructure, Plane ensures your data is safe and accessible anytime, anywhere.',
  },
  {
    title: 'Collaborative and insightful',
    description:
      'Facilitate team alignment with real-time collaboration and analytics that drive actionable insights and shared understanding.',
  },
]

export default function SliderComponent() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % services.length)
  const prev = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length)

  return (
    <section className='relative bg-black text-white py-20 px-6 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold mb-4'>Why Plane</h2>
        <p className='text-sm text-white/70 mb-16 max-w-3xl'>
          Plane is project + knowledge management software that's a force
          multiplier for your existing workflows, methodologies, and best
          practices.
        </p>

        <div className='relative flex items-center gap-8 overflow-hidden'>
          {/* Previous Slide Preview */}
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative shrink-0 transition-all duration-500 ${
                i === index
                  ? 'w-[80%] scale-100 z-10'
                  : 'w-[10%] scale-95 opacity-20'
              } rounded-3xl border border-white/10 bg-gradient-to-b from-[#2F2F36] to-[#29292D] p-10 h-[360px] flex items-center`}
            >
              {/* Cartoon Number Style SVG */}
              <svg
                viewBox='0 0 300 300'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute left-4 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px]'
              >
                <path
                  d='M150 0 L180 20 L150 40 L120 20 Z'
                  fill='black'
                  opacity='0.05'
                />
                <text
                  x='50%'
                  y='50%'
                  dominantBaseline='middle'
                  textAnchor='middle'
                  fontSize='220'
                  fontWeight='800'
                  fill='white'
                  className='font-mono opacity-10'
                >
                  {i + 1}
                </text>
              </svg>

              {i === index && (
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='relative z-10 ml-[200px]'
                  >
                    <h3 className='text-4xl font-semibold mb-4 tracking-tight leading-snug'>
                      {service.title}
                    </h3>
                    <p className='text-sm text-white/70 max-w-xl leading-relaxed'>
                      {service.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* Arrow buttons */}
          <div className='absolute top-6 right-6 flex gap-4 z-20'>
            <button
              onClick={prev}
              className='w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition'
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button
              onClick={next}
              className='w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition'
            >
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
