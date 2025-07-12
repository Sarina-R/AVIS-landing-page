import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface NumberTickerProps {
  targetValue: number
  suffix?: string
  isVisible: boolean
}

export default function StatsSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const stats = [
    { value: '∞', label: 'Possibilities', isNumber: false },
    { value: 92, label: 'Satisfaction', suffix: '%', isNumber: true },
    { value: 40, label: 'Revenue Target', suffix: '%', isNumber: true },
    { value: 25, label: 'Countries', suffix: '+', isNumber: true },
  ]

  const NumberTicker = ({
    targetValue,
    suffix = '',
    isVisible,
  }: NumberTickerProps) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const stepValue = targetValue / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setValue(Math.min(Math.round(stepValue * currentStep), targetValue))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [targetValue, isVisible])

    return (
      <span>
        {value}
        {suffix}
      </span>
    )
  }

  return (
    <section className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              // @ts-ignore
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className='relative group cursor-pointer'
            >
              <motion.div
                className={`p-8 border transition-all duration-300 ${
                  activeIndex === i
                    ? 'border-accent bg-[#650d14]/5'
                    : 'border-neutral-500/20 hover:border-neutral-500/40'
                }`}
                whileHover={{ y: -2 }}
              >
                <div className='text-center'>
                  <motion.div
                    className={`text-3xl font-light mb-2 transition-colors duration-300 ${
                      activeIndex === i ? 'text-accent' : ''
                    }`}
                  >
                    {stat.isNumber ? (
                      <NumberTicker
                        targetValue={stat.value as number}
                        suffix={stat.suffix}
                        isVisible={true}
                      />
                    ) : (
                      stat.value
                    )}
                  </motion.div>
                  <div className='text-xs uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </div>

                <motion.div
                  className='absolute bottom-0 left-0 h-0.5 bg-accent'
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex === i ? '100%' : '0%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
