'use client'

import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

interface ChangelogEntry {
  version: string
  date: string
  title: string
  content: string
}

const changelogData: ChangelogEntry[] = [
  {
    version: '2.3.1',
    date: 'August 1, 2025',
    title: 'Critical bug fixes and performance optimizations',
    content: `## Critical fixes

Fixed several critical issues that were affecting user experience and system stability.

## Performance optimizations

- Improved loading times by 40%
- Reduced memory usage in large projects
- Better caching mechanisms

## Minor improvements

Various UI tweaks and accessibility improvements based on user feedback.`,
  },
  {
    version: '2.0.1',
    date: 'July 25, 2025',
    title: 'Hotfix for deployment issues',
    content: `## Deployment fixes

Resolved critical deployment issues that were preventing proper application startup.

## Database improvements

- Fixed connection pooling issues
- Improved query performance
- Better error handling for database operations`,
  },
  {
    version: '2.0.0',
    date: 'July 20, 2025',
    title: 'Major version release with new architecture',
    content: `## Complete architecture overhaul

Rebuilt the entire application with modern technologies and improved scalability.

## New features

- Advanced user management system
- Real-time notifications
- Enhanced security measures
- Modern UI/UX design

## Breaking changes

This is a major version update with breaking changes. Please refer to the migration guide.`,
  },
  {
    version: '1.3',
    date: 'July 15, 2025',
    title: 'Shared terminal with Agent and faster edits',
    content: `## Share terminal with Agent

Agents can now use your native terminal. A new terminal will be created when needed and runs in the background if one isn't already open.

## Context usage in chat

You can now see how much context you're using in your current chat.

## Faster edits

We've significantly improved the speed of code edits. Changes now appear faster and feel more responsive.`,
  },
  {
    version: '1.2.9',
    date: 'July 10, 2025',
    title: 'Enhanced file handling and bug fixes',
    content: `## File handling improvements

- Better support for large files
- Improved file upload/download speeds
- Enhanced file type detection

## Bug fixes

Fixed various issues with file processing and terminal state management.`,
  },
  {
    version: '1.2.8',
    date: 'July 5, 2025',
    title: 'Security updates and performance improvements',
    content: `## Security enhancements

- Updated dependencies to latest secure versions
- Improved authentication mechanisms
- Enhanced data encryption

## Performance updates

General performance improvements across the application.`,
  },
  {
    version: '1.2.7',
    date: 'June 30, 2025',
    title: 'UI improvements and accessibility features',
    content: `## Accessibility improvements

- Better keyboard navigation
- Improved screen reader support
- Enhanced contrast ratios

## UI enhancements

Various visual improvements and user experience refinements.`,
  },
  {
    version: '1.2.6',
    date: 'June 25, 2025',
    title: 'Bug fixes and stability improvements',
    content: `## Stability improvements

- Fixed memory leaks in long-running sessions
- Improved error handling
- Better recovery from network issues

## Minor features

Small feature additions based on user requests.`,
  },
  {
    version: '1.2.4',
    date: 'June 20, 2025',
    title: 'Terminal enhancements and collaboration features',
    content: `## Terminal improvements

- Better command history
- Improved autocomplete functionality
- Support for custom aliases

## Collaboration features

Enhanced real-time collaboration with better conflict resolution.`,
  },
  {
    version: '1.2.0',
    date: 'June 15, 2025',
    title: 'Major feature release with new capabilities',
    content: `## New capabilities

- Advanced search functionality
- Bulk operations support
- Custom themes and personalization

## Performance improvements

Significant improvements to overall application performance and responsiveness.`,
  },
]

const ChangelogPage = () => {
  const [activeVersion, setActiveVersion] = useState<string>('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-version]')
      let current = ''
      let progress = 0

      // Calculate scroll progress
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight
      progress = Math.min(scrollTop / documentHeight, 1)
      setScrollProgress(progress)

      // Find active section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200) {
          current = section.getAttribute('data-version') || ''
        }
      })

      setActiveVersion(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderMDX = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h3
            key={index}
            className='text-base font-medium text-white mt-6 mb-3 first:mt-0'
          >
            {line.replace('## ', '')}
          </h3>
        )
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className='text-white/50 text-sm ml-4 mb-1 list-disc'>
            {line.replace('- ', '')}
          </li>
        )
      }
      if (line.trim() === '') {
        return <div key={index} className='h-2' />
      }
      return (
        <p key={index} className='text-white/50 text-sm mb-3 leading-relaxed'>
          {line}
        </p>
      )
    })
  }

  return (
    <div className='min-h-screen bg-black text-white my-[20vh]'>
      {/* Header */}
      <div className='border-b border-white/20 max-w-[90vw] m-auto'>
        <div className='max-w-6xl mx-auto py-3'>
          <h1 className='text-3xl font-bold'>Changelog</h1>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex py-16'>
        {/* Left Sidebar */}
        <div className='w-1/4 pr-6 relative'>
          {/* Line */}
          <div className='absolute right-0 top-8 bottom-8 w-px bg-white/15'>
            <div
              className='absolute w-full bg-gradient-to-b from-transparent via-white to-transparent  transition-all duration-300 top-0'
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Sticky container */}
          <div className='sticky top- space-y-24 pl-4'>
            {changelogData.map((entry) => (
              <div
                key={entry.version}
                className={`min-h-[80vh] sticky top-32 bg-black`}
              >
                <div
                  className={`text-xs transition-colors  ${
                    activeVersion === entry.version
                      ? 'text-neutral-300'
                      : 'text-neutral-800'
                  }`}
                >
                  {entry.date}
                </div>
                <Badge
                  className={`text-sm font-semibold mt-3 transition-colors bg-white/[0.05] border-white/15 ${
                    activeVersion === entry.version
                      ? 'text-white'
                      : 'text-neutral-700 '
                  }`}
                >
                  v{entry.version}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className='w-3/4 pl-6'>
          {changelogData.map((entry) => (
            <section
              key={entry.version}
              data-version={entry.version}
              className='mb-24 scroll-mt-20 min-h-[80vh]'
            >
              <div className='relative rounded-full bg-white h-4 w-4 -left-8 top-6'></div>
              <h2 className='text-xl font-semibold mb-4'>{entry.title}</h2>
              <div className='prose prose-invert prose-sm max-w-none'>
                {renderMDX(entry.content)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChangelogPage
