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
}

interface EventsContextType {
  events: Event[]
  isUpcoming: boolean
}

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
)

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([])
  const [isUpcoming, setIsUpcoming] = useState(true)

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
        setIsUpcoming(upcomingEvents.length > 0)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
      })
  }, [])

  return (
    <EventsContext.Provider value={{ events, isUpcoming }}>
      {children}
    </EventsContext.Provider>
  )
}
