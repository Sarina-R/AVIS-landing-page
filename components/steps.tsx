import { motion } from 'framer-motion'
import { Plus, BarChart3, ArrowRight, TrendingUp, Zap } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: 'One-Click Cycle Creation',
    description: 'Effortlessly create cycles with intelligent templates.',
    icon: <Plus className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <Plus className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Cycle Creation</h3>
        </div>
        <div className='text-xs text-gray-400'>No active cycles</div>
        <button className='flex items-center gap-1 px-3 py-1 bg-pink-600/70 text-xs rounded-full'>
          <Zap className='w-3 h-3' /> Create Cycle
        </button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Intelligent Progress Insights',
    description: 'Real-time analytics for team velocity and bottlenecks.',
    icon: <BarChart3 className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <BarChart3 className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Progress Insights</h3>
        </div>
        <div className='text-xs text-gray-400'>32/45 issues completed</div>
        <div className='w-full bg-gray-700 h-2 rounded-full overflow-hidden'>
          <motion.div
            className='bg-pink-500/70 h-full rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: '71%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Seamless Issue Migration',
    description: 'Smart issue transfer with context preservation.',
    icon: <ArrowRight className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <ArrowRight className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>Issue Migration</h3>
        </div>
        <div className='text-xs text-gray-400'>5 issues remaining</div>
        <button className='px-3 py-1 bg-pink-600/70 text-xs rounded-full'>
          Smart Transfer
        </button>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Predictive Planning',
    description: 'AI-powered forecasting for optimized cycles.',
    icon: <TrendingUp className='w-4 h-4 text-white' />,
    content: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <TrendingUp className='w-5 h-5 text-pink-500/70' />
          <h3 className='text-sm font-medium text-white'>
            Predictive Planning
          </h3>
        </div>
        <div className='text-xs text-gray-400'>Historical performance</div>
        <div className='text-pink-500/70 text-xs'>
          Add 2 buffer days to next cycle
        </div>
      </div>
    ),
  },
]

export default steps
