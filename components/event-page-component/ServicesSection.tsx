import { Award, Calendar, Users } from 'lucide-react'

export const ServicesSection = () => (
  <section className='py-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl font-bold mb-6'>Discover Our Platform</h2>
        <p className='text-xl text-neutral-400'>
          Explore the different facets of our comprehensive event management
          solution.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Calendar className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>Event Planning</h3>
          <p className='text-neutral-400'>
            Strategic planning and coordination for events of all sizes and
            complexities.
          </p>
        </div>

        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Users className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>Guest Management</h3>
          <p className='text-neutral-400'>
            Seamless registration, check-in, and attendee experience management.
          </p>
        </div>

        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Award className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>Premium Support</h3>
          <p className='text-neutral-400'>
            24/7 dedicated support ensuring your event runs flawlessly.
          </p>
        </div>
      </div>
    </div>
  </section>
)
