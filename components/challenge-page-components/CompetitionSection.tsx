import { FC, useRef } from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Trophy, Award, Users } from 'lucide-react'
import { TrophySVG } from './TrophySVG'
import { useInView } from 'framer-motion'

interface Competition {
  title: string
  participants: string
  icon: any
  status: 'live' | 'upcoming' | 'finished'
}

interface Stat {
  value: string
  label: string
  icon?: any
}

export const CompetitionSection: FC = () => {
  const competitions: Competition[] = [
    { title: 'Code Sprint', participants: '2.4K', icon: Zap, status: 'live' },
    {
      title: 'Design Battle',
      participants: '1.8K',
      icon: Target,
      status: 'upcoming',
    },
    {
      title: 'Innovation Cup',
      participants: '3.2K',
      icon: Trophy,
      status: 'live',
    },
    {
      title: 'Algorithm Race',
      participants: '1.5K',
      icon: Award,
      status: 'finished',
    },
    {
      title: 'UI Challenge',
      participants: '2.1K',
      icon: Users,
      status: 'live',
    },
    {
      title: 'Speed Coding',
      participants: '900',
      icon: Zap,
      status: 'upcoming',
    },
  ]

  const stats: Stat[] = [
    { value: '10K+', label: 'Active Competitors', icon: Users },
    { value: '150+', label: 'Challenges', icon: Target },
    { value: '50+', label: 'Awards Given', icon: Award },
    // { value: '25', label: 'Categories', icon: Trophy },
  ]

  return (
    <>
      {/* Stats Section */}
      <section className=''>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-3 mb-20'>
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Competitions */}
      <section className='py-20 /10'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, repeat: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text'>
              Live Competitions
            </h2>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Join ongoing challenges and compete with the best
            </p>
          </motion.div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {competitions.map((comp, i) => (
              <CompetitionCard key={i} {...comp} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface CompetitionCardProps {
  title: string
  participants: string
  icon: any
  delay: number
  status: 'live' | 'upcoming' | 'finished'
}

const CompetitionCard: FC<CompetitionCardProps> = ({
  title,
  participants,
  icon: Icon,
  delay,
  status,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const statusColors = {
    live: 'text-green-400 border-green-400',
    upcoming: 'text-yellow-400 border-yellow-400',
    finished: 'text-gray-400 border-gray-400',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className='bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer'
    >
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-white/10 group-hover:bg-blue-500/30 transition-colors'>
            <Icon className='w-6 h-6 text-blue-400' />
          </div>
          <div>
            <h3 className='text-xl font-semibold text-white group-hover:text-blue-300 transition-colors'>
              {title}
            </h3>
            <p className='text-gray-400'>{participants} participants</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 text-xs border rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex -space-x-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-gray-900'
            />
          ))}
          <div className='w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs text-gray-300'>
            +{Math.floor(Math.random() * 50)}
          </div>
        </div>
        <TrophySVG className='w-8 h-8' />
      </div>
    </motion.div>
  )
}

interface StatCardProps {
  value: string
  label: string
  delay: number
  icon?: any
}

const StatCard: FC<StatCardProps> = ({ value, label, delay, icon: Icon }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className='text-center p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300'
    >
      {Icon && (
        <div className='inline-block mb-3'>
          <Icon className='w-8 h-8 text-blue-400 mx-auto' />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className='text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2'
      >
        {value}
      </motion.div>
      <div className='text-gray-400'>{label}</div>
    </motion.div>
  )
}
