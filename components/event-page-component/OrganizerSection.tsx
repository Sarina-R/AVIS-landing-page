import { useState } from 'react'
import {
  CheckCircle,
  Smartphone,
  Shield,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import MobileTiltMockup from './MobileMockupSvg'

const OrganizerSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const organizerFeatures = [
    {
      icon: CheckCircle,
      title: 'Self Check-in Solutions',
      description: 'Check in fast!',
      details:
        'Streamline your event entry with automated self-service kiosks and mobile check-in options. Reduce wait times and enhance attendee experience from the moment they arrive.',
    },
    {
      icon: Smartphone,
      title: 'Event Mobile App',
      description: 'Easy access to event info',
      details:
        'Give attendees instant access to schedules, speaker profiles, venue maps, and real-time updates through a branded mobile application tailored to your event.',
    },
    {
      icon: Shield,
      title: 'Role-based Access',
      description: 'Organizers role management',
      details:
        'Assign specific permissions and access levels to team members, volunteers, and staff. Maintain security while ensuring everyone has the tools they need.',
    },
    {
      icon: MapPin,
      title: 'Event Scope Management',
      description: 'Authorized access to event areas and scopes',
      details:
        'Control access to different venues, sessions, and restricted areas. Manage VIP zones, backstage areas, and exclusive networking spaces with precision.',
    },
  ]

  return (
    <section className='relative pt-20 mb-0 overflow-hidden'>
      {/* SVG Background */}
      <svg
        className='absolute inset-0 w-full h-full opacity-10'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        viewBox='0 0 800 800'
      >
        <g fill='none' stroke='white' strokeWidth='0.5'>
          <circle cx='400' cy='400' r='200' />
          <circle cx='400' cy='400' r='300' />
          <circle cx='400' cy='400' r='400' />
          <line x1='0' y1='400' x2='800' y2='400' />
          <line x1='400' y1='0' x2='400' y2='800' />
        </g>
      </svg>

      <div className='relative max-w-6xl mx-auto'>
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
          {organizerFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className='group relative bg-black/50 backdrop-blur-md p-6 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden'
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Subtle pattern overlay */}
                <div
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,white/5,transparent)] transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                <div className='absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none'>
                  <Icon className='w-64 h-64 text-white/15 [mask-image:linear-gradient(to_bottom,white,transparent)]' />
                </div>

                {/* Content */}
                <div
                  className={`relative z-10 ${
                    index === 0 || index === 1 ? 'flex' : ''
                  } `}
                >
                  <div className=''>
                    <div className='flex items-start gap-4 mb-4'>
                      <Icon className='w-6 h-6 text-white/80' />
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors duration-300'>
                          {feature.title}
                        </h3>
                        <p className='text-sm text-white/60 mb-2'>
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <p className='text-base text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300'>
                      {feature.details}
                    </p>
                    {/* Hover arrow */}
                    <div
                      className={`flex items-center mt-4 text-white/70 transition-all duration-300 ${
                        hoveredCard === index
                          ? 'translate-x-1 opacity-100'
                          : 'translate-x-0 opacity-0'
                      }`}
                    >
                      <span className='text-xs font-medium mr-1'>
                        Learn more
                      </span>
                      <ArrowRight className='w-3 h-3' />
                    </div>
                  </div>

                  {index === 0 && (
                    <div className='mt-4 flex justify-center opacity-60'>
                      <svg
                        width='200'
                        height='300'
                        viewBox='0 0 200 300'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g
                          fill='none'
                          stroke='#FFFFFF'
                          stroke-width='1.2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path
                            d='M50 290 L70 278 H130 L150 290'
                            opacity='0.6'
                          />
                          <line
                            x1='50'
                            y1='290'
                            x2='150'
                            y2='290'
                            opacity='0.6'
                          />
                          <ellipse
                            cx='100'
                            cy='285'
                            rx='50'
                            ry='2'
                            stroke-width='0.6'
                            opacity='0.4'
                          >
                            <animate
                              attributeName='rx'
                              values='50;55;50'
                              dur='3s'
                              repeatCount='indefinite'
                            />
                          </ellipse>

                          <line x1='85' y1='278' x2='85' y2='200' />
                          <line x1='115' y1='278' x2='115' y2='200' />
                          <line x1='60' y1='200' x2='140' y2='200' />

                          <rect
                            x='55'
                            y='90'
                            width='90'
                            height='110'
                            rx='12'
                            ry='12'
                          />

                          <rect
                            x='62'
                            y='105'
                            width='76'
                            height='80'
                            rx='8'
                            ry='8'
                          />
                          <line
                            x1='62'
                            y1='115'
                            x2='138'
                            y2='115'
                            stroke-width='0.8'
                            opacity='0.3'
                          />
                          <line
                            x1='62'
                            y1='170'
                            x2='138'
                            y2='170'
                            stroke-width='0.8'
                            opacity='0.3'
                          />

                          <circle cx='100' cy='85' r='4' />
                          <circle
                            cx='100'
                            cy='85'
                            r='6'
                            stroke-width='0.8'
                            opacity='0.2'
                          >
                            <animate
                              attributeName='r'
                              values='6;10;6'
                              dur='1.5s'
                              repeatCount='indefinite'
                            />
                            <animate
                              attributeName='opacity'
                              values='0.2;0.1;0.2'
                              dur='1.5s'
                              repeatCount='indefinite'
                            />
                          </circle>

                          <line
                            id='scan-line'
                            x1='62'
                            y1='115'
                            x2='138'
                            y2='115'
                            stroke='#4FC3F7'
                            stroke-width='1.5'
                          >
                            <animate
                              id='scan'
                              attributeName='y1'
                              values='115;175;115'
                              keyTimes='0;0.5;1'
                              dur='2s'
                              repeatCount='1'
                              begin='moveIn.end'
                              calcMode='spline'
                              keySplines='0.42 0 0.58 1;0.42 0 0.58 1'
                            />
                            <animate
                              attributeName='y2'
                              values='115;175;115'
                              keyTimes='0;0.5;1'
                              dur='2s'
                              repeatCount='1'
                              begin='moveIn.end'
                              calcMode='spline'
                              keySplines='0.42 0 0.58 1;0.42 0 0.58 1'
                            />
                          </line>
                          <set attributeName='y1' to='115' begin='reset.end' />
                          <set attributeName='y2' to='115' begin='reset.end' />

                          <g id='processing' opacity='0'>
                            <animate
                              id='processShow'
                              attributeName='opacity'
                              from='0'
                              to='1'
                              dur='0.2s'
                              begin='scan.end'
                              fill='freeze'
                            />
                            <animate
                              attributeName='opacity'
                              from='1'
                              to='0'
                              dur='0.5s'
                              begin='process.end'
                              fill='freeze'
                            />
                            <circle cx='75' cy='150' r='3' stroke='#4FC3F7'>
                              <animate
                                attributeName='r'
                                values='3;5;3'
                                dur='1s'
                                begin='processShow.end'
                                repeatCount='1'
                              />
                            </circle>
                            <circle cx='100' cy='150' r='3' stroke='#4FC3F7'>
                              <animate
                                attributeName='r'
                                values='3;5;3'
                                dur='1s'
                                begin='processShow.end+0.33s'
                                repeatCount='1'
                              />
                            </circle>
                            <circle cx='125' cy='150' r='3' stroke='#4FC3F7'>
                              <animate
                                id='process'
                                attributeName='r'
                                values='3;5;3'
                                dur='1s'
                                begin='processShow.end+0.66s'
                                repeatCount='1'
                              />
                            </circle>
                          </g>

                          <g
                            id='phone-group'
                            transform='translate(160 0)'
                            opacity='0'
                          >
                            <animate
                              id='fadeIn'
                              attributeName='opacity'
                              from='0'
                              to='1'
                              dur='0.5s'
                              begin='0s;fadeCheck.end'
                              fill='freeze'
                            />
                            <animate
                              id='moveIn'
                              attributeName='transform'
                              type='translate'
                              from='160 0'
                              to='60 0'
                              dur='2.5s'
                              begin='fadeIn.end'
                              fill='freeze'
                              calcMode='spline'
                              keySplines='0.42 0 0.58 1'
                            />
                            <animate
                              id='moveOut'
                              attributeName='transform'
                              type='translate'
                              from='60 0'
                              to='160 0'
                              dur='2.5s'
                              begin='checkShow.end+1s'
                              fill='freeze'
                              calcMode='spline'
                              keySplines='0.42 0 0.58 1'
                            />
                            <set
                              id='reset'
                              attributeName='transform'
                              type='translate'
                              to='160 0'
                              begin='fadeOutPhone.end'
                              fill='freeze'
                            />

                            <rect
                              x='0'
                              y='125'
                              width='32'
                              height='60'
                              rx='6'
                              ry='6'
                            />
                            <line x1='12' y1='122' x2='20' y2='122' />

                            <rect
                              x='6'
                              y='140'
                              width='20'
                              height='20'
                              rx='2'
                              ry='2'
                            />
                            <rect x='8' y='142' width='6' height='6' />
                            <rect x='18' y='142' width='6' height='6' />
                            <rect x='8' y='152' width='6' height='6' />
                            <line x1='8' y1='149' x2='24' y2='149' />
                            <line x1='8' y1='151' x2='24' y2='151' />
                          </g>

                          <g id='checkmark-group' opacity='0'>
                            <circle
                              cx='160'
                              cy='130'
                              r='15'
                              stroke='#00FF00'
                              fill='none'
                              stroke-width='1.5'
                            >
                              <animate
                                attributeName='r'
                                from='0'
                                to='15'
                                dur='0.5s'
                                begin='process.end'
                                fill='freeze'
                              />
                            </circle>
                            <path
                              id='checkmark'
                              d='M150 130 L158 138 L170 122'
                              stroke='#00FF00'
                              stroke-width='2'
                              stroke-dasharray='30 30'
                              stroke-dashoffset='30'
                            >
                              <animate
                                id='checkShow'
                                attributeName='stroke-dashoffset'
                                from='30'
                                to='0'
                                dur='0.8s'
                                begin='process.end+0.2s'
                                fill='freeze'
                              />
                            </path>
                            <animate
                              attributeName='opacity'
                              from='0'
                              to='1'
                              dur='0.2s'
                              begin='process.end'
                              fill='freeze'
                            />
                            <animate
                              id='fadeCheck'
                              attributeName='opacity'
                              from='1'
                              to='0'
                              dur='0.5s'
                              begin='checkShow.end+1s'
                              fill='freeze'
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  )}
                  {index === 1 && (
                    <div className='mt-16 px-5 flex justify-center opacity-60'>
                      <MobileTiltMockup />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OrganizerSection
