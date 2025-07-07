import { motion } from 'framer-motion'
import {
  Plus,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Zap,
  Sparkles,
  Activity,
  Target,
} from 'lucide-react'
import { ModernCard } from './ModernCard'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
  color: string
  gradient: string
}

const steps: Step[] = [
  {
    id: 1,
    title: 'One-Click Cycle Creation',
    description:
      "Effortlessly create cycles with intelligent templates and automated workflows that adapt to your team's rhythm.",
    icon: <Plus className='w-4 h-4' />,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-violet-500/10 to-purple-600/10',
    content: (
      <ModernCard>
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-6'>
            <motion.div transition={{ duration: 0.5 }}>
              <Plus className='w-6 h-6 text-violet-400' />
            </motion.div>
            <h3 className='text-2xl font-light text-white'>Cycle Creation</h3>
          </div>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-3 h-3 rounded-full bg-red-500 animate-pulse' />
            <span className='text-white/60 text-sm font-medium'>
              No active cycles
            </span>
          </div>
          <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-white font-semibold text-lg'>
                New Cycle
              </span>
              <div className='flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-violet-400' />
                <span className='text-white/60 text-sm'>AI-powered naming</span>
              </div>
            </div>
            <div className='space-y-3'>
              {[
                { color: 'bg-blue-500', label: 'Backlog', count: 12 },
                { color: 'bg-amber-500', label: 'In Progress', count: 5 },
                { color: 'bg-emerald-500', label: 'Done', count: 23 },
              ].map((status, i) => (
                <motion.div
                  key={i}
                  className='flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors'
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${status.color} shadow-lg`}
                  />
                  <span className='text-white/80 text-sm font-medium flex-1'>
                    {status.label}
                  </span>
                  <span className='text-white/60 text-xs'>{status.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.button
            className='w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className='flex items-center justify-center gap-2'>
              <Zap className='w-4 h-4' />
              Create Cycle
            </div>
          </motion.button>
        </div>
      </ModernCard>
    ),
  },
  {
    id: 2,
    title: 'Intelligent Progress Insights',
    description:
      'Real-time analytics and predictive insights that help you understand team velocity and identify bottlenecks before they impact delivery.',
    icon: <BarChart3 className='w-4 h-4' />,
    color: 'from-cyan-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10',
    content: (
      <ModernCard>
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-6'>
            <motion.div transition={{ duration: 0.5 }}>
              <BarChart3 className='w-6 h-6 text-cyan-400' />
            </motion.div>
            <h3 className='text-2xl font-light text-white'>
              Progress Insights
            </h3>
          </div>
          <div className='flex justify-between items-start mb-4'>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Activity className='w-5 h-5 text-cyan-400' />
                <span className='text-white font-semibold text-lg'>
                  Progress Overview
                </span>
              </div>
              <div className='text-white/60 text-sm'>
                32/45 issues completed
              </div>
            </div>
            <div className='text-right'>
              <div className='text-white font-semibold text-lg'>Velocity</div>
              <div className='w-20 h-12 bg-white/5 rounded-lg flex items-end justify-center p-2 border border-white/10'>
                <div className='w-full h-full bg-gradient-to-t from-cyan-600 to-blue-500 rounded opacity-80' />
              </div>
            </div>
          </div>
          <div className='relative mb-6'>
            <div className='w-full bg-white/10 rounded-full h-3 overflow-hidden'>
              <motion.div
                className='bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full rounded-full'
                initial={{ width: '0%' }}
                animate={{ width: '71%' }}
                transition={{ duration: 1 }}
              />
            </div>
            <motion.div
              className='absolute -top-1 right-0 transform translate-x-1/2'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className='w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-neutral-900' />
            </motion.div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {[
              {
                status: 'Completed',
                count: 32,
                color: 'bg-emerald-500',
                percentage: 71,
              },
              {
                status: 'In Progress',
                count: 8,
                color: 'bg-amber-500',
                percentage: 18,
              },
              {
                status: 'Blocked',
                count: 3,
                color: 'bg-red-500',
                percentage: 7,
              },
              {
                status: 'Backlog',
                count: 2,
                color: 'bg-neutral-500',
                percentage: 4,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className='flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10'
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${item.color} shadow-lg`}
                />
                <div className='flex-1'>
                  <div className='text-white/80 text-sm font-medium'>
                    {item.status}
                  </div>
                  <div className='text-white/60 text-xs'>
                    {item.count} issues
                  </div>
                </div>
                <div className='text-white text-sm font-semibold'>
                  {item.percentage}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ModernCard>
    ),
  },
  {
    id: 3,
    title: 'Seamless Issue Migration',
    description:
      'Smart issue transfer with context preservation and automated dependency mapping across cycles.',
    icon: <ArrowRight className='w-4 h-4' />,
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/10',
    content: (
      <ModernCard>
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-6'>
            <motion.div transition={{ duration: 0.5 }}>
              <ArrowRight className='w-4 h-4 text-emerald-400' />
            </motion.div>
            <h3 className='text-2xl font-light text-white'>Issue Migration</h3>
          </div>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <Target className='w-5 h-5 text-emerald-400' />
              <span className='text-white/60 text-sm font-medium'>
                Cycle completed - 5 issues remaining
              </span>
            </div>
            <motion.button
              className='bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Smart Transfer
            </motion.button>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-white/80 text-sm font-semibold'>
                  Pending Issues
                </span>
                <div className='w-4 h-4 bg-amber-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-amber-400 text-xs font-bold'>5</span>
                </div>
              </div>
              {[
                { title: 'API Integration', priority: 'high', team: 'Backend' },
                { title: 'UI Polish', priority: 'medium', team: 'Frontend' },
                { title: 'Testing Suite', priority: 'low', team: 'QA' },
              ].map((issue, i) => (
                <motion.div
                  key={i}
                  className='bg-white/5 rounded-xl p-4 border border-white/10'
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='text-white text-sm font-medium mb-2'>
                    {issue.title}
                  </div>
                  <div className='flex items-center gap-2'>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        issue.priority === 'high'
                          ? 'bg-red-500'
                          : issue.priority === 'medium'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                    />
                    <span className='text-white/60 text-xs'>{issue.team}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className='space-y-4'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-white/80 text-sm font-semibold'>
                  Next Cycle
                </span>
                <div className='w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-emerald-400 text-xs font-bold'>12</span>
                </div>
              </div>
              <motion.div
                className='bg-white/5 rounded-xl p-4 border-2 border-dashed border-emerald-500/30 text-center'
                whileHover={{ scale: 1.02 }}
              >
                <div className='text-emerald-400 text-sm font-medium mb-2'>
                  Auto-Transfer Zone
                </div>
                <div className='text-white/60 text-xs'>
                  Issues will be intelligently categorized and prioritized
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ModernCard>
    ),
  },
  {
    id: 4,
    title: 'Predictive Planning',
    description:
      'AI-powered forecasting and historical pattern analysis to optimize future cycles and resource allocation.',
    icon: <TrendingUp className='w-4 h-4' />,
    color: 'from-purple-500 to-violet-600',
    gradient: 'bg-gradient-to-br from-purple-500/10 to-violet-600/10',
    content: (
      <ModernCard>
        <div className='space-y-6'>
          <div className='flex items-center gap-3 mb-6'>
            <motion.div transition={{ duration: 0.5 }}>
              <TrendingUp className='w-4 h-4 text-purple-400' />
            </motion.div>
            <h3 className='text-2xl font-light text-white'>
              Predictive Planning
            </h3>
          </div>
          <div className='flex justify-between items-start mb-4'>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <TrendingUp className='w-5 h-5 text-purple-400' />
                <span className='text-white font-semibold text-lg'>
                  Cycle Analytics
                </span>
              </div>
              <div className='text-white/60 text-sm'>
                Historical performance & predictions
              </div>
            </div>
            <div className='text-right'>
              <div className='text-white font-semibold text-lg'>Forecast</div>
              <div className='w-20 h-12 bg-white/5 rounded-lg flex items-end justify-center p-2 border border-white/10'>
                <div className='w-full h-full bg-gradient-to-t from-purple-600 to-violet-500 rounded opacity-80' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='space-y-3'>
              <div className='text-white/80 text-sm font-semibold'>
                Performance Metrics
              </div>
              {[
                { label: 'Completion Rate', value: '94%', trend: 'up' },
                { label: 'Velocity', value: '32 pts', trend: 'up' },
                { label: 'Quality Score', value: '4.8/5', trend: 'stable' },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className='flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10'
                  whileHover={{ scale: 1.02 }}
                >
                  <span className='text-white/80 text-sm'>{metric.label}</span>
                  <div className='flex items-center gap-2'>
                    <span className='text-white font-semibold text-sm'>
                      {metric.value}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        metric.trend === 'up'
                          ? 'bg-emerald-500'
                          : 'bg-amber-500'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className='space-y-3'>
              <div className='text-white/80 text-sm font-semibold'>
                Upcoming Cycles
              </div>
              {[
                { period: 'Jul 15 - Aug 24', capacity: '85%', risk: 'low' },
                { period: 'Aug 25 - Sep 30', capacity: '92%', risk: 'medium' },
              ].map((cycle, i) => (
                <motion.div
                  key={i}
                  className='p-3 rounded-lg bg-white/5 border border-white/10'
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='text-white/80 text-sm font-medium'>
                    {cycle.period}
                  </div>
                  <div className='flex items-center gap-2 mt-1'>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        cycle.risk === 'low' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    />
                    <span className='text-white/60 text-xs'>
                      {cycle.capacity} capacity
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className='bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-xl p-4 border border-purple-500/20'
            whileHover={{ scale: 1.02 }}
          >
            <div className='text-purple-400 text-sm font-semibold mb-2'>
              AI Recommendation
            </div>
            <div className='text-white/80 text-sm'>
              Based on historical data, consider adding 2 buffer days to the
              next cycle for optimal delivery confidence.
            </div>
          </motion.div>
        </div>
      </ModernCard>
    ),
  },
]

export default steps
