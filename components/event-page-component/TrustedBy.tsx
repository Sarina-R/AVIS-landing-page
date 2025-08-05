import Image from 'next/image'

export const TrustedBySection = () => (
  <section className='py-16 px-6 border-t border-white/10 overflow-hidden'>
    <div className='max-w-6xl mx-auto text-center'>
      <h2 className='text-sm text-neutral-500 uppercase tracking-wider mb-8'>
        Trusted by Industry Leaders
      </h2>
      <div className='flex justify-center items-center space-x-12'>
        <Image
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/FIRA-Logos_White-Logo-Horizontal-w-o-slogan.png'
          alt='FIRA Logo'
          height={48}
          width={100}
          className='h-10 w-auto opacity-50 hover:opacity-100 filter'
        />
        <Image
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/ieee-1.svg'
          alt='IEEE Logo'
          height={48}
          width={100}
          className='h-10 w-auto opacity-50 hover:opacity-100 filter invert'
        />
        <Image
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/mercedes-benz.svg'
          alt='Mercedes-Benz Logo'
          height={48}
          width={100}
          className='h-10 w-auto opacity-50 hover:opacity-100 filter invert'
        />
        <Image
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/stanford-bw-logo.png'
          alt='Stanford Logo'
          height={48}
          width={100}
          className='h-14 w-auto opacity-50 hover:opacity-100 filter invert'
        />
        <Image
          src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Untitled-design-31.png'
          alt='Untitled Design Logo'
          height={48}
          width={100}
          className='h-12 w-auto opacity-50 hover:opacity-100 filter invert'
        />
      </div>
    </div>
  </section>
)
