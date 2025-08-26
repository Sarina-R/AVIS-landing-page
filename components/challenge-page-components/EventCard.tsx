import { Event } from '@/app/avis-challenge/type'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function EventCard({
  event,
  formatMonth,
  formatDay,
}: {
  event: Event
  formatMonth: (date: string) => string
  formatDay: (date: string) => number
}) {
  return (
    <div className='group flex-shrink-0 w-80 snap-center'>
      <div
        onClick={() => {
          let url = ''
          if (event.website === '') {
            url = 'https://events.avisengine.com/'
          } else if (
            event.website.startsWith('https://') ||
            event.website.startsWith('http://')
          ) {
            url = event.website
          } else {
            url = `https://events.avisengine.com/events/${event.website}`
          }
          window.location.href = url
        }}
        className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50 hover:cursor-pointer'
      >
        <div className='relative aspect-[3/4] overflow-hidden'>
          <Image
            src={event.poster}
            alt={event.title}
            loading='lazy'
            width={400}
            height={400}
            className='w-full h-full object-cover'
          />

          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              background: 'rgba(0,0,0,0.35)',
              mixBlendMode: 'multiply',
            }}
          ></div>

          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>

          <div
            className='absolute inset-0 opacity-0 will-change-opacity transition-opacity duration-500 group-hover:opacity-20 pointer-events-none'
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${event.color.primary}, ${event.color.secondary})`,
            }}
          ></div>

          <div className='absolute top-6 right-6 pointer-events-none'>
            <div className='bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10'>
              <span className='text-white text-xs font-medium tracking-wide'>
                {formatMonth(event.date)} {formatDay(event.date)}
              </span>
            </div>
          </div>

          {event.featured && (
            <div className='absolute bottom-6 left-6 pointer-events-none'>
              <div className='flex items-center gap-2 bg-white/90 backdrop-blur-xl px-3 py-2 rounded-full shadow-xl'>
                <div className='w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse'></div>
                <span className='text-black text-xs font-medium'>Featured</span>
              </div>
            </div>
          )}

          <motion.div
            className='absolute bottom-0 left-0 right-0 p-6 group'
            whileHover='hover'
            initial='initial'
          >
            <div className='relative'>
              <motion.h3
                className='absolute bottom-0 text-white text-xl leading-tight'
                variants={{
                  initial: {
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                  hover: {
                    y: -64,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
              >
                {event.title}
              </motion.h3>

              <motion.div
                className='space-y-3 mt-4'
                variants={{
                  initial: {
                    opacity: 0,
                    y: 16,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  },
                }}
              >
                <div className='flex items-center gap-3'>
                  <Clock size={16} />
                  <span className='text-white text-sm'>{event.time}</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin size={16} />
                  <span className='text-white text-sm'>{event.location}</span>
                </div>
              </motion.div>
            </div>

            <button
              onClick={() => {
                let url = ''
                if (event.website === '') {
                  url = 'https://events.avisengine.com/'
                } else if (
                  event.website.startsWith('https://') ||
                  event.website.startsWith('http://')
                ) {
                  url = event.website
                } else {
                  url = `https://events.avisengine.com/events/${event.website}`
                }
                window.location.href = url
              }}
              className='group/btn w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl py-3 text-black font-light mt-6 hover:bg-black/20 hover:border-white/30 hover:shadow-xl hover:cursor-pointer'
            >
              <div className='flex items-center justify-center gap-3'>
                <span className='text-white'>Explore Event</span>
                <div className='w-2 h-2 border-r border-b border-white/70 transform rotate-[-45deg]'></div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
