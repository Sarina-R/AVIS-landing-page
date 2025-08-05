import { CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export const AnimatedList = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedItems((prev) => {
        if (prev.length < 6) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='space-y-4'>
      {[
        'Corporate Events',
        'Events Planning',
        'Product Launches',
        'Conferences',
        'Private Events',
        'White Branding',
      ].map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 p-4 rounded-lg border border-white/10 bg-white/3 transition-all duration-500 ${
            animatedItems.includes(index)
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-8'
          }`}
        >
          <CheckCircle className='h-5 w-5 text-green-500' />
          <span className='text-neutral-300'>{item}</span>
        </div>
      ))}
    </div>
  )
}
