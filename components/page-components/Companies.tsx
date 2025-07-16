import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CompanyLogos = () => {
  const logos = [
    'https://avisengine.com/wp-content/uploads/2023/05/amd-logo-1.svg.png',
    'https://avisengine.com/wp-content/uploads/2024/02/stanford-university-logo-83501A80B4-seeklogo.com_.png',
    'https://avisengine.com/wp-content/uploads/2024/02/ubc_3-300x125.png',
    'https://avisengine.com/wp-content/uploads/2024/02/GeorgiaTech_RGB-300x106.png',
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  }

  const repeatedLogos = Array(4).fill(logos).flat()

  return (
    <section className='py-12 bg-neutral-50 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl font-semibold text-center text-neutral-800 mb-8'>
          Our Partners
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='relative flex'
        >
          <div className='flex animate-infinite-scroll'>
            {repeatedLogos.map((logo, index) => (
              <motion.div
                key={`logo-${index}`}
                variants={logoVariants}
                className='flex-shrink-0 mx-4 group'
              >
                <img
                  src={logo}
                  alt={`Company logo ${(index % logos.length) + 1}`}
                  className='h-10 object-contain filter neutralscale group-hover:neutralscale-0 transition-all duration-300'
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -${100 / 4}%
            ); /* Adjusted for 4 sets of logos */
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: ${4 * 100}%; /* Width for 4 sets of logos */
          animation: infinite-scroll 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default CompanyLogos
