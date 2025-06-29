import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    { value: '∞', label: 'Possibilities Unlocked' },
    { value: '92%', label: 'Client Satisfaction' },
    { value: '40%', label: 'Global Revenue Target' },
    { value: '25+', label: 'Countries Reached' },
  ]

  return (
    <section className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 20px 40px rgba(147,51,234,0.2)',
              }}
              className='text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl cursor-pointer'
            >
              <motion.div
                className='text-4xl md:text-5xl font-thin mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent'
                whileHover={{ scale: 1.2 }}
              >
                {stat.value}
              </motion.div>
              <div className='text-white/60 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
