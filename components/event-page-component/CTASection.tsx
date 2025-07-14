export const CTASection = () => (
  <section className='py-24 px-6 border-t border-white/10'>
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-6'>
        Ready to Start with Avis Events?
      </h2>
      <p className='text-xl text-gray-400 mb-8'>
        Let's create something extraordinary together. Get in touch with our
        team to discuss your next event.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:-translate-y-1'>
          Start Your Project
        </button>
        <button className='border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-md font-medium transition-colors'>
          Schedule Consultation
        </button>
      </div>
    </div>
  </section>
)
