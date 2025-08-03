export const Footer = () => (
  <footer className='bg-black border-t border-white/10 py-12 px-6'>
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div>
          <img
            src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
            alt='Avis Events'
            className='h-8 mb-4'
          />
          <p className='text-neutral-400 text-xs md:text-sm'>
            Premier event management company creating extraordinary experiences
            worldwide.
          </p>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Services</h4>
          <ul className='space-y-2 text-xs md:text-sm text-neutral-400'>
            <li>
              <a
                href='/avis-events'
                className='hover:text-white transition-colors'
              >
                AVIS Events
              </a>
            </li>
            <li>
              <a
                href='/avis-challenge'
                className='hover:text-white transition-colors'
              >
                AVIS Challenge
              </a>
            </li>
            <li>
              <a
                href='/avis-plus'
                className='hover:text-white transition-colors'
              >
                AVIS Plus +
              </a>
            </li>
            <li>
              <a
                href='/avis-community'
                className='hover:text-white transition-colors'
              >
                AVIS Community
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Company</h4>
          <ul className='space-y-2 text-xs md:text-sm text-neutral-400'>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold mb-4'>Support</h4>
          <ul className='space-y-2 text-xs md:text-sm text-neutral-400'>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Documentation
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition-colors'>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-white/10 mt-8 pt-8 text-center text-xs md:text-sm text-neutral-400'>
        <p>AVIS Group</p>
      </div>
    </div>
  </footer>
)
