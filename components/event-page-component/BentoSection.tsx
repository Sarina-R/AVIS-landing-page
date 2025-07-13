import { motion } from 'framer-motion'
import {
  FileTextIcon,
  Timer,
  GlobeIcon,
  CalendarIcon,
  BellIcon,
  ArrowRight,
} from 'lucide-react'
import { Button } from '../ui/button'

interface BentoCardProps {
  name: string
  className: string
  background: React.ReactNode
  Icon: React.ComponentType<{ className?: string }>
  description: string
  href: string
  cta: string
}

function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-black border border-red-600/20 [box-shadow:0_-20px_80px_-20px_#ef444440_inset] ${className}`}
    >
      <div>{background}</div>
      <div className='pointer-events-none z-10 flex flex-col gap-1 p-6 transition-transform duration-300 group-hover:-translate-y-10'>
        <Icon className='h-12 w-12 text-red-500 transition-transform duration-300 group-hover:scale-75' />
        <h3 className='text-xl font-semibold text-white'>{name}</h3>
        <p className='max-w-lg text-gray-400'>{description}</p>
      </div>
      <div className='pointer-events-none absolute bottom-0 w-full translate-y-10 flex items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
        <Button
          variant='ghost'
          size='sm'
          className='pointer-events-auto text-red-500 hover:text-white'
        >
          <a href={href} className='flex items-center gap-2'>
            {cta} <ArrowRight className='h-4 w-4' />
          </a>
        </Button>
      </div>
      <div className='pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-red-600/10' />
    </div>
  )
}

export default function BentoGridSection() {
  const features = [
    {
      Icon: FileTextIcon,
      name: 'Documentation',
      description: 'Comprehensive docs for all our tools and APIs.',
      href: '/',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]' />
        </div>
      ),
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      Icon: Timer,
      name: 'API Access',
      description: 'Powerful APIs to integrate with your applications.',
      href: '/',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-red-600/20 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.15),transparent_60%)]' />
        </div>
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      Icon: GlobeIcon,
      name: 'Global CDN',
      description: 'Lightning-fast content delivery worldwide.',
      href: '/',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-red-700/20 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(239,68,68,0.1),transparent_50%)]' />
        </div>
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      Icon: CalendarIcon,
      name: 'Analytics',
      description: 'Real-time insights and performance metrics.',
      href: '/',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-red-800/20 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.12),transparent_65%)]' />
        </div>
      ),
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      Icon: BellIcon,
      name: 'Notifications',
      description: 'Stay updated with real-time alerts and updates.',
      href: '/',
      cta: 'Learn more',
      background: (
        <div className='absolute inset-0 bg-gradient-to-br from-red-900/20 to-black'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.08),transparent_70%)]' />
        </div>
      ),
      className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ]

  return (
    <section className='py-24 px-4 bg-black'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-light mb-4'>Our Features</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Discover the powerful tools and services that make our platform
            unique.
          </p>
        </motion.div>
        <div className='grid w-full auto-rows-[22rem] grid-cols-1 lg:grid-cols-3 gap-4 lg:grid-rows-3'>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
