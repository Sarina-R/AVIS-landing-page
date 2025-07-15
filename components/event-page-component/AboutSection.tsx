// 'use client'

import { BentoGrid } from './BentoGrid'

// import { useRef, useEffect, useState } from 'react'
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useInView,
//   useSpring,
// } from 'framer-motion'
// import {
//   Zap,
//   ArrowRight,
//   Pen,
//   Home,
//   PenTool,
//   PaintBucket,
//   Ruler,
//   Building2,
//   Sparkles,
//   CheckCircle,
//   Star,
//   Award,
//   Users,
//   Calendar,
//   TrendingUp,
// } from 'lucide-react'
// import { Button } from '../ui/button'

// export default function AboutUsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const statsRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
//   const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   })
//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
//   const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
//   const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

//   const services = [
//     {
//       icon: Pen,
//       secondaryIcon: Sparkles,
//       title: 'Frontend',
//       description: 'Build stunning user interfaces with modern frameworks.',
//       position: 'left',
//     },
//     {
//       icon: Home,
//       secondaryIcon: CheckCircle,
//       title: 'Backend',
//       description:
//         'Develop robust server-side applications with scalable architecture.',
//       position: 'left',
//     },
//     {
//       icon: PenTool,
//       secondaryIcon: Star,
//       title: 'Design',
//       description: 'Create beautiful and functional designs for better UX.',
//       position: 'left',
//     },
//     {
//       icon: PaintBucket,
//       secondaryIcon: Sparkles,
//       title: 'DevOps',
//       description: 'Streamline deployment with modern CI/CD pipelines.',
//       position: 'right',
//     },
//     {
//       icon: Ruler,
//       secondaryIcon: CheckCircle,
//       title: 'Mobile',
//       description: 'Build native and cross-platform mobile applications.',
//       position: 'right',
//     },
//     {
//       icon: Building2,
//       secondaryIcon: Star,
//       title: 'Cloud',
//       description: 'Deploy and scale with modern cloud infrastructure.',
//       position: 'right',
//     },
//   ]

//   const stats = [
//     { icon: Award, value: 150, label: 'Projects Completed', suffix: '+' },
//     { icon: Users, value: 1200, label: 'Happy Clients', suffix: '+' },
//     { icon: Calendar, value: 12, label: 'Years Experience', suffix: '' },
//     { icon: TrendingUp, value: 98, label: 'Satisfaction Rate', suffix: '%' },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className='py-24 px-4 bg-black text-white relative overflow-hidden'
//     >
//       <motion.div
//         className='absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl'
//         style={{ y: y1, rotate: rotate1 }}
//       />
//       <motion.div
//         className='absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-500/5 blur-3xl'
//         style={{ y: y2, rotate: rotate2 }}
//       />
//       <motion.div
//         className='container mx-auto max-w-6xl relative z-10'
//         initial='hidden'
//         animate={isInView ? 'visible' : 'hidden'}
//         variants={containerVariants}
//       >
//         <motion.div
//           className='flex flex-col items-center mb-6'
//           // variants={itemVariants}
//         >
//           <motion.span
//             className='text-red-500 font-medium mb-2 flex items-center gap-2'
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Zap className='w-4 h-4' /> DISCOVER OUR STORY
//           </motion.span>
//           <h2 className='text-4xl md:text-5xl font-light mb-4 text-center'>
//             About Us
//           </h2>
//           <motion.div
//             className='w-24 h-1 bg-red-500'
//             initial={{ width: 0 }}
//             animate={{ width: 96 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//         </motion.div>
//         <motion.p
//           className='text-center max-w-2xl mx-auto mb-16 text-gray-400'
//           // variants={itemVariants}
//         >
//           We are a passionate team dedicated to creating innovative digital
//           solutions.
//         </motion.p>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//           <div className='space-y-16'>
//             {services
//               .filter((s) => s.position === 'left')
//               .map((service, index) => (
//                 <ServiceItem
//                   key={`left-${index}`}
//                   {...service}
//                   variants={itemVariants}
//                   delay={index * 0.2}
//                   direction='left'
//                 />
//               ))}
//           </div>
//           <div className='flex justify-center items-center order-first md:order-none mb-8 md:mb-0'>
//             <motion.div
//               className='relative w-full max-w-xs'
//               // variants={itemVariants}
//             >
//               <motion.div
//                 className='rounded-md overflow-hidden shadow-xl'
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src='https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3025&auto=format&fit=crop'
//                   alt='Tech Innovation'
//                   className='w-full h-full object-cover'
//                 />
//                 <motion.div
//                   className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4'
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.9 }}
//                 >
//                   <Button className='bg-red-600 text-white rounded-full flex items-center gap-2 text-sm font-medium'>
//                     Our Portfolio <ArrowRight className='w-4 h-4' />
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//           <div className='space-y-16'>
//             {services
//               .filter((s) => s.position === 'right')
//               .map((service, index) => (
//                 <ServiceItem
//                   key={`right-${index}`}
//                   {...service}
//                   variants={itemVariants}
//                   delay={index * 0.2}
//                   direction='right'
//                 />
//               ))}
//           </div>
//         </div>
//         <motion.div
//           ref={statsRef}
//           className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
//           initial='hidden'
//           animate={isStatsInView ? 'visible' : 'hidden'}
//           variants={containerVariants}
//         >
//           {stats.map((stat, index) => (
//             <StatCounter key={index} {...stat} delay={index * 0.1} />
//           ))}
//         </motion.div>
//         <motion.div
//           className='mt-20 bg-red-600/10 border border-red-600/20 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6'
//           initial={{ opacity: 0, y: 30 }}
//           animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className='flex-1'>
//             <h3 className='text-2xl font-medium mb-2'>
//               Ready to build something amazing?
//             </h3>
//             <p className='text-gray-400'>Let's create the future together.</p>
//           </div>
//           <Button
//             className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium'
//             // whileHover={{ scale: 1.05 }}
//             // whileTap={{ scale: 0.95 }}
//           >
//             Get Started <ArrowRight className='w-4 h-4' />
//           </Button>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

// interface ServiceItemProps {
//   icon: React.ComponentType<{ className?: string }>
//   secondaryIcon: React.ComponentType<{ className?: string }>
//   title: string
//   description: string
//   variants: any
//   delay: number
//   direction: 'left' | 'right'
// }

// function ServiceItem({
//   icon: Icon,
//   secondaryIcon: SecondaryIcon,
//   title,
//   description,
//   variants,
//   delay,
//   direction,
// }: ServiceItemProps) {
//   return (
//     <motion.div
//       className='flex flex-col group'
//       variants={variants}
//       transition={{ delay }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//     >
//       <motion.div
//         className='flex items-center gap-3 mb-3'
//         initial={{ x: direction === 'left' ? -20 : 20, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: delay + 0.2 }}
//       >
//         <motion.div
//           className='text-red-500 bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 relative'
//           whileHover={{
//             rotate: [0, -10, 10, -5, 0],
//             transition: { duration: 0.5 },
//           }}
//         >
//           <Icon className='w-6 h-6' />
//           <SecondaryIcon className='w-4 h-4 absolute -top-1 -right-1 text-red-400' />
//         </motion.div>
//         <h3 className='text-xl font-medium text-white group-hover:text-red-400'>
//           {title}
//         </h3>
//       </motion.div>
//       <motion.p
//         className='text-sm text-gray-400 leading-relaxed pl-12'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: delay + 0.4 }}
//       >
//         {description}
//       </motion.p>
//       <motion.div
//         className='mt-3 pl-12 flex items-center text-red-500 text-xs font-medium opacity-0 group-hover:opacity-100'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0 }}
//       >
//         <span className='flex items-center gap-1'>
//           Learn more <ArrowRight className='w-3 h-3' />
//         </span>
//       </motion.div>
//     </motion.div>
//   )
// }

// interface StatCounterProps {
//   icon: React.ComponentType<{ className?: string }>
//   value: number
//   label: string
//   suffix: string
//   delay: number
// }

// function StatCounter({
//   icon: Icon,
//   value,
//   label,
//   suffix,
//   delay,
// }: StatCounterProps) {
//   const countRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(countRef, { once: false })
//   const [hasAnimated, setHasAnimated] = useState(false)
//   const springValue = useSpring(0, { stiffness: 50, damping: 10 })
//   const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       springValue.set(value)
//       setHasAnimated(true)
//     } else if (!isInView && hasAnimated) {
//       springValue.set(0)
//       setHasAnimated(false)
//     }
//   }, [isInView, value, springValue, hasAnimated])

//   return (
//     <motion.div
//       className='bg-black/50 backdrop-blur-sm border border-red-600/20 p-6 rounded-xl flex flex-col items-center text-center group hover:bg-black/70'
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
//       }}
//       whileHover={{ y: -5 }}
//     >
//       <motion.div
//         className='w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-500/20'
//         whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
//       >
//         <Icon />
//       </motion.div>
//       <motion.div
//         ref={countRef}
//         className='text-3xl font-bold text-white flex items-center'
//       >
//         <motion.span>{displayValue}</motion.span>
//         <span>{suffix}</span>
//       </motion.div>
//       <p className='text-gray-400 text-sm mt-1'>{label}</p>
//       <motion.div className='w-10 h-0.5 bg-red-500 mt-3 group-hover:w-16' />
//     </motion.div>
//   )
// }

export const AboutSection = () => (
  <section className='py-24 border-t border-white/10'>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl font-bold mb-6'>About Avis Events</h2>
        <p className='text-xl text-gray-400 max-w-3xl mx-auto pb-4'>
          We&apos;re a premier event management company dedicated to creating
          extraordinary experiences that leave lasting impressions.
        </p>
      </div>
      <BentoGrid />
    </div>
  </section>
)
