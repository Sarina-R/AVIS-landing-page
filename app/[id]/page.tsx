'use client'

import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface WpPost {
  id: number
  date: string
  modified: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  author: number
  featured_media: number
  categories: number[]
  tags: number[]
  meta: Record<string, string>
  comment_status: string
  ping_status: string
  sticky: boolean
  format: string
}

interface Media {
  source_url: string
}

interface Article {
  id: number
  title: string
  content: string
  excerpt: string
  date: string
  modified: string
  author: number
  categories: number[]
  tags: number[]
  meta: Record<string, string>
  featuredImage: string | null
  contentImages: string[]
  commentStatus: string
  pingStatus: string
  sticky: boolean
  format: string
}

interface RelatedArticle {
  id: number
  title: string
  featuredImage: string | null
  link: string
}

interface PageProps {
  params: { id: string }
  searchParams: { category?: string }
}

const createDOMParser = () => {
  if (typeof window === 'undefined') {
    return null
  }
  return new DOMParser()
}

const isMagazineCategory = (categories: number[]) => categories.includes(13)

export default function NewsArticle({ params, searchParams }: PageProps) {
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([])
  const [prevArticle, setPrevArticle] = useState<RelatedArticle | null>(null)
  const [nextArticle, setNextArticle] = useState<RelatedArticle | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticleData() {
      try {
        const resolvedParams = params
        const resolvedSearchParams = searchParams
        const category = resolvedSearchParams?.category || '14'

        const response = await axios.get<WpPost>(
          `https://avisengine.com/wp-json/wp/v2/posts/${resolvedParams.id}`
        )
        const post = response.data

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

        const contentImages = extractImages(post.content.rendered).filter(
          (img) => img !== featuredImage
        )

        setArticle({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered.replace(/<p>|<\/p>/g, '').trim(),
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          modified: new Date(post.modified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          author: post.author,
          categories: post.categories,
          tags: post.tags,
          meta: post.meta,
          featuredImage,
          contentImages,
          commentStatus: post.comment_status,
          pingStatus: post.ping_status,
          sticky: post.sticky,
          format: post.format,
        })

        // Fetch related posts based on the category
        const relatedResponse = await axios.get<WpPost[]>(
          `https://avisengine.com/wp-json/wp/v2/posts?categories=${category}&per_page=10`
        )
        const relatedPosts = relatedResponse.data.filter(
          (p) => p.id !== post.id
        )

        const currentIndex = relatedResponse.data.findIndex(
          (p) => p.id === post.id
        )
        const prevPost =
          currentIndex > 0 ? relatedResponse.data[currentIndex - 1] : null
        const nextPost =
          currentIndex < relatedResponse.data.length - 1
            ? relatedResponse.data[currentIndex + 1]
            : null

        if (prevPost) {
          let prevImage: string | null = null
          if (prevPost.featured_media) {
            try {
              const media = await axios.get<Media>(
                `https://avisengine.com/wp-json/wp/v2/media/${prevPost.featured_media}`
              )
              prevImage = media.data.source_url
            } catch (err) {
              console.error(
                `Error fetching media for prev post ${prevPost.id}:`,
                err
              )
            }
          }
          setPrevArticle({
            id: prevPost.id,
            title: prevPost.title.rendered,
            featuredImage: prevImage,
            link: `/${prevPost.id}?category=${category}`,
          })
        }

        if (nextPost) {
          let nextImage: string | null = null
          if (nextPost.featured_media) {
            try {
              const media = await axios.get<Media>(
                `https://avisengine.com/wp-json/wp/v2/media/${nextPost.featured_media}`
              )
              nextImage = media.data.source_url
            } catch (err) {
              console.error(
                `Error fetching media for next post ${nextPost.id}:`,
                err
              )
            }
          }
          setNextArticle({
            id: nextPost.id,
            title: nextPost.title.rendered,
            featuredImage: nextImage,
            link: `/${nextPost.id}?category=${category}`,
          })
        }

        const shuffledPosts = relatedPosts
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
        const relatedArticlesData: RelatedArticle[] = []
        for (const relatedPost of shuffledPosts) {
          let relatedImage: string | null = null
          if (relatedPost.featured_media) {
            try {
              const media = await axios.get<Media>(
                `https://avisengine.com/wp-json/wp/v2/media/${relatedPost.featured_media}`
              )
              relatedImage = media.data.source_url
            } catch (err) {
              console.error(
                `Error fetching media for related post ${relatedPost.id}:`,
                err
              )
            }
          }
          relatedArticlesData.push({
            id: relatedPost.id,
            title: relatedPost.title.rendered,
            featuredImage: relatedImage,
            link: `/${relatedPost.id}?category=${category}`,
          })
        }
        setRelatedArticles(relatedArticlesData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching article:', err)
        setLoading(false)
      }
    }
    fetchArticleData()
  }, [params, searchParams])

  const { cleanedHtml, galleryImages } = useMemo(() => {
    if (typeof window === 'undefined' || !article?.content) {
      return { cleanedHtml: '', galleryImages: [] }
    }

    const parser = createDOMParser()
    if (!parser) {
      return { cleanedHtml: article.content, galleryImages: [] }
    }

    const doc = parser.parseFromString(article.content, 'text/html')
    const galleryFigures = doc.querySelectorAll('figure.wp-block-gallery')

    const images: string[] = []
    galleryFigures.forEach((gallery) => {
      const imgs = gallery.querySelectorAll('img')
      imgs.forEach((img) => {
        if (img.src) images.push(img.src)
      })
      gallery.remove()
    })

    return {
      cleanedHtml: doc.body.innerHTML,
      galleryImages: images,
    }
  }, [article?.content])

  const extractImages = (content: string): string[] => {
    const imgRegex = /<img[^>]+src=["'](.*?)["']/g
    const images: string[] = []
    let match
    while ((match = imgRegex.exec(content)) !== null) {
      images.push(match[1])
    }
    return images
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <p>Loading...</p>
      </div>
    )
  }

  if (!article) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-black text-white font-sans news-video'>
      <div className='max-w-4xl mx-auto py-32 px-6'>
        <Link
          href='/'
          className='text-accent hover:underline mb-8 inline-block'
        >
          ← Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Show book mockup only for magazine category */}
          {article && isMagazineCategory(article.categories) && (
            <div className='container mx-auto px-4 py-16'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='relative w-full md:w-1/2 max-w-[400px] aspect-[3/4]'>
                  {/* Book container with 3D effects */}
                  <div
                    className='relative w-full h-full'
                    style={{
                      perspective: '1500px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Front Cover */}
                    <Image
                      src={article.featuredImage || '/default-book-cover.jpg'}
                      alt={article.title}
                      fill
                      className='object-cover rounded-lg'
                      style={{
                        boxShadow: '2px 2px 20px rgba(0,0,0,0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      priority
                    />

                    {/* Spine */}
                    <div
                      className='absolute left-0 top-0 bottom-0 w-[30px] bg-gradient-to-r from-black/60 to-transparent'
                      style={{
                        transform: 'translateX(-15px) rotateY(-80deg)',
                        transformOrigin: 'right',
                        background: 'linear-gradient(to right, #1a1a1a, #333)',
                        borderLeft: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />

                    {/* Page edges effect */}
                    <div
                      className='absolute right-0 top-1 bottom-1 w-[15px]'
                      style={{
                        background:
                          'linear-gradient(to left, #ffffff, #e0e0e0)',
                        transform: 'translateX(12px) rotateY(30deg)',
                        transformOrigin: 'left',
                        borderRadius: '0 2px 2px 0',
                      }}
                    />

                    {/* Top page edges */}
                    {/* <div
                      className='absolute top-0 left-5 right-5 h-[2px]'
                      style={{
                        background:
                          'linear-gradient(to right, #d4d4d4, #ffffff)',
                        transform: 'translateY(-1px)',
                      }}
                    /> */}

                    {/* Bottom page edges */}
                    {/* <div
                      className='absolute bottom-0 left-5 right-5 h-[2px]'
                      style={{
                        background:
                          'linear-gradient(to right, #d4d4d4, #ffffff)',
                        transform: 'translateY(1px)',
                      }}
                    /> */}

                    {/* Cover shine effect */}
                    <div
                      className='absolute inset-0 rounded-lg'
                      style={{
                        background:
                          'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Title Section */}
                <div className='md:w-1/2'>
                  <h1 className='text-3xl md:text-5xl font- leading-tight'>
                    {article.title}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {/* Regular content display for non-magazine categories */}
          {article && !isMagazineCategory(article.categories) && (
            <div className='prose prose-invert max-w-none'>
              <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-8'>
                {article.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: article.excerpt }} />
            </div>
          )}

          <div className='prose prose-invert max-w-none mb-8'>
            <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />

            {galleryImages.length > 0 && (
              <div className='mt-12'>
                <h2 className='text-2xl font-light mb-4'>Gallery</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {galleryImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Article image ${index + 1}`}
                      width={400}
                      height={400}
                      className='w-full h-auto rounded-lg object-cover'
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {(prevArticle || nextArticle) && (
            <div className='mt-12 border-t border-neutral-800 pt-8'>
              <h2 className='text-2xl font-light mb-4'>More Articles</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                {prevArticle && (
                  <Link href={prevArticle.link} className='group'>
                    <div className='flex items-center gap-4'>
                      <div className='flex-1'>
                        <p className='text-sm text-neutral-500 mb-2'>
                          Previous Article
                        </p>
                        <h3 className='text-lg font-light group-hover:text-accent transition-colors'>
                          {prevArticle.title}
                        </h3>
                      </div>
                      {prevArticle.featuredImage && (
                        <Image
                          src={prevArticle.featuredImage}
                          alt={prevArticle.title}
                          width={100}
                          height={100}
                          className='w-24 h-24 rounded-lg object-cover'
                        />
                      )}
                    </div>
                  </Link>
                )}
                {nextArticle && (
                  <Link href={nextArticle.link} className='group'>
                    <div className='flex items-center gap-4'>
                      <div className='flex-1'>
                        <p className='text-sm text-neutral-500 mb-2'>
                          Next Article
                        </p>
                        <h3 className='text-lg font-light group-hover:text-accent transition-colors'>
                          {nextArticle.title}
                        </h3>
                      </div>
                      {nextArticle.featuredImage && (
                        <Image
                          src={nextArticle.featuredImage}
                          alt={nextArticle.title}
                          width={100}
                          height={100}
                          className='w-24 h-24 rounded-lg object-cover'
                        />
                      )}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )}
          {relatedArticles.length > 0 && (
            <div className='mt-12 border-t border-neutral-800 pt-8'>
              <h2 className='text-2xl font-light mb-4'>You May Like</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {relatedArticles.slice(0, 3).map((related) => (
                  <Link key={related.id} href={related.link} className='group'>
                    <div className='space-y-4'>
                      {related.featuredImage && (
                        <Image
                          src={related.featuredImage}
                          alt={related.title}
                          width={300}
                          height={200}
                          className='w-full h-48 rounded-lg object-cover'
                        />
                      )}
                      <h3 className='text-lg font-light group-hover:text-accent transition-colors'>
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
