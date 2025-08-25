import { useState } from 'react'
import {
  CheckCircle,
  Smartphone,
  Shield,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const FinancialSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const organizerFeatures = [
    {
      icon: <CheckCircle className='w-5 h-5' />,
      title: 'Custom Fee Structure',
      description: 'Flexible pricing models',
      details:
        'Create custom fee structures tailored to your event needs. Set up tiered pricing, early bird discounts, group rates, and complex pricing rules with ease.',
      path: 'avis/fee-structure',
    },
    {
      icon: <Smartphone className='w-5 h-5' />,
      title: 'Easy Fee Management',
      description: 'Streamlined payment handling',
      details:
        'Manage all your event fees from a single dashboard. Track payments, send invoices, handle refunds, and monitor financial performance in real-time.',
      path: 'avis/fee-management',
    },
    {
      icon: <Shield className='w-5 h-5' />,
      title: 'Multi Currency Support',
      description: 'Global payment solutions',
      details:
        'Accept payments in multiple currencies to accommodate international attendees. Automatic currency conversion and real-time exchange rate updates.',
      path: 'avis/multi-currency',
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      title: 'PayPal and Stripe Support',
      description: 'Secure payment processing',
      details:
        'Integrated support for PayPal and Stripe payment gateways. Ensure secure, fast, and reliable payment processing for all your event transactions.',
      path: 'avis/payment-gateways',
    },
    {
      icon: <CheckCircle className='w-5 h-5' />,
      title: 'Wire Transfer Management',
      description: 'Bank transfer solutions',
      details:
        'Handle wire transfers with ease. Track bank transfers, manage payment confirmations, and reconcile payments automatically for seamless financial operations.',
      path: 'avis/wire-transfers',
    },
  ]

  return (
    <section className='border-b border-white/10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        {/* Left Column - Header */}
        <div className='border-r border-white/10 p-8'>
          <div className=' sticky top-25'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight'>
              Financial
              <br />
              Management
            </h1>

            <p className='text-neutral-400 text-lg mb-12 leading-relaxed'>
              Comprehensive financial tools for seamless event payment
              processing and revenue management
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='https://events.avisengine.com/auth/register'>
                <button className='cursor-pointer bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-center gap-2'>
                  <ArrowRight className='w-4 h-4' />
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {organizerFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative border border-white/10 p-6 hover:border-neutral-600 transition-all duration-300 ${
                index === organizerFeatures.length - 1 ? 'sm:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content */}
              <div className='mb-4'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='text-neutral-400 group-hover:text-white transition-colors duration-300'>
                    {feature.icon}
                  </div>
                  <h3 className='text-lg font-semibold group-hover:text-white transition-colors duration-300'>
                    {feature.title}
                  </h3>
                </div>
                <p className='text-neutral-500 text-sm font-medium mb-3'>
                  {feature.description}
                </p>
                <p className='text-neutral-400 text-sm leading-relaxed'>
                  {feature.details}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialSection
