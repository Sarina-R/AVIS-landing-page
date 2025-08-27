import Image from 'next/image'

const flagUrls = {
  JP: 'https://flagcdn.com/w80/jp.png',
  US: 'https://flagcdn.com/w80/us.png',
  BR: 'https://flagcdn.com/w80/br.png',
  DE: 'https://flagcdn.com/w80/de.png',
  CN: 'https://flagcdn.com/w80/cn.png',
  IN: 'https://flagcdn.com/w80/in.png',
  FR: 'https://flagcdn.com/w80/fr.png',
  GB: 'https://flagcdn.com/w80/gb.png',
  KR: 'https://flagcdn.com/w80/kr.png',
  AU: 'https://flagcdn.com/w80/au.png',
}

export default function GlobalCompeteSection() {
  return (
    <section className='relative p-8 md:p-16 border-b border-white/10 py-15 md:py-40 overflow-hidden'>
      {/* Animated Globe Background */}
      <div className='absolute inset-0 flex items-center justify-center opacity-30'>
        <svg
          className='w-full h-auto'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <radialGradient id='glow' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#FACC15' stopOpacity='0.6' />
              <stop offset='100%' stopColor='#FACC15' stopOpacity='0' />
            </radialGradient>

            <path
              id='orbitPath1'
              d='M500 160 A340 340 0 0 1 500 840 A340 340 0 0 1 500 160 Z'
              stroke='#FACC15'
              strokeWidth='1'
              fill='none'
              opacity='0.3'
            />
            <path
              id='orbitPath2'
              d='M500 80 A420 420 0 0 1 500 920 A420 420 0 0 1 500 80 Z'
              stroke='#FACC15'
              strokeWidth='1'
              fill='none'
              opacity='0.3'
            />
            {/* Anticlockwise orbitPath3 */}
            <path
              id='orbitPath3'
              d='M500 20 A480 480 0 0 0 500 980 A480 480 0 0 0 500 20 Z'
              stroke='#FACC15'
              strokeWidth='1'
              fill='none'
              opacity='0.3'
            />
          </defs>

          {/* Glow */}
          <circle cx='500' cy='500' r='300' fill='url(#glow)' />

          {/* Base Globe */}
          <circle
            cx='500'
            cy='500'
            r='240'
            stroke='#FACC15'
            strokeWidth='2'
            fill='none'
          />

          {/* Simple Grid */}
          <ellipse
            cx='500'
            cy='500'
            rx='240'
            ry='70'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
          />
          <ellipse
            cx='500'
            cy='500'
            rx='200'
            ry='50'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
          />
          <ellipse
            cx='500'
            cy='500'
            rx='160'
            ry='30'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
          />
          <path
            d='M500 260 Q740 500 500 740 Q260 500 500 260Z'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
          />

          {/* Orbiting Circles */}
          <circle
            cx='500'
            cy='500'
            r='320'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
            opacity='0.4'
          />
          <circle
            cx='500'
            cy='500'
            r='360'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
            opacity='0.4'
          />
          <circle
            cx='500'
            cy='500'
            r='420'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
            opacity='0.4'
          />
          <circle
            cx='500'
            cy='500'
            r='480'
            stroke='#FACC15'
            strokeWidth='1'
            fill='none'
            opacity='0.4'
          />
        </svg>
      </div>

      {/* Flag Container with Clipping */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <svg
          className='w-full h-auto'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <clipPath id='flagClip'>
              <rect x='50' y='50' width='1000' height='900' />
            </clipPath>
          </defs>

          <g clipPath='url(#flagClip)'>
            {/* Orbiting Flags on orbitPath1 (clockwise) */}
            <FlagOnOrbit
              href='#orbitPath1'
              dur='20s'
              begin='0s'
              flag={
                <Image
                  src={flagUrls.JP}
                  alt='Japan flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath1'
              dur='20s'
              begin='2s'
              flag={
                <Image
                  src={flagUrls.US}
                  alt='USA flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath1'
              dur='20s'
              begin='3s'
              flag={
                <Image
                  src={flagUrls.BR}
                  alt='Brazil flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            {/* Orbiting Flags on orbitPath2 (clockwise) */}
            <FlagOnOrbit
              href='#orbitPath2'
              dur='22s'
              begin='2s'
              flag={
                <Image
                  src={flagUrls.DE}
                  alt='Germany flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath2'
              dur='22s'
              begin='4s'
              flag={
                <Image
                  src={flagUrls.CN}
                  alt='China flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath2'
              dur='22s'
              begin='5s'
              flag={
                <Image
                  src={flagUrls.IN}
                  alt='India flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            {/* Orbiting Flags on orbitPath3 (anticlockwise) */}
            <FlagOnOrbit
              href='#orbitPath3'
              dur='23s'
              begin='0s'
              flag={
                <Image
                  src={flagUrls.FR}
                  alt='France flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath3'
              dur='23s'
              begin='2s'
              flag={
                <Image
                  src={flagUrls.GB}
                  alt='UK flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath3'
              dur='23s'
              begin='3s'
              flag={
                <Image
                  src={flagUrls.KR}
                  alt='South Korea flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
            <FlagOnOrbit
              href='#orbitPath3'
              dur='23s'
              begin='4s'
              flag={
                <Image
                  src={flagUrls.AU}
                  alt='Australia flag'
                  width={32}
                  height={32}
                  className='md:w-full'
                  unoptimized
                />
              }
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 space-y-12'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-5xl font-bold md:font-extrabold text-white tracking-tight'>
            Compete Globally, Anytime
          </h2>
          <p className='text-neutral-400 font-light text-[14px] md:text-lg max-w-2xl mx-auto'>
            Join coding challenges from anywhere in the world, regardless of
            your time zone. Our platform ensures seamless participation with
            flexible schedules tailored to your local time.
          </p>
        </div>

        <div className='flex justify-center mt-12'>
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-2xl px-4 md:px-8 py-3 md:py-4 inline-flex items-center space-x-3 backdrop-blur-sm'>
            <span className='text-xs md:text-sm font-medium text-white tracking-wide'>
              Join from Anywhere, Anytime
            </span>
            <svg
              className='w-5 h-5 text-yellow-500 animate-spin'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M12 6v6l4 2' />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlagOnOrbit({
  href,
  dur,
  begin,
  flag,
}: {
  href: string
  dur: string
  begin: string
  flag: React.ReactNode
}) {
  return (
    <g>
      <foreignObject width='40' height='40'>
        <div
          style={{
            width: '32px',
            overflow: 'hidden',
          }}
          className='absolute md:w-full rounded-t-2xl bg-red-50'
        >
          {flag}
        </div>
      </foreignObject>
      <animateMotion dur={dur} begin={begin} repeatCount='indefinite'>
        <mpath href={href} />
      </animateMotion>
    </g>
  )
}
