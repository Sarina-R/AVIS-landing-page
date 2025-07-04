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
    title: 'Cloud + self-hosted',
    description:
      'Similar to popular alternatives, Plane is available on our cloud powered by AWS. Dissimilar from those alternatives, Plane is available to install on your infra within outright controls that work for your company and industry.',
  },
]

export default function SliderComponent() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % services.length)
  const prev = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length)

  return (
    <section className='relative bg-black text-white w-full overflow-hidden'>
      <div className='px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-12 lg:mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0 tracking-tight'>
              Why Plane
            </h2>
            <div className='flex gap-3 sm:gap-4'>
              <button
                onClick={prev}
                className='w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 rounded-full border border-white/30 lg:border-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50'
                aria-label='Previous slide'
              >
                <ArrowLeft className='w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5' />
              </button>
              <button
                onClick={next}
                className='w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 rounded-full border border-white/30 lg:border-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50'
                aria-label='Next slide'
              >
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5' />
              </button>
            </div>
          </div>

          {/* Subtitle */}
          <p className='text-sm sm:text-base lg:text-sm text-white/70 mb-8 sm:mb-12 lg:mb-16 max-w-4xl lg:max-w-3xl leading-relaxed'>
            Plane is project + knowledge management software that's a force
            multiplier for your existing workflows, methodologies, and best
            practices.
          </p>

          {/* Mobile Slider */}
          <div className='block lg:hidden'>
            <div className='relative bg-gradient-to-b from-[#2F2F36] to-[#29292D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] flex items-center justify-center border border-white/10'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className='text-center max-w-sm'
                >
                  <div className='mb-4 text-white/30 text-xl sm:text-2xl font-bold'>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className='text-xl sm:text-2xl font-semibold mb-4 tracking-tight leading-tight'>
                    {services[index].title}
                  </h3>
                  <p className='text-sm sm:text-base text-white/70 leading-relaxed'>
                    {services[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Indicators */}
            <div className='flex justify-center gap-2 mt-6'>
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-white scale-125' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Slider - Original Design */}
          <div className='hidden lg:block'>
            <div className='relative flex flex-row items-center gap-0 md:gap-4 overflow-hidden'>
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`relative shrink-0 transition-all duration-500 ${
                    i === index
                      ? 'w-[90%] md:w-[80%] scale-100 z-10'
                      : 'w-[10%] md:w-[10%] scale-95 opacity-20'
                  } rounded-3xl bg-gradient-to-b from-[#2F2F36] to-[#29292D] p-10 h-[360px] flex items-center ${
                    i === 0
                      ? 'border-l-2 border-t-2 border-b-2 border-white/10'
                      : i === 1
                      ? 'border-0'
                      : 'border-r-2 border-t-2 border-b-2 border-white/10'
                  }`}
                >
                  <img
                    src={
                      i === 0
                        ? 'https://images.plane.so/home/why-plane/numbers/1-dark.svg'
                        : i === 1
                        ? 'https://images.plane.so/home/why-plane/numbers/2-dark.svg'
                        : 'https://images.plane.so/home/why-plane/numbers/3-dark.svg'
                    }
                    alt={`${i + 1}`}
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 w-[200px] h-[200px] opacity hidden md:block'
                  />

                  {i === index && (
                    <AnimatePresence mode='wait'>
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='relative z-10 w-full md:ml-[200px] flex justify-center md:justify-start'
                      >
                        <div className='max-w-xl'>
                          <h3 className='text-4xl font-semibold mb-4 tracking-tight leading-snug'>
                            {service.title}
                          </h3>
                          <p className='text-sm text-white/70 leading-relaxed'>
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
