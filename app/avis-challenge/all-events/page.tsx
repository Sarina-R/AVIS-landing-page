'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronDown, X } from 'lucide-react'
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
import { Button } from '@/components/ui/button'
import { EventsContext } from '@/hooks/EventsProvider'
import EventCard from '@/components/challenge-page-components/EventCard'
import { Event } from '../type'

interface YearRange {
  start: number | null
  end: number | null
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

const YearRangePicker = ({
  value,
  onChange,
}: {
  value: YearRange
  onChange: (range: YearRange) => void
}) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i)

  const [isOpen, setIsOpen] = useState(false)
  const [startYear, setStartYear] = useState<number | null>(value.start)
  const [endYear, setEndYear] = useState<number | null>(value.end)

  const handleYearSelect = (year: number, type: 'start' | 'end') => {
    if (type === 'start') {
      const newStart = startYear === year ? null : year
      setStartYear(newStart)
      if (newStart && endYear && newStart > endYear) {
        setEndYear(newStart)
      }
    } else {
      const newEnd = endYear === year ? null : year
      setEndYear(newEnd)
      if (newEnd && startYear && newEnd < startYear) {
        setStartYear(newEnd)
      }
    }
  }

  useEffect(() => {
    onChange({ start: startYear, end: endYear })
  }, [startYear, endYear, onChange])

  const clearFilters = () => {
    setStartYear(null)
    setEndYear(null)
  }

  const displayText = () => {
    if (startYear && endYear) {
      return startYear === endYear
        ? `${startYear}`
        : `${startYear} - ${endYear}`
    }
    if (startYear) return `From ${startYear}`
    if (endYear) return `Until ${endYear}`
    return 'Select year range'
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className='relative'>
          <Button
            variant='outline'
            className='w-full h-9 bg-neutral-900/50 backdrop-blur-sm border-neutral-700/50 rounded-xl px-4 text-white text-sm font-medium hover:bg-neutral-800/60 hover:border-neutral-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 justify-between'
          >
            <div className='flex items-center'>
              <Calendar className='mr-3 h-4 w-4 text-neutral-400' />
              <span
                className={
                  startYear || endYear ? 'text-white' : 'text-neutral-400'
                }
              >
                {displayText()}
              </span>
            </div>
            <ChevronDown className='h-4 w-4 text-neutral-400' />
          </Button>
          {(startYear || endYear) && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                clearFilters()
              }}
              className='absolute right-10 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-neutral-700/50 transition-colors'
            >
              <X className='h-3 w-3 text-neutral-400 hover:text-white' />
            </button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className='w-80 p-0 bg-neutral-900/95 backdrop-blur-xl border-neutral-700/50 shadow-2xl'
        align='start'
      >
        <div className='p-4'>
          <div className='space-y-4'>
            <div>
              <label className='text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 block'>
                Start Year
              </label>
              <div className='grid grid-cols-4 gap-2'>
                {years.map((year) => (
                  <button
                    key={`start-${year}`}
                    onClick={() => handleYearSelect(year, 'start')}
                    className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                      startYear === year
                        ? 'bg-yellow-500 text-black font-medium'
                        : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className='h-px bg-neutral-700/50'></div>

            <div>
              <label className='text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2 block'>
                End Year
              </label>
              <div className='grid grid-cols-4 gap-2'>
                {years.map((year) => (
                  <button
                    key={`end-${year}`}
                    onClick={() => handleYearSelect(year, 'end')}
                    className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                      endYear === year
                        ? 'bg-yellow-500 text-black font-medium'
                        : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {(startYear || endYear) && (
            <div className='mt-4 pt-4 border-t border-neutral-700/50'>
              <button
                onClick={clearFilters}
                className='w-full py-2 text-sm text-neutral-400 hover:text-white transition-colors'
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function AllEvents() {
  const eventsContext = useContext(EventsContext)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [countries, setCountries] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('All')
  const [yearRange, setYearRange] = useState<YearRange>({
    start: null,
    end: null,
  })

  const normalizeCountryName = (country: string): string => {
    return country.trim().toLowerCase()
  }

  const getDisplayCountryName = (country: string): string => {
    return country.trim()
  }

  useEffect(() => {
    if (eventsContext?.events) {
      setFilteredEvents(eventsContext.events)

      const countryMap = new Map<string, string>()
      eventsContext.events.forEach((event) => {
        const normalized = normalizeCountryName(event.country)
        if (!countryMap.has(normalized)) {
          countryMap.set(normalized, getDisplayCountryName(event.country))
        }
      })

      const uniqueCountries = ['All', ...Array.from(countryMap.values()).sort()]
      setCountries(uniqueCountries)
    }
  }, [eventsContext?.events])

  useEffect(() => {
    if (!eventsContext?.events) return

    let filtered = eventsContext.events

    if (selectedCountry !== 'All') {
      const selectedNormalized = normalizeCountryName(selectedCountry)
      filtered = filtered.filter(
        (event) => normalizeCountryName(event.country) === selectedNormalized
      )
    }

    if (yearRange.start || yearRange.end) {
      filtered = filtered.filter((event) => {
        const eventYear = new Date(event.date).getFullYear()
        const afterStart = !yearRange.start || eventYear >= yearRange.start
        const beforeEnd = !yearRange.end || eventYear <= yearRange.end
        return afterStart && beforeEnd
      })
    }

    setFilteredEvents(filtered)
  }, [selectedCountry, yearRange, eventsContext?.events])

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

  const clearAllFilters = () => {
    setSelectedCountry('All')
    setYearRange({ start: null, end: null })
  }

  const hasActiveFilters =
    selectedCountry !== 'All' || yearRange.start || yearRange.end

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
                    <span className='bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent'>
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
                    <div className='relative aspect-[3/4] bg-neutral-800/50'></div>
                    <div className='p-6 space-y-4'>
                      <div className='h-6 bg-neutral-700/50 rounded w-3/4'></div>
                      <div className='h-4 bg-neutral-700/50 rounded w-1/2'></div>
                      <div className='h-4 bg-neutral-700/50 rounded w-2/3'></div>
                      <div className='h-10 bg-neutral-700/50 rounded-2xl mt-6'></div>
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
                  <span className='bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent'>
                    Events
                  </span>
                </h1>

                <p className='text-white/70 text-lg sm:text-xl font-light max-w-2xl leading-relaxed'>
                  Discover our full range of events that inspire innovation and
                  foster connections across industries
                </p>
              </div>
            </div>

            {/* Enhanced Filter Section */}
            <div className='mt-12 mb-8'>
              <div className='flex flex-col sm:flex-row gap-6'>
                {/* Country Filter */}
                <div className='flex-1 space-y-2'>
                  <label className='text-xs font-medium text-neutral-300 uppercase tracking-wider'>
                    Country
                  </label>
                  <div className='relative'>
                    <Select
                      value={selectedCountry}
                      onValueChange={setSelectedCountry}
                    >
                      <SelectTrigger className='w-full h-12 bg-neutral-900/50 backdrop-blur-sm border-neutral-700/50 rounded-xl px-4 text-white text-sm font-medium focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200'>
                        <div className='flex items-center'>
                          <MapPin className='mr-3 h-4 w-4 text-neutral-400' />
                          <SelectValue
                            placeholder='Select a country'
                            className='capitalize'
                          />
                        </div>
                      </SelectTrigger>
                      <SelectContent className='bg-neutral-900/95 backdrop-blur-xl border-neutral-700/50 text-white shadow-2xl capitalize'>
                        {countries.map((country) => (
                          <SelectItem
                            key={country}
                            value={country}
                            className='focus:bg-neutral-800/50 focus:text-yellow-500 hover:bg-neutral-800/50'
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedCountry !== 'All' && (
                      <button
                        onClick={() => setSelectedCountry('All')}
                        className='absolute right-10 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-neutral-700/50 transition-colors'
                      >
                        <X className='h-3 w-3 text-neutral-400 hover:text-white' />
                      </button>
                    )}
                  </div>
                </div>

                {/* Year Range Filter */}
                <div className='flex-1 space-y-2'>
                  <label className='text-xs font-medium text-neutral-300 uppercase tracking-wider'>
                    Year Range
                  </label>
                  <YearRangePicker value={yearRange} onChange={setYearRange} />
                </div>
              </div>

              {/* Active Filters & Clear All */}
              {hasActiveFilters && (
                <div className='flex items-center justify-between mt-6 pt-6 border-t border-neutral-800/50'>
                  <div className='flex items-center gap-2'>
                    <span className='text-sm text-neutral-400'>
                      Active filters:
                    </span>
                    {selectedCountry !== 'All' && (
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'>
                        {selectedCountry}
                      </span>
                    )}
                    {(yearRange.start || yearRange.end) && (
                      <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'>
                        {yearRange.start && yearRange.end
                          ? `${yearRange.start} - ${yearRange.end}`
                          : yearRange.start
                          ? `From ${yearRange.start}`
                          : `Until ${yearRange.end}`}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className='text-sm text-neutral-400 hover:text-yellow-500 transition-colors font-medium'
                  >
                    Clear all filters
                  </button>
                </div>
              )}
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
              <div className='col-span-full text-center py-16'>
                <div className='max-w-md mx-auto'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-800/50 flex items-center justify-center'>
                    <Calendar className='h-8 w-8 text-neutral-500' />
                  </div>
                  <h3 className='text-xl font-medium text-white mb-2'>
                    No events found
                  </h3>
                  <p className='text-neutral-400 mb-6'>
                    Try adjusting your filters to see more events.
                  </p>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className='inline-flex items-center px-4 py-2 rounded-lg bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors'
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
