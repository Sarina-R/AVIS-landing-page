'use client'

import { Event } from '@/app/avis-challenge/type'
import { motion } from 'framer-motion'
import { useMemo, useState, useEffect, useContext } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { EventsContext } from '@/hooks/EventsProvider'
import Link from 'next/link'
import EventCard from './EventCard'

const skeletonVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: 0.2,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse' as const,
      duration: 0.8,
    },
  },
}

export default function UpcomingEvents() {
  const eventsContext = useContext(EventsContext)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  useEffect(() => {
    if (eventsContext?.events) {
      const upcomingEvents = eventsContext.events.filter(
        (e) => new Date(e.date) >= new Date()
      )
      const eventsToShow =
        upcomingEvents.length > 0
          ? upcomingEvents
          : eventsContext.events.slice(0, 7)
      setFilteredEvents(eventsToShow)
    }
  }, [eventsContext?.events])

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

  if (eventsContext?.isLoading) {
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
                    <span className='text-white'>
                      {eventsContext?.isUpcoming ? 'Upcoming' : 'Latest'}
                    </span>
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
              </div>
            </div>
            <div className='relative'>
              <ScrollArea className='w-full'>
                <div className='flex gap-8 snap-x snap-mandatory w-max pb-4'>
                  {[...Array(6)].map((_, index) => (
                    <motion.div
                      key={index}
                      className='flex-shrink-0 w-80 snap-center'
                      variants={skeletonVariants}
                      initial='initial'
                      animate='animate'
                    >
                      <div className='relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden'>
                        <div className='relative aspect-[3/4] bg-gray-800/50'></div>
                        <div className='p-6 space-y-4'>
                          <div className='h-6 bg-gray-700/50 rounded w-3/4'></div>
                          <div className='h-4 bg-gray-700/50 rounded w-1/2'></div>
                          <div className='h-4 bg-gray-700/50 rounded w-2/3'></div>
                          <div className='h-10 bg-gray-700/50 rounded-2xl mt-6'></div>
                        </div>
                      </div>
                    </motion.div>
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
                  <span className='text-white'>
                    {eventsContext?.isUpcoming ? 'Upcoming' : 'Latest'}
                  </span>
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

              <Link href='/avis-challenge/all-events'>
                <button className='group bg-white/5 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-full text-white font-medium hover:bg-white/25 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'>
                  <span className='group-hover:tracking-wider transition-all duration-300 text-yellow-500'>
                    View All Events
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='relative'>
            <ScrollArea className='w-full'>
              <div className='flex gap-8 snap-x snap-mandatory w-max pb-4'>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      formatMonth={formatMonth}
                      formatDay={formatDay}
                    />
                  ))
                ) : (
                  <p className='text-white/70 text-lg text-center w-full'>
                    No events match your filters.
                  </p>
                )}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}
