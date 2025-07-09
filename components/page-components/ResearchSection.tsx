import Image from 'next/image'
import Link from 'next/link'

export default function ResearchSection() {
  return (
    <div className=''>
      <div className='flex'>
        <div className='relative flex'>
          <div className='w-1/2 lg:w-2/5 p-8 lg:p-12 h-full relative flex'>
            <div className='sticky top-18 max-w-md h-fit'>
              <h1 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
                Research
              </h1>
              <p className='text-lg lg:text-xl leading-relaxed'>
                Read about what&apos;s going on under the hood of AVIS Engine,
                do research on it and cite it.
              </p>
            </div>
          </div>
        </div>

        <div className='w-px bg-gradient-to-b from-transparent via-primary to-transparent relative'></div>

        <div className='w-1/2 lg:w-3/5 flex flex-col relative'>
          <div className='min-h-screen flex items-center justify-center p-8 lg:p-12'>
            <div className='relative max-w-2xl w-full h-full rounded-lg'>
              <Image
                src='https://avisengine.com/wp-content/uploads/2024/09/Screenshot-2024-09-04-at-1.20.11%E2%80%AFPM-985x1024.png'
                alt='AVIS Engine Research'
                fill
                className='object-contain h-[110vh]'
                priority
              />
            </div>
          </div>

          <div className='min-h-screen flex flex-col items-center justify-center p-8 lg:p-12'>
            <div className='max-w-3xl w-full'>
              <div className='rounded-xl shadow-lg p-8'>
                <h2 className='text-2xl font-semibold mb-6'>Citation</h2>

                <div className='bg-gray-900 rounded-lg p-6 mb-6 overflow-auto'>
                  <pre className='text-sm text-accent font-mono leading-relaxed'>
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
                  className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/70 to-secondary/60 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  Read the paper
                  <svg
                    className='ml-2 w-4 h-4'
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
  )
}
