export const MedalSVG = ({
  className,
  color = '#FFD700',
  position = '1',
}: {
  className?: string
  color?: string
  position?: string
}) => (
  <svg className={className} viewBox='0 0 60 80' fill='none'>
    <circle cx='30' cy='50' r='20' fill={color} stroke='#000' strokeWidth='1' />
    <path d='M20 15l10 35M40 15l-10 35' stroke={color} strokeWidth='3' />
    <circle cx='30' cy='50' r='12' fill='#FFF' fillOpacity='0.3' />
    <text
      x='30'
      y='55'
      textAnchor='middle'
      fontSize='12'
      fill='#000'
      fontWeight='bold'
    >
      {position}
    </text>
  </svg>
)
