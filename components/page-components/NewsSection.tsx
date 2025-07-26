import { useEffect, useState } from 'react'
import { Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { ModernCard } from '../ModernCard'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface NewsItem {
  title: string
  description: string
  tags: string[]
  image: string | null
  link: string
}

interface WpPost {
  id: number
  date: string
  title: { rendered: string }
  featured_media: number
  tags: number[]
  link: string
}

interface Media {
  source_url: string
}

export default function NewsSection({
  title = 'The Latest News',
  titleHighlight = 'News',
  sectionId = 'news',
}: {
  title?: string
  titleHighlight?: string
  sectionId?: string
}) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [mediaCache, setMediaCache] = useState<{
    [key: number]: string | null
  }>({})
  const router = useRouter()

  useEffect(() => {
    async function safeGet<T>(url: string): Promise<T> {
      try {
        const res = await axios.get<T>(url)
        return res.data
      } catch {
        const res = await fetch(url)
        if (!res.ok) throw new Error('Network response was not ok')
        return (await res.json()) as T
      }
    }

    async function fetchNews() {
      try {
        const posts = await safeGet<WpPost[]>(
          'https://avisengine.com/wp-json/wp/v2/posts?categories=14&per_page=3'
        )

        const newsItems: NewsItem[] = []
        for (const post of posts) {
          let imageUrl: string | null = null
          if (post.featured_media) {
            if (mediaCache[post.featured_media]) {
              imageUrl = mediaCache[post.featured_media]
            } else {
              try {
                const media = await safeGet<Media>(
                  `https://avisengine.com/wp-json/wp/v2/media/${post.featured_media}`
                )
                imageUrl = media.source_url
                setMediaCache((prev) => ({
                  ...prev,
                  [post.featured_media]: imageUrl,
                }))
              } catch (err) {
                console.error(`Error fetching media for post ${post.id}:`, err)
              }
            }
          }

          newsItems.push({
            title: post.title.rendered,
            description: `${new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })} • News`,
            tags:
              post.tags.length > 0 ? post.tags.map(String) : ['News', 'Update'],
            image: imageUrl,
            link: `/${post.id}`,
          })
        }
        setNews(newsItems)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }
    fetchNews()
  }, [mediaCache])

  if (loading) {
    return <div className='text-center py-32 text-white'>Loading...</div>
  }

  return (
    <section id={sectionId} className='py-32 px-6'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20 relative'
        >
          <h2 className='text-5xl md:text-6xl font-thin mb-8'>
            {title.replace(titleHighlight, '')}{' '}
            <HolographicText className='font-light'>
              {titleHighlight}
            </HolographicText>
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {news.slice(0, 3).map((item, index) => (
            <ModernCard key={item.title} delay={0.1 * (index + 1)}>
              <div onMouseEnter={() => router.prefetch(item.link)}>
                <Link href={item.link} prefetch={false}>
                  <div className='space-y-6'>
                    {item.image && (
                      <div className='relative overflow-hidden rounded-lg aspect-[4/3]'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          className='w-full h-full object-cover cursor-pointer'
                          priority={index === 0}
                        />
                      </div>
                    )}

                    <div className='flex items-center justify-between'>
                      <div className='flex-1' />
                      <div>
                        <Code className='w-4 h-4 text-accent' />
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <h3 className='text-xl font-light leading-relaxed cursor-pointer hover:text-accent transition-colors'>
                        {item.title}
                      </h3>
                      <p className='text-neutral-500 text-sm'>
                        {item.description}
                      </p>
                    </div>

                    <div className='flex flex-wrap gap-2 pt-4'>
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className='px-3 py-1 text-xs bg-secondary rounded-full border cursor-pointer hover:border-accent/50 transition-colors'
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}
