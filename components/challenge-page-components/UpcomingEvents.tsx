import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { useMemo } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface Event {
  id: number
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
}

const UpcomingEvents = () => {
  const events: Event[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Digital Innovation Summit',
        date: '2025-08-15',
        time: '09:00 AM',
        location: 'Tech Center, Amsterdam',
        category: 'Technology',
        featured: true,
        poster:
          'https://events.avisengine.com/_next/image?url=https%3A%2F%2Fapi.avisengine.com%2Fassets%2Fecb3c959-4bab-4086-bf75-ababe193607d&w=1200&q=75',
        color: {
          primary: 'from-blue-500 to-cyan-400',
          secondary: 'bg-blue-500/10 border-blue-400/30',
          accent: 'text-blue-400',
        },
      },
      {
        id: 2,
        title: 'Creative Design Workshop',
        date: '2025-08-22',
        time: '02:00 PM',
        location: 'Design Studio, Utrecht',
        category: 'Design',
        poster:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
        color: {
          primary: 'from-purple-500 to-pink-400',
          secondary: 'bg-purple-500/10 border-purple-400/30',
          accent: 'text-purple-400',
        },
      },
      {
        id: 3,
        title: 'Business Networking Mixer',
        date: '2025-08-28',
        time: '06:30 PM',
        location: 'Grand Hotel, Rotterdam',
        category: 'Business',
        poster:
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop',
        color: {
          primary: 'from-emerald-500 to-teal-400',
          secondary: 'bg-emerald-500/10 border-emerald-400/30',
          accent: 'text-emerald-400',
        },
      },
      {
        id: 4,
        title: 'AI & Machine Learning Conference',
        date: '2025-09-05',
        time: '10:00 AM',
        location: 'Convention Center, The Hague',
        category: 'Technology',
        featured: true,
        poster:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
        color: {
          primary: 'from-orange-500 to-red-400',
          secondary: 'bg-orange-500/10 border-orange-400/30',
          accent: 'text-orange-400',
        },
      },
      {
        id: 5,
        title: 'Startup Pitch Night',
        date: '2025-09-12',
        time: '07:00 PM',
        location: 'Innovation Hub, Eindhoven',
        category: 'Startup',
        poster:
          'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
        color: {
          primary: 'from-indigo-500 to-purple-400',
          secondary: 'bg-indigo-500/10 border-indigo-400/30',
          accent: 'text-indigo-400',
        },
      },
      {
        id: 6,
        title: 'Digital Marketing Masterclass',
        date: '2025-09-18',
        time: '01:00 PM',
        location: 'Media Center, Amsterdam',
        category: 'Marketing',
        poster:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        color: {
          primary: 'from-rose-500 to-pink-400',
          secondary: 'bg-rose-500/10 border-rose-400/30',
          accent: 'text-rose-400',
        },
      },
    ],
    []
  )

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

          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none'></div>

          <div
            className={`absolute inset-0 bg-gradient-to-br ${event.color.primary} opacity-0 will-change-opacity transition-opacity duration-500 group-hover:opacity-20 pointer-events-none`}
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

            <button className='group/btn w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl py-3 text-black font-light mt-6 hover:bg-black/20 hover:border-white/30 hover:shadow-xl'>
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
