import { BentoGrid } from './BentoGrid'

export const AboutSection = () => (
  <section id='about' className='pt-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16 max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
          AVIS For Everyone
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          Discover seamless event management with AVIS. Effortlessly plan,
          register for, and network at events tailored for users of all kinds.
        </p>
      </div>
      <BentoGrid />
    </div>
  </section>
)
