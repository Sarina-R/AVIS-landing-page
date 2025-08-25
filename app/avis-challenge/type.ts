export interface Event {
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
