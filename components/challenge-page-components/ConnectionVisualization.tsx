import { FC, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrophySVG } from './TrophySVG'

export const ConnectionVisualization: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='px-6 pt-16 min-h-[80vh]' ref={ref}>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <svg
            className='w-full h-64 mx-auto'
            viewBox='0 0 800 200'
            fill='none'
          >
            <defs>
              <linearGradient
                id='connection-line'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#3B82F6' />
                <stop offset='50%' stopColor='#8B5CF6' />
                <stop offset='100%' stopColor='#EC4899' />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut', repeat: 0 }}
              d='M100 100 Q250 50 400 100 T700 100'
              stroke='url(#connection-line)'
              strokeWidth='2'
            />
            {[
              { x: 100, y: 100, color: '#3B82F6', size: 20 },
              { x: 250, y: 75, color: '#8B5CF6', size: 16 },
              { x: 400, y: 100, color: '#EC4899', size: 18 },
              { x: 550, y: 125, color: '#10B981', size: 16 },
              { x: 700, y: 100, color: '#F59E0B', size: 20 },
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill={node.color}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2, type: 'spring', repeat: 0 }}
              />
            ))}
            <g transform='translate(375, 75)'>
              <motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 360 } : {}}
                transition={{ delay: 1, duration: 1, repeat: 0 }}
              >
                <TrophySVG className='w-12 h-12' />
              </motion.g>
            </g>
          </svg>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, repeat: 0 }}
            className='text-3xl font-bold bg-clip-text mt-8 mb-4'
          >
            Connected Through Competition
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7, repeat: 0 }}
            className='text-gray-400 text-lg'
          >
            Every participant, every challenge, every victory creates lasting
            connections
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
