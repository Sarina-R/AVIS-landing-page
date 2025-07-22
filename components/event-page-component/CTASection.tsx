export const CTASection = () => (
  <section className='py-24 px-6 border-t border-white/10'>
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-6'>
        Ready to Start with AVIS Events?
      </h2>
      <p className='text-xl text-neutral-400 mb-8'>
        Let&apos;s create something extraordinary together. Get in touch with
        our team to discuss your next event.
      </p>
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
