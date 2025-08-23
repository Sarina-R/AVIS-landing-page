import { useState } from 'react'
import {
  CheckCircle,
  Smartphone,
  Shield,
  MapPin,
  ArrowRight,
} from 'lucide-react'

const OrganizerSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const organizerFeatures = [
    {
      icon: <CheckCircle className='w-6 h-6' />,
      title: 'Self Check-in Solutions',
      description: 'Check in fast!',
      details:
        'Streamline your event entry with automated self-service kiosks and mobile check-in options. Reduce wait times and enhance attendee experience from the moment they arrive.',
    },
    {
      icon: <Smartphone className='w-6 h-6' />,
      title: 'Event Mobile App',
      description: 'Easy access to event info',
      details:
        'Give attendees instant access to schedules, speaker profiles, venue maps, and real-time updates through a branded mobile application tailored to your event.',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Role-based Access',
      description: 'Organizers role management',
      details:
        'Assign specific permissions and access levels to team members, volunteers, and staff. Maintain security while ensuring everyone has the tools they need.',
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Event Scope Management',
      description: 'Authorized access to event areas and scopes',
      details:
        'Control access to different venues, sessions, and restricted areas. Manage VIP zones, backstage areas, and exclusive networking spaces with precision.',
    },
  ]

  return (
    <section className='pt-20 mb-0'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
            AVIS Events for Organizers
          </h2>
          <p className='text-lg text-white/60 max-w-2xl mx-auto'>
            Powerful tools designed to streamline event management and enhance
            organizer efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {organizerFeatures.map((feature, index) => (
            <div
              key={index}
              className='group relative bg-black/50 backdrop-blur-sm p-6 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>

              {/* Content */}
              <div className='relative z-10'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <p className=' font-medium text-sm mb-3'>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <p className='text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300'>
                  {feature.details}
                </p>

                {/* Hover arrow */}
                <div
                  className={`flex items-center mt-4  transition-all duration-300 ${
                    hoveredCard === index
                      ? 'translate-x-2 opacity-100'
                      : 'translate-x-0 opacity-0'
                  }`}
                >
                  <span className='text-xs font-medium mr-1'>Learn more</span>
                  <ArrowRight className='w-3 h-3' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganizerSection
