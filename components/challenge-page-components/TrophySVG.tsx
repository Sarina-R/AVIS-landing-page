import { FC } from 'react'

interface TrophySVGProps {
  className?: string
  variant?: 'gold' | 'silver' | 'bronze'
}

export const TrophySVG: FC<TrophySVGProps> = ({
  className,
  variant = 'gold',
}) => {
  const colors = {
    gold: { primary: '#FFD700', secondary: '#FFA500', accent: '#B8860B' },
    silver: { primary: '#C0C0C0', secondary: '#A8A8A8', accent: '#808080' },
    bronze: { primary: '#CD7F32', secondary: '#A0522D', accent: '#8B4513' },
  }
  const color = colors[variant]

  return (
    <svg className={className} viewBox='0 0 100 120' fill='none'>
      <defs>
        <linearGradient
          id={`trophy-${variant}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop offset='0%' stopColor={color.primary} />
          <stop offset='100%' stopColor={color.secondary} />
        </linearGradient>
      </defs>
      <path
        d='M25 35h50v30c0 13.8-11.2 25-25 25s-25-11.2-25-25V35z'
        fill={`url(#trophy-${variant})`}
      />
      <rect x='20' y='30' width='60' height='8' rx='4' fill={color.primary} />
      <rect x='45' y='90' width='10' height='20' fill='#C0C0C0' />
      <ellipse cx='50' cy='115' rx='20' ry='5' fill='#C0C0C0' />
      <path d='M15 40h10v15c0 5.5-4.5 10-10 10V40z' fill={color.accent} />
      <path d='M85 40h-10v15c0 5.5 4.5 10 10 10V40z' fill={color.accent} />
    </svg>
  )
}
