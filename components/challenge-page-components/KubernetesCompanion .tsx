import React, { FC, SVGProps, useState } from 'react'
import {
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Database,
  Lock,
  Activity,
  Medal,
  SquareDashedBottomCode,
} from 'lucide-react'
import GlobalCompeteSection from './GlobalCompeteSection'

interface FeatureCardProps {
  icon: FC<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

interface ToggleSwitchProps {
  enabled: boolean
  onChange: (value: boolean) => void
  label: string
}

const KubernetesCompanion = () => {
  const [isEnabled, setIsEnabled] = useState(true)

  const AWSIcon = () => (
    <svg
      width='28'
      height='30'
      viewBox='0 0 32 20'
      fill='none'
      className='text-yellow-500'
    >
      <path
        d='M8.5 7.5c0 2.5-1.5 4.5-4 4.5S0.5 10 0.5 7.5 2 3 4.5 3s4 2 4 4.5z'
        fill='currentColor'
      />
      <path
        d='M16.5 7.5c0 2.5-1.5 4.5-4 4.5s-4-2-4-4.5S10 3 12.5 3s4 2 4 4.5z'
        fill='currentColor'
      />
      <path
        d='M24.5 7.5c0 2.5-1.5 4.5-4 4.5s-4-2-4-4.5S18 3 20.5 3s4 2 4 4.5z'
        fill='currentColor'
      />
      <text x='0' y='25' fontSize='10' fill='currentColor'>
        Code
      </text>
    </svg>
  )

  const GoogleCloudIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='text-yellow-500'
    >
      <circle cx='8' cy='8' r='3' fill='currentColor' />
      <circle cx='16' cy='8' r='3' fill='currentColor' />
      <circle cx='12' cy='16' r='3' fill='currentColor' />
      <path d='M8 8L12 16M16 8L12 16' stroke='currentColor' strokeWidth='1' />
    </svg>
  )

  const KubernetesIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='text-yellow-500'
    >
      <circle
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M12 2v4M12 18v4M2 12h4M18 12h4'
        stroke='currentColor'
        strokeWidth='2'
      />
      <circle cx='12' cy='12' r='3' fill='currentColor' />
    </svg>
  )

  const NetworkIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='text-yellow-500'
    >
      <circle cx='5' cy='5' r='2' fill='currentColor' />
      <circle cx='19' cy='5' r='2' fill='currentColor' />
      <circle cx='5' cy='19' r='2' fill='currentColor' />
      <circle cx='19' cy='19' r='2' fill='currentColor' />
      <circle cx='12' cy='12' r='2' fill='currentColor' />
      <path
        d='M5 5L12 12L19 5M5 19L12 12L19 19'
        stroke='currentColor'
        strokeWidth='1'
      />
    </svg>
  )

  const MonitoringIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='text-yellow-500'
    >
      <rect
        x='3'
        y='4'
        width='18'
        height='12'
        rx='2'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M7 10l2 2 4-4'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <circle cx='17' cy='10' r='1' fill='currentColor' />
      <path d='M3 20h18' stroke='currentColor' strokeWidth='2' />
    </svg>
  )

  const CertificateIcon = () => (
    <svg
      width='60'
      height='60'
      viewBox='0 0 60 60'
      fill='none'
      className='text-yellow-500'
    >
      <rect
        x='10'
        y='10'
        width='40'
        height='30'
        rx='4'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M30 45l-8 8-4-6 6-4 6 4zm0 0l8 8 4-6-6-4-6 4z'
        fill='currentColor'
      />
      <circle cx='30' cy='25' r='5' fill='currentColor' />
      <path d='M20 20h20m-20 10h20' stroke='currentColor' strokeWidth='2' />
    </svg>
  )

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
  }: FeatureCardProps) => (
    <div className='p-4 border border-white/10 transition-all duration-300'>
      <div className='flex items-center space-x-3 mb-3'>
        <Icon className='w-4 h-4 text-yellow-500' />
        <h3 className='text-sm font-semibold text-white'>{title}</h3>
      </div>
      <p className='text-neutral-400 font-light text-xs leading-relaxed'>
        {description}
      </p>
    </div>
  )

  return (
    <div id='discover' className='min-h-screen border-y border-white/10'>
      <div className='max-w-7xl mx-auto'>
        <div className='lg:grid lg:grid-cols-4 lg:gap-0'>
          {/* Sticky Header - 1 Column */}
          <div className='lg:col-span-1 lg:sticky lg:top-0 lg:h-screen p-4 flex items-center border border-white/10'>
            <div className='space-y-6'>
              <div className='flex items-center'>
                <KubernetesIcon />
                <span className='text-xs pl-2 font-medium text-yellow-500'>
                  AVIS CHALLENGE
                </span>
              </div>
              <h1 className='text-4xl font-bold leading-tight'>
                Welcome to
                <br />
                <span className='text-white'>Your Coding</span>
                <br />
                <span className='text-yellow-500'>Adventure.</span>
              </h1>
              <p className='text-neutral-400 font-light text-sm'>
                Engage in exciting coding challenges on the AVIS platform, where
                your skills are instantly evaluated, earning you certificates
                and professional recognition.
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className='lg:col-span-3'>
            {/* Section 1 - Single Column */}
            <section className='p-8 border-b border-white/10'>
              <div className='space-y-8'>
                <div className='max-w-3xl'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <span className='text-white'>Submit Your Code.</span>
                    <span className='text-neutral-400 font-light'>
                      {' '}
                      Get Instant Feedback.
                    </span>
                  </h2>
                  <p className='text-sm text-neutral-300 leading-relaxed'>
                    Upload your Python or C++ solutions to the AVIS platform and
                    receive instant feedback on your profile. Monitor your
                    results, compete with peers, and earn prestigious AVIS
                    certificates to showcase on the global leaderboard.
                  </p>
                </div>

                {/* Diagrams Container */}
                <div className='p-6 grid md:grid-cols-2 gap-8'>
                  {/* Network Diagram */}
                  <div className='space-y-6'>
                    <h3 className='text-lg font-semibold text-white text-center'>
                      Code Evaluation Process
                    </h3>
                    <div className='space-y-6'>
                      {/* Edge Network */}
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                          <div className='w-3 h-3 bg-yellow-500 rounded-full animate-pulse'></div>
                          <span className='text-xs font-medium text-white'>
                            Code Upload
                          </span>
                        </div>
                        <div className='flex-1 mx-8'>
                          <div className='grid grid-cols-4 gap-2'>
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={i}
                                className='h-1 bg-yellow-500/60 rounded animate-pulse'
                                style={{ animationDelay: `${i * 0.2}s` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Secure Compute Grid */}
                      <div className='text-center'>
                        <div className='text-xs font-medium mb-3 text-neutral-300'>
                          Code Evaluation Grid
                        </div>
                        <div className='grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6'>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className='aspect-square bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors'
                            >
                              <div className='text-yellow-500'>
                                <SquareDashedBottomCode />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cloud Providers */}
                      <div className='flex justify-center items-center space-x-6'>
                        <div className='flex items-center space-x-3'>
                          <AWSIcon />
                          <div className='w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent'></div>
                        </div>
                        <GoogleCloudIcon />
                        <div className='flex items-center space-x-3'>
                          <div className='w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-500'></div>
                          <Medal className='text-yellow-500' />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leaderboard Mockup */}
                  <div className='space-y-10 grid'>
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-white text-center'>
                        AVIS Challenge Leaderboard
                      </h3>
                      <div className='bg-yellow-500/7 border border-white/10 rounded-lg p-4 max-w-sm mx-auto'>
                        <div className='flex items-center justify-between mb-4'>
                          <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center'>
                              <span className='text-white font-bold text-sm'>
                                #1
                              </span>
                            </div>
                            <div>
                              <div className='text-sm font-semibold text-white'>
                                Alex Coder
                              </div>
                              <div className='text-xs text-neutral-400 font-light'>
                                Score: 92.5
                              </div>
                            </div>
                          </div>
                          <div className='text-xs text-yellow-500'>
                            Gold Certificate
                          </div>
                        </div>
                        <div className='space-y-2'>
                          <div className='flex justify-between text-xs text-neutral-300'>
                            <span>Execution Time</span>
                            <span>1.2s</span>
                          </div>
                          <div className='h-1 bg-yellow-500/30 rounded-full overflow-hidden'>
                            <div className='h-full bg-yellow-500 w-[90%]'></div>
                          </div>
                          <div className='flex justify-between text-xs text-neutral-300'>
                            <span>Memory Usage</span>
                            <span>128 MB</span>
                          </div>
                          <div className='h-1 bg-yellow-500/30 rounded-full overflow-hidden'>
                            <div className='h-full bg-yellow-500 w-[75%]'></div>
                          </div>
                        </div>
                        <div className='mt-4 text-center'>
                          <div className='inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-1'>
                            <Lock className='w-4 h-4 text-yellow-500' />
                            <span className='text-xs text-white'>
                              Blockchain-Verified Certificate
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-white text-center'>
                        AVIS Challenge Certificate
                      </h3>
                      {/* Certificate Mockup */}
                      <div className='flex justify-center w-full'>
                        <div className='bg-yellow-500/7 border border-white/10 rounded-lg p-4 flex items-center space-x-4 w-full'>
                          <CertificateIcon />
                          <div>
                            <div className='text-sm font-semibold text-white'>
                              AVIS Certificate
                            </div>
                            <div className='text-xs text-neutral-400 font-light'>
                              Awarded for Excellence
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - Two Columns */}
            <section className='border-b border-white/10'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4 border-r border-white/10 p-8'>
                  <h2 className='text-xl font-bold'>
                    <span className='text-white'>Exciting Challenges</span>
                    <span className='text-neutral-400 font-light'>
                      {' '}
                      with Prestigious Rewards.
                    </span>
                  </h2>
                  <p className='text-neutral-300 text-xs leading-relaxed'>
                    Join our dynamic coding events, featuring physical and
                    computational challenges. Win prestigious awards, earn AVIS
                    certificates, and gain recognition in the global coding
                    community.
                  </p>

                  <div className='space-y-3'>
                    <div className='space-y-2'>
                      <label className='block text-neutral-300 font-medium text-xs'>
                        Challenge Type
                      </label>
                      <button className='flex items-center justify-between w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-neutral-600 transition-colors'>
                        <div className='flex items-center space-x-2'>
                          <div className='w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-white'></div>
                          </div>
                          <span className='text-xs'>Seasonal</span>
                        </div>
                        <ChevronDown className='w-3 h-3 text-neutral-400 font-light' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='space-y-4 border-r border-white/10 p-8'>
                  <h2 className='text-xl font-bold'>
                    <span className='text-white'>Instant Insights</span>
                    <span className='text-neutral-400 font-light'>
                      {' '}
                      & Progress Tracking.
                    </span>
                  </h2>
                  <p className='text-neutral-300 text-xs leading-relaxed'>
                    Gain real-time insights into your code’s performance with
                    detailed analytics, including execution time and resource
                    usage. Compare your results with others and track your
                    growth on the AVIS platform.
                  </p>

                  <div className='grid grid-cols-2 gap-3'>
                    <div className='p-3 bg-neutral-900/50 border border-white/10 rounded-lg'>
                      <Activity className='w-4 h-4 text-yellow-500 mb-1' />
                      <div className='text-xs font-medium text-white'>
                        2,847 Active
                      </div>
                      <div className='text-xs text-neutral-400 font-light'>
                        Coders
                      </div>
                    </div>
                    <div className='p-3 bg-neutral-900/50 border border-white/10 rounded-lg'>
                      <Zap className='w-4 h-4 text-yellow-500 mb-1' />
                      <div className='text-xs font-medium text-white'>
                        {' '}
                        12.4s
                      </div>
                      <div className='text-xs text-neutral-400 font-light'>
                        Avg Evaluation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - Three Columns */}
            <section className=''>
              <div className='space-y-8'>
                <div className='text-center space-y-4 p-8'>
                  <h2 className='text-4xl font-bold text-white'>
                    Platform Features
                  </h2>
                  <p className='text-neutral-400 font-light text-lg max-w-2xl mx-auto'>
                    Everything you need to compete, grow, and succeed in diverse
                    coding challenges, with opportunities for professional
                    recognition and career advancement.
                  </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3'>
                  <FeatureCard
                    icon={Shield}
                    title='Secure Code Evaluation'
                    description='Your code is evaluated in a secure, sandboxed environment with advanced security protocols, ensuring safe and reliable processing for all submissions.'
                  />
                  <FeatureCard
                    icon={Globe}
                    title='Language Flexibility'
                    description='Support for Python and C++ with optimized compilers and extensive libraries, enabling you to tackle challenges with your preferred programming approach.'
                  />
                  <FeatureCard
                    icon={Database}
                    title='Detailed Analytics'
                    description='Access comprehensive performance metrics, including execution time and resource usage, with benchmarking against top solutions to refine your skills.'
                  />
                  <FeatureCard
                    icon={Lock}
                    title='Certified Achievements'
                    description='Earn AVIS certificates for exceptional performance, verified through blockchain for authenticity. Share your achievements on LinkedIn to elevate your professional profile.'
                  />
                  <FeatureCard
                    icon={NetworkIcon}
                    title='Global Leaderboard'
                    description='Showcase your skills on our dynamic leaderboard, featuring detailed stats, badges, and public profiles to connect with the coding community.'
                  />
                  <FeatureCard
                    icon={MonitoringIcon}
                    title='Intelligent Feedback'
                    description='Receive AI-driven insights with optimization tips and personalized recommendations to enhance your code and accelerate your learning journey.'
                  />
                </div>
              </div>
            </section>

            {/* Section 4 - Single Columns */}
            <GlobalCompeteSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default KubernetesCompanion
