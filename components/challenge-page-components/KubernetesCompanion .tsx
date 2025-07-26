import React, { FC, SVGProps, useState } from 'react'
import {
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Database,
  Lock,
  Activity,
} from 'lucide-react'

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

  const DatabaseIcon = () => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='text-yellow-500'
    >
      <rect
        x='4'
        y='6'
        width='16'
        height='12'
        rx='2'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path d='M4 10h16M4 14h16' stroke='currentColor' strokeWidth='2' />
      <circle cx='8' cy='8' r='1' fill='currentColor' />
    </svg>
  )

  const AWSIcon = () => (
    <svg
      width='28'
      height='16'
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
      <text x='2' y='17' fontSize='5' fill='currentColor'>
        aws
      </text>
    </svg>
  )

  const AzureIcon = () => (
    <svg
      width='24'
      height='20'
      viewBox='0 0 28 24'
      fill='none'
      className='text-yellow-500'
    >
      <path d='M6 4L14 2L20 4L14 22L6 4Z' fill='currentColor' />
      <path d='M14 22L22 20L28 22H14Z' fill='currentColor' />
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
      <p className='text-neutral-400 text-xs leading-relaxed'>{description}</p>
    </div>
  )

  const ToggleSwitch = ({ enabled, onChange, label }: ToggleSwitchProps) => (
    <div className='flex items-center space-x-3'>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-blue-600' : 'bg-neutral-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className='text-white font-medium'>{label}</span>
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
                <span className='text-xs font-medium text-yellow-500'>
                  Kubernetes
                </span>
              </div>
              <h1 className='text-4xl font-bold leading-tight'>
                Your
                <br />
                <span className='text-white'>Kubernetes</span>
                <br />
                <span className='text-yellow-500'>companion.</span>
              </h1>
              <p className='text-neutral-400 text-sm'>
                Secure, scalable, and seamless cloud-native infrastructure
                management.
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
                    <span className='text-white'>Extend your backend.</span>
                    <span className='text-neutral-400'>
                      {' '}
                      Create secure bridges to your infrastructure.
                    </span>
                  </h2>
                  <p className='text-sm text-neutral-300 leading-relaxed'>
                    Create a secure, isolated bridge from Vercel to your
                    on-premise backend or Kubernetes services with Vercel Secure
                    Compute. Deploy with confidence across any cloud provider.
                  </p>
                </div>

                {/* Network Diagram */}
                <div className='p-6'>
                  <div className='space-y-6'>
                    {/* Edge Network */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-4'>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full animate-pulse'></div>
                        <span className='text-xs font-medium text-white'>
                          Edge Network
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
                        Secure Compute
                      </div>
                      <div className='grid grid-cols-3 gap-2 max-w-xs mx-auto mb-6'>
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className='aspect-square bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors'
                          >
                            <DatabaseIcon />
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
                        <AzureIcon />
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
                    <span className='text-white'>Zero downtime</span>
                    <span className='text-neutral-400'> deployments.</span>
                  </h2>
                  <p className='text-neutral-300 text-xs leading-relaxed'>
                    Ensures that outdated clients always fetch the correct
                    version for a given deployment. Say goodbye to version skew
                    forever.
                  </p>

                  <div className='space-y-3'>
                    <ToggleSwitch
                      enabled={isEnabled}
                      onChange={setIsEnabled}
                      label='Auto-scaling Enabled'
                    />

                    <div className='space-y-2'>
                      <label className='block text-neutral-300 font-medium text-xs'>
                        Maximum Age
                      </label>
                      <button className='flex items-center justify-between w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-neutral-600 transition-colors'>
                        <div className='flex items-center space-x-2'>
                          <div className='w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-white'></div>
                          </div>
                          <span className='text-xs'>1 day</span>
                        </div>
                        <ChevronDown className='w-3 h-3 text-neutral-400' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='space-y-4 border-r border-white/10 p-8'>
                  <h2 className='text-xl font-bold'>
                    <span className='text-white'>Advanced monitoring</span>
                    <span className='text-neutral-400'> & observability.</span>
                  </h2>
                  <p className='text-neutral-300 text-xs leading-relaxed'>
                    Real-time insights into your cluster performance, resource
                    utilization, and application health with comprehensive
                    logging and metrics.
                  </p>

                  <div className='grid grid-cols-2 gap-3'>
                    <div className='p-3 bg-neutral-900/50 border border-white/10 rounded-lg'>
                      <Activity className='w-4 h-4 text-yellow-500 mb-1' />
                      <div className='text-xs font-medium text-white'>
                        99.9% Uptime
                      </div>
                      <div className='text-xs text-neutral-400'>
                        Last 30 days
                      </div>
                    </div>
                    <div className='p-3 bg-neutral-900/50 border border-white/10 rounded-lg'>
                      <Zap className='w-4 h-4 text-yellow-500 mb-1' />
                      <div className='text-xs font-medium text-white'>
                        {' '}
                        50ms
                      </div>
                      <div className='text-xs text-neutral-400'>
                        Avg latency
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
                  <p className='text-neutral-400 text-lg max-w-2xl mx-auto'>
                    Everything you need to build, deploy, and scale cloud-native
                    applications with confidence.
                  </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3'>
                  <FeatureCard
                    icon={Shield}
                    title='Security First'
                    description='Enterprise-grade security with role-based access control, network policies, and automated vulnerability scanning.'
                  />
                  <FeatureCard
                    icon={Globe}
                    title='Global Network'
                    description='Deploy across multiple regions with intelligent traffic routing and automatic failover capabilities.'
                  />
                  <FeatureCard
                    icon={Database}
                    title='Data Management'
                    description='Persistent storage solutions with automated backups, encryption at rest, and cross-region replication.'
                  />
                  <FeatureCard
                    icon={Lock}
                    title='Compliance Ready'
                    description='Meet industry standards with SOC 2, HIPAA, and GDPR compliance built into the platform.'
                  />
                  <FeatureCard
                    icon={NetworkIcon}
                    title='Service Mesh'
                    description='Advanced networking with load balancing, service discovery, and encrypted inter-service communication.'
                  />
                  <FeatureCard
                    icon={MonitoringIcon}
                    title='Observability'
                    description='Comprehensive monitoring with distributed tracing, custom metrics, and intelligent alerting systems.'
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KubernetesCompanion
