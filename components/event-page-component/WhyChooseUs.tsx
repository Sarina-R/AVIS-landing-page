import { Globe, Shield, Zap } from 'lucide-react'

export const WhyChooseUs = () => (
  <section id='why-avis' className='pt-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
          Why Choose AVIS Events
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          We deliver exceptional results that exceed expectations.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 p-8 border border-white/10'>
        <div className='space-y-8'>
          <div className='flex items-start space-x-4'>
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
              <Shield className='h-4 w-4 text-black' />
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-2'>Trusted Expertise</h3>
              <p className='text-neutral-400'>
                Over 10 years of experience managing events and high-profile
                clients.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
              <Zap className='h-4 w-4 text-black' />
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-2'>
                Innovative Solutions
              </h3>
              <p className='text-neutral-400'>
                Cutting-edge technology and creative approaches to make your
                events memorable and impactful.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0'>
              <Globe color='black' />
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-2'>Global Network</h3>
              <p className='text-neutral-400'>
                Extensive network of venues, vendors, and partners worldwide to
                ensure seamless execution.
              </p>
            </div>
          </div>
        </div>

        <div className='p-8'>
          <h3 className='text-xl font-semibold mb-4'>Success by Numbers</h3>
          <div className='space-y-6'>
            <div>
              <div className='text-3xl font-bold text-white'>500+</div>
              <div className='text-neutral-400'>Events Delivered</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>50+</div>
              <div className='text-neutral-400'>Countries Served</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>98%</div>
              <div className='text-neutral-400'>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
