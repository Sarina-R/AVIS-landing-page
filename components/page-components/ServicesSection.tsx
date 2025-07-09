import { Code, Palette, Star, Target } from 'lucide-react'
import { HolographicText } from '../HolographicText'
import { ModernCard } from '../ModernCard'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'AVIS Soft',
      description:
        'Revolutionary event management through quantum-level analytics and global payment orchestration.',
      tags: ['Analytics', 'Multi-lang', 'Global Pay'],
      gradient: 'from-primary/20 to-accent/20', // Using primary #650d14 and accent #D14975
    },
    {
      icon: Palette,
      title: 'Digital Agency',
      description:
        'Viral campaigns that transcend digital boundaries with immersive brand experiences.',
      tags: ['Viral Content', 'Interactive', 'Modern Stack'],
      gradient: 'from-secondary/20 to-accent/20', // Using secondary #43080d and accent #D14975
    },
    {
      icon: Target,
      title: 'Global Expansion',
      description:
        'Strategic penetration across UAE, Saudi Arabia, Turkey, and European markets.',
      tags: ['Middle East', 'Europe', 'Subscription'],
      gradient: 'from-primary-lighter/20 to-accent/20', // Using primary-lighter #8B1A25 and accent #D14975
    },
  ]

  return (
    <section id='services' className='py-32 px-6 relative'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            Quantum{' '}
            <HolographicText className='font-light'>Services</HolographicText>
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, i) => (
            <ModernCard key={service.title} delay={0.1 * (i + 1)}>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className='w-8 h-8 text-accent' />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Star className='w-4 h-4 text-muted' />
                  </motion.div>
                </div>
                <h3 className='text-2xl font-light'>{service.title}</h3>
                <p className='text-muted leading-relaxed'>
                  {service.description}
                </p>
                <div className='flex flex-wrap gap-2 pt-4'>
                  {service.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className='px-3 py-1 text-xs bg-card rounded-full border border-border cursor-pointer'
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}
