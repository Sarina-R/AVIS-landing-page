export const HolographicText: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className='relative z-10 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
        {children}
      </span>
    </div>
  )
}
