import Link from 'next/link'

export const CTASection = () => (
  <section className='py-24 px-6  mt-0'>
    <div className='max-w-4xl mx-auto text-center'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
          Ready to Start with AVIS Events?
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          Let&apos;s create something extraordinary together. Get in touch with
          our team to discuss your next event.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <div className='flex flex-row gap-4 sm:gap-6 text-xs sm:text-sm'>
          <Link href='https://events.avisengine.com/auth/register'>
            <button className='group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 cursor-pointer'>
              <div className='w-0 h-0 border-l-[4px] sm:border-l-[5px] border-r-[4px] sm:border-r-[5px] border-b-[6px] sm:border-b-[7px] border-l-transparent border-r-transparent border-b-current rotate-90 group-hover:rotate-[135deg] transition-transform duration-300' />
              Register Now
            </button>
          </Link>
          <Link href='https://events.avisengine.com/'>
            <button className='px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 text-white font-semibold border border-white/15 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer'>
              Go to AVIS Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)
