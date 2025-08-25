'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'
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
  country: string
}

interface EventsContextType {
  events: Event[]
  isUpcoming: boolean
  isLoading: boolean
}

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
)

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([])
  const [isUpcoming, setIsUpcoming] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
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
            country: item.country,
          }))
          .sort(
            (a: Event, b: Event) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          )

        const upcomingEvents = allEvents.filter(
          (e: Event) => new Date(e.date) >= currentDate
        )

        setEvents(allEvents) // Provide all events
        setIsUpcoming(upcomingEvents.length > 0)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <EventsContext.Provider value={{ events, isUpcoming, isLoading }}>
      {children}
    </EventsContext.Provider>
  )
}
