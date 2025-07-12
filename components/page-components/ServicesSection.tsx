import { Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { HolographicText } from '../HolographicText'
import { ModernCard } from '../ModernCard'

export default function ServicesSection({
  title = 'Quantum Services',
  titleHighlight = 'Services',
  services = [],
  sectionId = 'services',
}) {
  const defaultServices = [
    {
      title:
        'AVIS MAGAZINE No.3 - Celebrating a Year of Innovation, Excellence, and Technological Breakthroughs',
      description: '10 months ago • AVIS Magazine',
      tags: ['Innovation', 'Excellence', 'Breakthroughs'],
      image:
        'https://avisengine.com/wp-content/uploads/2024/09/Free_Book_Mockup_8-1024x768.png',
      link: 'https://avisengine.com/avis-magazine-no-3-celebrating-a-year-of-innovation-excellence-and-technological-breakthroughs/',
    },
    {
      title:
        'THE BEST IN THE ENGINEERING WORLD February 2024 No.5 - The Best in the Engineering World magazine No.5',
      description: '1 year ago • AVIS Magazine',
      tags: ['Autonomous', 'Companies', 'Startups'],
      image:
        'https://avisengine.com/wp-content/uploads/2024/01/Screen-Shot-2024-02-13-at-12.04.40-PM.png',
      link: 'https://avisengine.com/the-best-in-the-engineering-world-magazine-no-5/',
    },
    {
      title:
        'THE BEST IN THE ENGINEERING WORLD December 2023 No.4 - The Best in the Engineering World magazine No.4',
      description: '2 years ago • AVIS Magazine',
      tags: ['Teams', 'Competitions', 'Engineering'],
      image:
        'https://avisengine.com/wp-content/uploads/2023/12/Screen-Shot-2024-02-13-at-12.08.07-PM.png',
      link: 'https://avisengine.com/the-best-in-the-engineering-world-magazine-no-4/',
    },
  ]

  const latestNews = [
    {
      title:
        'AVIS Group Announced as Official Sponsor of FIRA Indonesia Open 2025',
      description: '2 weeks ago • News',
      tags: ['Sponsorship', 'FIRA', 'Indonesia'],
      image: null,
      link: 'https://avisengine.com/avis-group-announced-as-official-sponsor-of-fira-indonesia-open-2025/',
    },
    {
      title: 'A Powerful Tool for Autonomous Systems Research',
      description: '5 months ago • News',
      tags: ['Autonomous', 'Research', 'Tools'],
      image:
        'https://avisengine.com/wp-content/uploads/2025/02/5839083660857427902.jpg',
      link: 'https://avisengine.com/%f0%9f%9a%80-a-powerful-tool-for-autonomous-systems-research-2/',
    },
    {
      title: 'AVIS Global Autonomous Vehicles Simulator',
      description: '5 months ago • News',
      tags: ['Simulator', 'Autonomous', 'Vehicles'],
      image: 'https://avisengine.com/wp-content/uploads/2025/02/og.webp',
      link: 'https://avisengine.com/avis-global-events-pioneering-the-future-of-innovation/',
    },
  ]

  const dataToUse =
    services.length > 0
      ? services
      : title.includes('News')
      ? latestNews
      : defaultServices

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
          {dataToUse.map((service, index) => (
            <ModernCard key={service.title} delay={0.1 * (index + 1)}>
              <div className='space-y-6'>
                {service.image && (
                  <div className='relative overflow-hidden rounded-lg'>
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-48 object-cover cursor-pointer'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => window.open(service.link, '_blank')}
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
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    {service.title}
                  </h3>
                  <p className='text-neutral-500 text-sm'>
                    {service.description}
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 pt-4'>
                  {service.tags.map((tag, tagIndex) => (
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
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
}
