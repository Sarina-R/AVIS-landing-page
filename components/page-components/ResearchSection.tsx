import Image from 'next/image'
import Link from 'next/link'

export default function ResearchSection() {
  return (
    <div className='relative'>
      <div className='flex flex-col lg:flex-row relative z-10'>
        <div className='relative flex w-full lg:w-2/5'>
          <div className='w-full p-6 md:p-8 lg:p-12 h-full relative flex top-14'>
            <div className='sticky top-20 max-w-md h-fit'>
              <div className={`transition-all duration-1000`}>
                <div className='relative'>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent'>
                    Research
                  </h1>
                  {/* line */}
                  <div className='absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full'>
                    <div className='w-full h-8 bg-gradient-to-b from-primary-lighter to-accent rounded-full animate-pulse'></div>
                  </div>
                </div>
                <p className='text-base md:text-lg lg:text-xl leading-relaxed text-muted'>
                  Read about what&apos;s going on under the hood of AVIS Engine,
                  do research on it and cite it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Line */}
        <div className='hidden lg:block w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent relative'>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-pulse'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-bounce'></div>

          <svg
            className='absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 text-primary'
            viewBox='0 0 100 100'
            fill='currentColor'
          >
            <polygon points='50,10 80,90 20,90'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                values='0 50 50;360 50 50'
                dur='8s'
                repeatCount='indefinite'
              />
            </polygon>
          </svg>
          <svg
            className='absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-3 h-3 text-accent/60'
            viewBox='0 0 100 100'
            fill='currentColor'
          >
            <rect x='35' y='35' width='30' height='30' rx='5'>
              <animate
                attributeName='opacity'
                values='0.3;1;0.3'
                dur='2s'
                repeatCount='indefinite'
              />
            </rect>
          </svg>
        </div>

        <div className='w-full lg:w-3/5 flex flex-col relative'>
          <div className='min-h-screen flex items-center justify-center p-6 md:p-8 lg:p-12'>
            <div
              className={`relative max-w-2xl w-full transition-all duration-1000 delay-300 `}
            >
              <div className='relative'>
                <Image
                  src='https://avisengine.com/wp-content/uploads/2024/09/Screenshot-2024-09-04-at-1.20.11%E2%80%AFPM-985x1024.png'
                  alt='AVIS Engine Research'
                  width={800}
                  height={600}
                  className='object-contain w-full h-full'
                  priority
                />
                {/* Floating decorations around image */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce'></div>

                <svg
                  className='absolute -bottom-6 right-1/4 w-4 h-4 text-accent/70'
                  viewBox='0 0 100 100'
                  fill='currentColor'
                >
                  <circle cx='50' cy='50' r='30'>
                    <animate
                      attributeName='r'
                      values='30;40;30'
                      dur='3s'
                      repeatCount='indefinite'
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          <div className='min-h-screen flex flex-col items-center justify-center p-6 md:p-8 lg:p-12'>
            <div
              className={`max-w-3xl w-full transition-all duration-1000 delay-500`}
            >
              <div className='relative rounded-xl p-6 md:p-8 bg-secondary/20 backdrop-blur-sm border border-border/50'>
                {/*  corner  */}
                <div className='absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-tl-xl'></div>
                <div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/20 to-transparent rounded-br-xl'></div>

                <div className='relative z-10'>
                  <div className='flex items-center mb-6'>
                    <svg
                      className='w-6 h-6 text-primary mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
                    </svg>
                    <h2 className='text-xl md:text-2xl font-semibold text-foreground'>
                      Citation
                    </h2>
                  </div>

                  <div className='bg-background/80 rounded-lg p-4 md:p-6 mb-6 overflow-auto relative border border-border/30'>
                    <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg'></div>
                    <pre className='text-xs md:text-sm text-green-400 font-mono leading-relaxed relative z-10'>
                      {`@article{nejad2023high,
  title={High Performance Networking Layer for Simulation Applications},
  author={Nejad, Amir Mohammad Zarif Shahsavan and Nejad, Amir Mahdi Zarif Shahsavan and Setayeshi, Amirali and Sadeghnejad, Soroush},
  journal={arXiv preprint arXiv:2308.15950},
  year={2023}
}`}
                    </pre>
                  </div>

                  <Link
                    href='https://www.researchgate.net/publication/373808176_AVIS_Engine_High_Performance_Networking_Layer_for_Simulation_Applications'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-foreground font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group'
                  >
                    <span className='mr-2'>Read the paper</span>
                    <svg
                      className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
