'use client'

import React, { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface Node {
  id: string
  title: string
  x: number
  y: number
}

const createResponsiveNodes = (width: number, height: number): Node[] => {
  const centerX = width / 2
  const centerY = height / 2
  const leftX = width * 0.15
  const rightX = width * 0.85

  return [
    { id: 'center', title: 'CompanyLogo', x: centerX, y: centerY },
    {
      id: 'left1',
      title: 'Company Branch 1',
      x: leftX,
      y: centerY - height * 0.2,
    },
    { id: 'left2', title: 'Company Branch 2', x: leftX, y: centerY },
    {
      id: 'left3',
      title: 'Company Branch 3',
      x: leftX,
      y: centerY + height * 0.2,
    },
    {
      id: 'right1',
      title: 'AVIS Conference',
      x: rightX,
      y: centerY - height * 0.2,
    },
    { id: 'right2', title: 'AVIS Tutorials', x: rightX, y: centerY },
    {
      id: 'right3',
      title: 'AVIS Challenge',
      x: rightX,
      y: centerY + height * 0.2,
    },
  ]
}

const connections = [
  { from: 'center', to: 'left1', color: '#DC2626' },
  { from: 'center', to: 'left2', color: '#EF4444' },
  { from: 'center', to: 'left3', color: '#F87171' },
  { from: 'center', to: 'right1', color: '#DC2626' },
  { from: 'center', to: 'right2', color: '#EF4444' },
  { from: 'center', to: 'right3', color: '#F87171' },
]

const createPath = (
  startX: number,
  startY: number,
  endX: number,
  endY: number
) => {
  const controlOffset = Math.abs(endX - startX) * 0.3
  const control1X = startX + (startX < endX ? controlOffset : -controlOffset)
  const control2X = endX + (startX < endX ? -controlOffset : controlOffset)

  return `M ${startX} ${startY} C ${control1X} ${startY}, ${control2X} ${endY}, ${endX} ${endY}`
}

export function CompanyWorkflow({
  pathLengths,
}: {
  pathLengths: MotionValue[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({
    width: 800,
    height: 600,
  })

  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({
          width: rect.width,
          height: Math.max(400, Math.min(600, rect.width * 0.6)),
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const nodes = useMemo(
    () => createResponsiveNodes(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  )

  const getNodeById = (id: string) => nodes.find((node) => node.id === id)!

  return (
    <div
      ref={containerRef}
      className='relative w-full bg-black border border-primary/20 rounded-xl overflow-hidden'
      style={{ height: dimensions.height }}
    >
      <svg className='absolute inset-0 size-full pointer-events-none'>
        <defs>
          <filter id='glow'>
            <feGaussianBlur stdDeviation='3' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        {connections.map((connection, index) => {
          const fromNode = getNodeById(connection.from)
          const toNode = getNodeById(connection.to)
          const path = createPath(fromNode.x, fromNode.y, toNode.x, toNode.y)

          return (
            <g key={index}>
              <motion.path
                d={path}
                stroke={connection.color}
                style={{ pathLength: pathLengths[index] }}
                strokeWidth={3}
                fill='none'
                initial={{ pathLength: 0 }}
                filter='url(#glow)'
                opacity={0.7}
              />
              <motion.path
                d={path}
                stroke={connection.color}
                style={{ pathLength: pathLengths[index] }}
                strokeWidth={1}
                fill='none'
                initial={{ pathLength: 0 }}
              />
            </g>
          )
        })}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className='absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2'
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {node.id === 'center' ? (
            <div className='w-20 h-20 md:w-24 md:h-24 bg-[#111] rounded-full flex items-center justify-center border border-primary/30 p-2'>
              <Image
                src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
                alt='AVIS Logo'
                width={60}
                height={60}
                className='md:w-16 md:h-16'
              />
            </div>
          ) : (
            <motion.div
              className='bg-[#111] text-white/80 px-4 py-2 md:px-5 md:py-3 rounded-lg border border-primary/30 text-sm md:text-base font-medium whitespace-nowrap'
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(239, 68, 68, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {node.title}
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Simple progress indicator */}
      <div className='absolute top-4 right-4 bg-[#111] border border-primary/30 rounded-full p-2'>
        <div className='w-8 h-8 relative'>
          <svg className='w-full h-full transform -rotate-90'>
            <circle
              cx='16'
              cy='16'
              r='12'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              className='text-primary/30'
            />
            <motion.circle
              cx='16'
              cy='16'
              r='12'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              className='text-primary'
              style={{ pathLength: pathLengths[0] }}
              strokeLinecap='round'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Workflow() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const pathLength1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const pathLength2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const pathLength3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const pathLength4 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const pathLength5 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const pathLength6 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  return (
    <div className='min-h-screen bg-black'>
      <div ref={ref} className='h-[200vh] w-full relative'>
        <div className='sticky top-44 mx-4 md:mx-8 lg:mx-16 z-10'>
          <CompanyWorkflow
            pathLengths={[
              pathLength1,
              pathLength2,
              pathLength3,
              pathLength4,
              pathLength5,
              pathLength6,
            ]}
          />
        </div>
      </div>
    </div>
  )
}
