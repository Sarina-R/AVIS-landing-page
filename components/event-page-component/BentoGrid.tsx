import { AnimatedList } from './AnimatedList'
import { FileTree } from './FileTree'
import { IconCloudDemo } from '../IconCloudDemo'
import { Marquee3D } from '../Marquee3D'

export const BentoGrid = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <div className='col-span-1 lg:col-span-2 p-8 border border-white/10'>
      <h3 className='text-xl font-semibold mb-4'>Global Reach</h3>
      <p className='text-neutral-400 mb-6'>
        Serving clients across 50+ countries with local expertise and global
        standards.
      </p>
      <Marquee3D />
    </div>

    <div className='p-8 border border-white/10'>
      <h3 className='text-xl font-semibold mb-4'>Our Services</h3>
      <AnimatedList />
    </div>

    <div className='p-8 border border-white/10'>
      <h3 className='text-xl font-semibold mb-4'>Event Lifecycle</h3>
      <IconCloudDemo />
    </div>

    <div className='col-span-1 lg:col-span-2 from-neutral-900/20 to-neutral-800/20 p-8 border border-white/10'>
      <h3 className='text-xl font-semibold mb-4'>Tech Stack</h3>
      <p className='text-neutral-400 mb-6'>
        Modern tools and technologies powering exceptional events.
      </p>
      <FileTree />
    </div>
  </div>
)
