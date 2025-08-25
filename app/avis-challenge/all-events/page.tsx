'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Calendar } from 'lucide-react'
import { useMemo, useState, useEffect, useContext } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { EventsContext } from '@/hooks/EventsProvider'
import { format } from 'date-fns'
import EventCard from '@/components/challenge-page-components/EventCard'

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
  country: string
}

interface DateRange {
  start: string | null
  end: string | null
}

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

const DateRangePicker = ({
  value,
  onChange,
}: {
  value: DateRange
  onChange: (range: DateRange) => void
}) => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    value.start ? new Date(value.start) : undefined
  )
  const [endDate, setEndDate] = useState<Date | undefined>(
    value.end ? new Date(value.end) : undefined
  )

  useEffect(() => {
    onChange({
      start: startDate ? format(startDate, 'yyyy-MM-dd') : null,
      end: endDate ? format(endDate, 'yyyy-MM-dd') : null,
    })
  }, [startDate, endDate, onChange])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className='w-full bg-white/5 backdrop-blur-xl border border-white/30 rounded-full px-4 py-3 text-white text-sm font-light hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50'
        >
          <Calendar className='mr-2 h-4 w-4' />
          {startDate && endDate
            ? `${format(startDate, 'MMM d, yyyy')} - ${format(
                endDate,
                'MMM d, yyyy'
              )}`
            : 'Select date range'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-white/10 backdrop-blur-xl border border-white/30 text-white'>
        <CalendarComponent
          mode='range'
          selected={{ from: startDate, to: endDate }}
          onSelect={(range) => {
            setStartDate(range?.from)
            setEndDate(range?.to)
          }}
          className='bg-transparent'
        />
      </PopoverContent>
    </Popover>
  )
}

export default function AllEvents() {
  const eventsContext = useContext(EventsContext)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [countries, setCountries] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('All')
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  })

  useEffect(() => {
    if (eventsContext?.events) {
      setFilteredEvents(eventsContext.events)
      const uniqueCountries = [
        'All',
        ...new Set(eventsContext.events.map((event) => event.country)),
      ]
      setCountries(uniqueCountries)
    }
  }, [eventsContext?.events])

  useEffect(() => {
    if (!eventsContext?.events) return

    let filtered = eventsContext.events

    // Filter by country
    if (selectedCountry !== 'All') {
      filtered = filtered.filter((event) => event.country === selectedCountry)
    }

    // Filter by date range
    if (dateRange.start && dateRange.end) {
      const startDate = new Date(dateRange.start)
      const endDate = new Date(dateRange.end)
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.date)
        return eventDate >= startDate && eventDate <= endDate
      })
    }

    setFilteredEvents(filtered)
  }, [selectedCountry, dateRange, eventsContext?.events])

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
      <div id='all-events' className='min-h-screen bg-black'>
        <div className='relative z-10 py-16 px-6 sm:px-8 lg:px-12'>
          <div className='max-w-7xl mx-auto'>
            <div className='mb-16'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent'></div>
                <span className='text-yellow-500 text-sm font-medium tracking-[0.2em] uppercase'>
                  Explore
                </span>
              </div>
              <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8'>
                <div>
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-6'>
                    <span className='text-white'>All</span>
                    <br />
                    <span className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
                      Events
                    </span>
                  </h1>
                  <p className='text-white/70 text-lg sm:text-xl font-light max-w-2xl leading-relaxed'>
                    Discover our full range of events that inspire innovation
                    and foster connections across industries
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className='flex-shrink-0 w-full sm:w-80'
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
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='all-events' className='min-h-screen bg-black'>
      <div className='relative z-10 py-16 px-6 sm:px-8 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent'></div>
              <span className='text-yellow-500 text-sm font-medium tracking-[0.2em] uppercase'>
                Explore
              </span>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8'>
              <div>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-6'>
                  <span className='text-white'>All</span>
                  <br />
                  <span className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
                    Events
                  </span>
                </h1>

                <p className='text-white/70 text-lg sm:text-xl font-light max-w-2xl leading-relaxed'>
                  Discover our full range of events that inspire innovation and
                  foster connections across industries
                </p>
              </div>
            </div>

            {/* Filter Section */}
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <div className='flex-1'>
                <label className='text-white/70 text-sm font-medium mb-2 block'>
                  Country
                </label>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger className='w-full bg-white/5 backdrop-blur-xl border border-white/30 rounded-full px-4 py-3 text-white text-sm font-light focus:ring-2 focus:ring-yellow-500/50'>
                    <SelectValue placeholder='Select a country' />
                  </SelectTrigger>
                  <SelectContent className='bg-white/10 backdrop-blur-xl border border-white/30 text-white'>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='flex-1'>
                <label className='text-white/70 text-sm font-medium mb-2 block'>
                  Date Range
                </label>
                <DateRangePicker value={dateRange} onChange={setDateRange} />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
              <p className='text-white/70 text-lg col-span-full text-center'>
                No events match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
