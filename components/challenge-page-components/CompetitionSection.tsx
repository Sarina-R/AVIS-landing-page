import { FC, useRef } from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Trophy, Award, Users } from 'lucide-react'
import { useInView } from 'framer-motion'

const TrophySVG: FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <Trophy className={className} />
)

interface Competition {
  title: string
  participants: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  status: 'live' | 'upcoming' | 'finished'
}

interface Stat {
  value: string
  label: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
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
    { value: '25', label: 'Categories', icon: Trophy },
  ]

  return (
    <div className='bg-black text-white min-h-screen '>
      {/* Stats Section */}
      <section>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 mb-20'>
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Competitions */}
      <section>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Live <span className='text-yellow-500'>Competitions</span>
            </h2>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Join ongoing challenges and compete with the best
            </p>
          </motion.div>
          <div className='grid grid-cols-2 lg:grid-cols-3'>
            {competitions.map((comp, i) => (
              <CompetitionCard key={i} {...comp} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

interface CompetitionCardProps {
  title: string
  participants: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
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

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-green-500 border-green-500'
      case 'upcoming':
        return 'text-white border-white'
      case 'finished':
        return 'text-gray-400 border-gray-400'
      default:
        return 'text-white border-white'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className='border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-all duration-300 group cursor-pointer overflow-x-hidden'
    >
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
          <div className='p-3 rounded-full hidden sm:block mr-2 border border-white/10 group-hover:border-white/20 transition-all duration-300'>
            <Icon className='w-6 h-6 text-white' />
          </div>
          <div>
            <h3 className='text-sm sm:text-xl font-semibold text-white  transition-colors'>
              {title}
            </h3>
            <p className='text-sm sm:text-base text-gray-400'>
              {participants} participants
            </p>
          </div>
        </div>
        <span
          className={`px-2 py-1 text-xs border rounded-full ${getStatusStyle(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex -space-x-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='w-8 h-8 bg-neutral-900 rounded-full border-2 border-black'
            />
          ))}
          <div className='w-8 h-8 bg-yellow-500 rounded-full border-2 border-black flex items-center justify-center text-xs text-black'>
            +{Math.floor(Math.random() * 50)}
          </div>
        </div>
        <TrophySVG className='w-8 h-8 text-yellow-500' />
      </div>
    </motion.div>
  )
}

interface StatCardProps {
  value: string
  label: string
  delay: number
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
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
      className='text-center p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 bg-white/[0.02]'
    >
      {Icon && (
        <div className='inline-block mb-3'>
          <Icon className='w-8 h-8 text-yellow-500 mx-auto' />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className='text-4xl font-bold mb-2'
      >
        {value}
      </motion.div>
      <div className='text-white'>{label}</div>
    </motion.div>
  )
}

export default CompetitionSection
