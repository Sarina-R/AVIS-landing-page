export const CTASection = () => (
  <section className='py-24 px-6  mt-0'>
    <div className='max-w-4xl mx-auto text-center'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>
          Ready to Start with AVIS Events?
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          Let's create something extraordinary together. Get in touch with our
          team to discuss your next event.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <button className='bg-white text-black px-8 py-3 rounded-md font-medium transition-all transform'>
          Start Your Project
        </button>
        <button className='border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white px-8 py-3 rounded-md font-medium transition-colors'>
          Schedule Consultation
        </button>
      </div>
    </div>
  </section>
)
