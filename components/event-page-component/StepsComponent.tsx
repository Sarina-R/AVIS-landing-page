import React, { useState } from 'react'
import { Award, Users, CheckCircle, Home } from 'lucide-react'

const PageBuilderSteps = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      icon: Home,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500',
      title: 'Design your home page.',
      description:
        'Set your event title, dates, location and main call-to-action.',
      highlight: 'home',
    },
    {
      id: 2,
      icon: Users,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      title: 'Manage your teams section.',
      description:
        'Display registered teams with pagination and filtering options.',
      highlight: 'teams',
    },
    {
      id: 3,
      icon: CheckCircle,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      title: 'Configure qualified teams.',
      description: 'Showcase teams that have advanced to the next round.',
      highlight: 'qualified',
    },
    {
      id: 4,
      icon: Award,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
      title: 'Setup awards section.',
      description: 'Display winners, rankings, and achievement categories.',
      highlight: 'awards',
    },
  ]

  const renderWebsite = () => {
    if (activeStep === 1) {
      return (
        <div className='h-[450px] bg-black border border-white/10 rounded-lg relative overflow-hidden'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 bg-black border-b border-white/10'>
            <div className='text-white text-sm font-bold'>Your Event Logo</div>
            <div className='flex space-x-4 text-white/80 text-xs'>
              <span className='text-teal-400'>Home</span>
              <span>Teams</span>
              <span>Results</span>
              <span>Dashboard</span>
            </div>
          </div>

          {/* Hero content with teal highlights */}
          <div className='p-6 h-full flex flex-col justify-center bg-gradient-to-br from-teal-900/20 to-black'>
            <div className='mb-4'>
              <div className='bg-teal-600/30 border border-teal-600 border-dashed rounded-lg p-3 mb-4'>
                <div className='text-teal-400 text-xs mb-1'>
                  Event Title Input
                </div>
                <div className='text-white text-lg font-bold'>
                  FIRA RoboWorld Cup and Congress 2024
                </div>
              </div>

              <div className='flex gap-4 mb-4'>
                <div className='bg-teal-600/30 border border-teal-600 border-dashed rounded p-2 flex-1'>
                  <div className='text-teal-400 text-xs'>Date Input</div>
                  <div className='text-white text-sm'>23 - 27 Aug 2024</div>
                </div>
                <div className='bg-teal-600/30 border border-teal-600 border-dashed rounded p-2 flex-1'>
                  <div className='text-teal-400 text-xs'>Location Input</div>
                  <div className='text-white text-sm'>Kaohsiung, Taiwan</div>
                </div>
              </div>

              <div className='bg-teal-600/30 border border-teal-600 border-dashed rounded p-2'>
                <div className='text-teal-400 text-xs mb-2'>
                  CTA Button Input
                </div>
                <button className='bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition-colors'>
                  Register Your Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (activeStep === 2) {
      return (
        <div className='h-[450px] bg-black border border-white/10 rounded-lg'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 bg-black border-b border-white/10'>
            <div className='text-white text-sm font-bold'>Your Event Logo</div>
            <div className='flex space-x-4 text-white/80 text-xs'>
              <span>Home</span>
              <span className='text-orange-400'>Teams</span>
              <span>Results</span>
              <span>Dashboard</span>
            </div>
          </div>

          <div className='p-6'>
            <div className='bg-orange-600/30 border border-orange-600 border-dashed rounded-lg p-3 mb-4'>
              <div className='text-orange-400 text-xs mb-1'>
                Page Title Input
              </div>
              <h3 className='text-white text-lg font-bold'>Registered Teams</h3>
            </div>

            <div className='grid grid-cols-2 gap-3 mb-4'>
              {['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta'].map(
                (team, index) => (
                  <div
                    key={team}
                    className='bg-orange-600/30 border border-orange-600 border-dashed rounded p-3'
                  >
                    <div className='text-orange-400 text-xs mb-1'>
                      Team Card Input
                    </div>
                    <div className='text-white text-sm font-medium'>{team}</div>
                    <div className='text-white/60 text-xs'>University Name</div>
                  </div>
                )
              )}
            </div>

            {/* Pagination */}
            <div className='bg-orange-600/30 border border-orange-600 border-dashed rounded p-2'>
              <div className='text-orange-400 text-xs mb-2'>
                Pagination Settings
              </div>
              <div className='flex justify-center space-x-2'>
                <button className='w-6 h-6 bg-black border border-white/10 rounded text-white text-xs'>
                  1
                </button>
                <button className='w-6 h-6 bg-orange-600 rounded text-white text-xs'>
                  2
                </button>
                <button className='w-6 h-6 bg-black border border-white/10 rounded text-white text-xs'>
                  3
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (activeStep === 3) {
      return (
        <div className='h-[450px] bg-black border border-white/10 rounded-lg'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 bg-black border-b border-white/10'>
            <div className='text-white text-sm font-bold'>Your Event Logo</div>
            <div className='flex space-x-4 text-white/80 text-xs'>
              <span>Home</span>
              <span>Teams</span>
              <span className='text-blue-400'>Qualified Teams</span>
              <span>Dashboard</span>
            </div>
          </div>

          <div className='p-6'>
            <div className='bg-blue-600/30 border border-blue-600 border-dashed rounded-lg p-3 mb-4'>
              <div className='text-blue-400 text-xs mb-1'>
                Section Title Input
              </div>
              <h3 className='text-white text-lg font-bold'>Qualified Teams</h3>
            </div>

            <div className='space-y-3 mb-4'>
              {['Team Champions', 'Team Elite', 'Team Victory'].map(
                (team, index) => (
                  <div
                    key={team}
                    className='bg-blue-600/30 border border-blue-600 border-dashed rounded p-3 flex items-center justify-between'
                  >
                    <div>
                      <div className='text-blue-400 text-xs mb-1'>
                        Qualified Team Input
                      </div>
                      <div className='text-white text-sm font-medium'>
                        {team}
                      </div>
                      <div className='text-white/60 text-xs'>
                        Round {index + 1} Winner
                      </div>
                    </div>
                    <div className='text-blue-400 text-xs'>✓ Qualified</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )
    }

    if (activeStep === 4) {
      return (
        <div className='h-[450px] bg-black border border-white/10 rounded-lg'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 bg-black border-b border-white/10'>
            <div className='text-white text-sm font-bold'>Your Event Logo</div>
            <div className='flex space-x-4 text-white/80 text-xs'>
              <span>Home</span>
              <span>Teams</span>
              <span>Results</span>
              <span className='text-purple-400'>Awards</span>
            </div>
          </div>

          <div className='p-6'>
            <div className='bg-purple-600/30 border border-purple-600 border-dashed rounded-lg p-3 mb-4'>
              <div className='text-purple-400 text-xs mb-1'>
                Awards Page Title
              </div>
              <h3 className='text-white text-lg font-bold'>
                Competition Awards
              </h3>
            </div>

            <div className='space-y-3 mb-4'>
              <div className='bg-purple-600/30 border border-purple-600 border-dashed rounded p-3'>
                <div className='text-purple-400 text-xs mb-1'>
                  1st Place Input
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-white text-sm font-medium'>
                      🥇 First Place
                    </div>
                    <div className='text-white/60 text-xs'>Team Champions</div>
                  </div>
                  <div className='text-purple-400 text-xs'>Winner</div>
                </div>
              </div>

              <div className='bg-purple-600/30 border border-purple-600 border-dashed rounded p-3'>
                <div className='text-purple-400 text-xs mb-1'>
                  2nd Place Input
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-white text-sm font-medium'>
                      🥈 Second Place
                    </div>
                    <div className='text-white/60 text-xs'>Team Elite</div>
                  </div>
                  <div className='text-purple-400 text-xs'>Runner-up</div>
                </div>
              </div>

              <div className='bg-purple-600/30 border border-purple-600 border-dashed rounded p-3'>
                <div className='text-purple-400 text-xs mb-1'>
                  3rd Place Input
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-white text-sm font-medium'>
                      🥉 Third Place
                    </div>
                    <div className='text-white/60 text-xs'>Team Victory</div>
                  </div>
                  <div className='text-purple-400 text-xs'>Bronze</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className='px-4 py-20 bg-black min-'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-xl font-light mb-2'>
            <span className='text-white font-semibold'>
              Build your event website
            </span>
            <span className='text-neutral-400'> with dynamic pages.</span>
          </h2>
          <p className='text-neutral-400 text-sm'>
            Just fill in the inputs and watch your professional event website
            come to life.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 items-start'>
          {/* Website mockup */}
          <div className='order-2 lg:order-1 col-span-3'>
            <div className='bg-black border border-white/10 rounded-lg p-1 shadow-2xl'>
              {renderWebsite()}
            </div>
          </div>

          {/* Right side - Steps */}
          <div className='order-1 lg:order-2 space-y-6 col-span-2'>
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === step.id

              return (
                <div key={step.id} className='relative'>
                  {/* Vertical line */}
                  {index < steps.length - 1 && (
                    <div className='absolute left-5 top-10 w-0.5 h-16 bg-black border border-white/10'></div>
                  )}

                  <div
                    className='flex items-start space-x-4 cursor-pointer group'
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                        isActive
                          ? step.bgColor + ' shadow-lg'
                          : 'bg-black border border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-neutral-300'
                        }`}
                      />
                    </div>

                    <div className='flex-1 pt-1'>
                      <h3
                        className={`text-base font-medium mb-2 transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-neutral-300'
                        }`}
                      >
                        <span
                          className={`font-semibold transition-colors duration-300 ${
                            isActive ? step.color : 'text-neutral-500'
                          }`}
                        >
                          {step.title.split('.')[0]}.
                        </span>
                        {step.title.includes('.') && (
                          <span className='text-neutral-400'>
                            {' '}
                            {step.title.split('.').slice(1).join('.')}
                          </span>
                        )}
                      </h3>
                      <p
                        className={`text-sm transition-all duration-300 ${
                          isActive
                            ? 'text-neutral-300'
                            : 'text-neutral-500 group-hover:text-neutral-400'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className='pt-6'>
              <div className='grid grid-cols-2 items-center space-y-3'>
                <button className=' bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-sm font-medium'>
                  Build Your Website
                </button>
                <div className='text-center'>
                  <span className='bg-teal-600/30 text-teal-400 text-xs px-3 py-1 rounded-full'>
                    No coding required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBuilderSteps
