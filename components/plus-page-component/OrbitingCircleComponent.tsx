import React from 'react'
import {
  Box,
  PackageOpen,
  Command,
  Globe,
  Boxes,
  Database,
  Server,
  LucideIcon,
} from 'lucide-react'

interface IconProps {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = ({ className, children, style }) => (
  <div
    className={`absolute flex h-12 w-12 items-center justify-center rounded-full bg-black backdrop-blur-sm ${className}`}
    style={style}
  >
    <div
      className='absolute h-16 w-16 rounded-full bg-gradient-to-tr from-[#E52B2B] to-[#1F11CE] opacity-60 blur-[6px] -z-50'
      style={{
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
      }}
    />
    {children}
  </div>
)

export const OrbitingCircleComponent = () => {
  const [iconPositions, setIconPositions] = React.useState<
    { top: string; left: string }[]
  >([])

  const icons: LucideIcon[] = [
    Command,
    PackageOpen,
    Globe,
    Boxes,
    Database,
    Server,
    Box,
  ]

  const iconColors = [
    'text-blue-400',
    'text-green-400',
    'text-yellow-400',
    'text-red-400',
    'text-purple-400',
    'text-pink-400',
    'text-orange-400',
  ]

  React.useEffect(() => {
    const numIcons = 7
    const radius = 150
    const newPositions = Array.from({ length: numIcons }).map((_, i) => {
      const angle = (i / numIcons) * 2 * Math.PI - Math.PI / 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      return {
        top: `calc(45% + ${y}px - 2px)`,
        left: `calc(45% + ${x}px - 2px)`,
      }
    })
    setIconPositions(newPositions)
  }, [])

  return (
    <section className='relative w-full overflow-hidden'>
      <div className='container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 lg:flex-row lg:justify-between lg:gap-12'>
        {/* Left */}
        <div className='relative flex h-[500px] w-[500px] flex-shrink-0 items-center justify-center'>
          <div className='absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-[#E52B2B] to-[#1F11CE] opacity-60 blur-[100px]'></div>

          <div className='absolute h-[400px] w-[400px] rounded-full border border-dashed border-white/20'></div>
          <div className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-white/20'></div>
          <div className='absolute h-[200px] w-[200px] rounded-full border border-dashed border-white/20'></div>

          {/* Central Logo */}
          <div className='z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 border border-dashed border-white/20 backdrop-blur-sm'>
            <img
              src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
              alt='Logo'
              className='h-full w-16 object-contain pb-1'
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://placehold.co/64x64/000000/FFFFFF?text=Logo'
              }}
            />
          </div>

          {/* Orbiting Icons */}
          {iconPositions.map((pos, index) => {
            const IconComponent = icons[index]
            return (
              <Icon
                key={index}
                className='transition-transform duration-300 hover:scale-110'
                style={pos}
              >
                <IconComponent size={24} className={iconColors[index]} />
              </Icon>
            )
          })}
        </div>

        {/* Right Side: Text Content */}
        <div className='z-10 mt-12 max-w-lg text-center lg:mt-0 lg:text-left'>
          <h2 className='text-4xl font-bold tracking-tight text-white'>
            Align your workflow
          </h2>
          <p className='mt-6 text-lg leading-8 text-neutral-400'>
            The Turborepo team collaborates with the creators behind your
            favorite tools at Vercel—ensuring alignment, stability, and the
            ultimate developer experience.
          </p>
        </div>
      </div>
    </section>
  )
}
