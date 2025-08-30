'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { HolographicText } from '../HolographicText'
import { ModernCard } from '../ModernCard'

interface WpPost {
  id: number
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  tags: number[]
}

interface Media {
  source_url: string
}

interface Tag {
  id: number
  name: string
}

interface MagazinePost {
  id: number
  title: string
  description: string
  image: string | null
  link: string
  tags: string[]
}

export default function MagazineSection({
  title = 'The AVIS',
  titleHighlight = 'Magazine',
  sectionId = 'magazine',
}: {
  title?: string
  titleHighlight?: string
  sectionId?: string
}) {
  const [magazines, setMagazines] = useState<MagazinePost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMagazineData() {
      try {
        const response = await axios.get<WpPost[]>(
          'https://avisengine.com/wp-json/wp/v2/posts?categories=13&per_page=6'
        )
        const posts = response.data

        const tagResponse = await axios.get<Tag[]>(
          'https://avisengine.com/wp-json/wp/v2/tags?per_page=100'
        )
        const tagsMap = new Map(
          tagResponse.data.map((tag) => [tag.id, tag.name])
        )

        const magazinePosts: MagazinePost[] = []

        for (const post of posts) {
          let featuredImage: string | null = null
          if (post.featured_media) {
            try {
              const media = await axios.get<Media>(
                `https://avisengine.com/wp-json/wp/v2/media/${post.featured_media}`
              )
              featuredImage = media.data.source_url
            } catch (err) {
              console.error(`Error fetching media for post ${post.id}:`, err)
            }
          }

          magazinePosts.push({
            id: post.id,
            title: post.title.rendered,
            description: post.excerpt.rendered.replace(/<p>|<\/p>/g, '').trim(),
            image: featuredImage,
            link: `/${post.id}?category=13`,
            tags: post.tags
              .map((tagId) => tagsMap.get(tagId) || '')
              .filter(Boolean),
          })
        }

        setMagazines(magazinePosts)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching magazine posts:', err)
        setLoading(false)
      }
    }
    fetchMagazineData()
  }, [])

  const dataToUse = magazines

  if (loading) {
    return (
      <div className='min-h-[400px] bg-black flex items-center justify-center'>
        <div className='text-white text-lg animate-pulse'>
          Loading magazines...
        </div>
      </div>
    )
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
          {dataToUse.slice(0, 3).map((item, index) => (
            <ModernCard key={item.id} delay={0.1 * (index + 1)}>
              <div className='space-y-6'>
                {item.image && (
                  <div className='relative overflow-hidden rounded-lg aspect-[0.71]'>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover cursor-pointer'
                      onClick={() => window.open(item.link, '_blank')}
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
                  <h3
                    className='text-xl font-light leading-relaxed cursor-pointer hover:text-accent transition-colors'
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className='flex flex-wrap gap-2 pt-4'>
                  {item.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      // initial={{ opacity: 0, scale: 0 }}
                      // whileInView={{ opacity: 1, scale: 1 }}
                      // transition={{ delay: tagIndex * 0.1 }}
                      // whileHover={{ scale: 1.1, y: -2 }}
                      className='px-3 py-1 text-xs bg-secondary rounded-full border cursor-pointer hover:border-accent/50 transition-colors'
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}
