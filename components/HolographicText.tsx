export const HolographicText: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className='relative z-10'>{children}</span>
    </div>
  )
}
