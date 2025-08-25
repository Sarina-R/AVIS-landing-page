import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { useMemo, useState, useEffect } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import axios from 'axios'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  featured?: boolean
  poster: string
  color: {
    primary: string
    secondary: string
    accent: string
  }
  website: string
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    axios
      .get('https://api.avisengine.com/items/events')
      .then((res) => {
        const currentDate = new Date()
        const allEvents = res.data.data
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            date: item.start_date,
            time: item.dates,
            location: `${item.city}, ${item.country}`,
            category: item.event_type?.[0] || '',
            featured: item.sort === 1,
            poster: item.thumbnail
              ? `https://api.avisengine.com/assets/${item.thumbnail}`
              : '/placeholder.jpg',
            color: {
              primary: item.primary_color,
              secondary: item.secondary_color,
              accent: item.secondary_color,
            },
            website: item.website || '',
          }))
          .sort(
            (a: Event, b: Event) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          )

        const upcomingEvents = allEvents.filter(
          (e: Event) => new Date(e.date) >= currentDate
        )

        const eventsToShow =
          upcomingEvents.length > 0 ? upcomingEvents : allEvents.slice(0, 7)

        setEvents(eventsToShow)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
      })
  }, [])

  const formatMonth = useMemo(
    () => (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    },
    []
  )

  const formatDay = useMemo(
    () => (dateString: string) => {
      const date = new Date(dateString)
      return date.getDate()
    },
    []
  )

  return (
    <div id='upcoming-events' className='min-h-screen'>
      <div className='relative z-10 py-16 px-6 sm:px-8 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent'></div>
              <span className='text-yellow-500 text-sm font-medium tracking-[0.2em] uppercase'>
                Discover
              </span>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8'>
              <div>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-6'>
                  <span className='text-white'>Upcoming</span>
                  <br />
                  <span className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
                    Events
                  </span>
                </h1>

                <p className='text-white/70 text-lg sm:text-xl font-light max-w-2xl leading-relaxed'>
                  Immerse yourself in experiences that inspire innovation and
                  forge lasting connections across industries
                </p>
              </div>

              <button className='group bg-white/5 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-full text-white font-medium hover:bg-white/25 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl'>
                <span className='group-hover:tracking-wider transition-all duration-300 text-yellow-500'>
                  View All Events
                </span>
              </button>
            </div>
          </div>

          <div className='relative'>
            <ScrollArea className='w-full'>
              <div className='flex gap-8 snap-x snap-mandatory w-max pb-4'>
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    formatMonth={formatMonth}
                    formatDay={formatDay}
                  />
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}

const EventCard = ({
  event,
  formatMonth,
  formatDay,
}: {
  event: Event
  formatMonth: (date: string) => string
  formatDay: (date: string) => number
}) => {
  return (
    <div className='group flex-shrink-0 w-80 snap-center'>
      <div className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50'>
        <div className='relative aspect-[3/4] overflow-hidden'>
          <img
            src={event.poster}
            alt={event.title}
            loading='lazy'
            decoding='async'
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
              className='group/btn w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl py-3 text-black font-light mt-6 hover:bg-black/20 hover:border-white/30 hover:shadow-xl'
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

export default UpcomingEvents
