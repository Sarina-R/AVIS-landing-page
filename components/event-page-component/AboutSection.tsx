import { BentoGrid } from './BentoGrid'

export const AboutSection = () => (
  <section id='about' className='pt-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl font-bold mb-6'>AVIS For Everyone</h2>
        <p className='text-xl text-neutral-400 max-w-3xl mx-auto pb-4'>
          Discover seamless event management with AVIS. Effortlessly plan,
          register for, and network at events tailored for users of all kinds.
        </p>
      </div>
      <BentoGrid />
    </div>
  </section>
)
