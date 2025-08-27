import { motion } from 'framer-motion'
import { Plus, BarChart3, ArrowRight, TrendingUp, Zap } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
}

const steps = [
  {
    id: 1,
    title: 'Unified Profile Creation',
    description: 'Create your AVIS Plus profile with one click.',
    icon: <Plus className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <Plus className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Profile Setup</h3>
        </div>
        <div className='text-xs text-gray-400'>No active profile</div>
        <button className='flex items-center gap-1 px-3 py-1 bg-pink-600/70 text-xs rounded-full'>
          <Zap className='w-3 h-3' /> Create Profile
        </button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Connected Insights',
    description: 'Track your activity across all AVIS platforms.',
    icon: <BarChart3 className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <BarChart3 className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Activity Insights</h3>
        </div>
        <div className='text-xs text-gray-400'>80% profile completion</div>
        <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
          <motion.div
            className='bg-pink-500/70 h-full rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Seamless Platform Access',
    description: 'Access all AVIS platforms with one identity.',
    icon: <ArrowRight className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <ArrowRight className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Platform Access</h3>
        </div>
        <div className='text-xs text-gray-400'>3 platforms connected</div>
        <button className='px-3 py-1 bg-pink-600/70 text-xs rounded-full'>
          Connect Now
        </button>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Personalized Experience',
    description: 'Tailored recommendations across AVIS platforms.',
    icon: <TrendingUp className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <TrendingUp className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Personalization</h3>
        </div>
        <div className='text-xs text-gray-400'>Based on your activity</div>
        <div className='text-pink-500/70 text-xs'>Explore new events</div>
      </div>
    ),
  },
]

export default steps
