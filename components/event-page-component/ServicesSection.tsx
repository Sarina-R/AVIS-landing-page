import { Award, Calendar, Users } from 'lucide-react'

export const ServicesSection = () => (
  <section id='discover' className='py-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16 max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
          Discover the Power of AVIS ID
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          Unlock seamless event management and professional networking with your
          6-character AVIS ID.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Calendar className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>
            Effortless Event Planning
          </h3>
          <p className='text-neutral-400'>
            Use your AVIS ID to streamline event planning, eliminating
            repetitive tasks for events of any scale.
          </p>
        </div>

        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Users className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>AVIS ID Community</h3>
          <p className='text-neutral-400'>
            Connect easier with attendees using your AVIS ID for seamless
            registration and networking.
          </p>
        </div>

        <div className='text-center p-8 border border-white/10'>
          <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6'>
            <Award className='h-8 w-8 text-black' />
          </div>
          <h3 className='text-xl font-semibold mb-4'>Professional Resume</h3>
          <p className='text-neutral-400'>
            Your AVIS ID is your professional hub, offering 24/7 support to
            ensure flawless event execution.
          </p>
        </div>
      </div>
    </div>
  </section>
)
