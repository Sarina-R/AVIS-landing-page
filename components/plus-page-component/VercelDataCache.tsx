import React from 'react'

export const VercelDataCache: React.FC = () => {
  return (
    <div className='bg-black p-10 border border-white/10'>
      <div className='flex items-center mb-2'>
        <span className='text-gray-400 mr-2'>📂</span>
        <h2 className='text-lg font-semibold'>Vercel Data Cache</h2>
      </div>
      <p className='text-sm mb-4'>
        Total control. Regenerate pages or cache function responses on demand,
        improving performance and reducing backend load.
      </p>
      <div className='flex items-center space-x-2'>
        <span className='text-gray-400'>User 1</span>
        <span className='text-gray-400'>➡️</span>
        <div className='bg-gray-800 p-2 rounded'>Page Cache (old)</div>
        <span className='text-gray-400'>➡️</span>
        <span className='text-gray-400'>Trigger or interval</span>
        <span className='text-gray-400'>➡️</span>
        <span className='text-gray-400'>Regenerate page + update cache</span>
      </div>
      <div className='flex items-center space-x-2 mt-2'>
        <span className='text-gray-400'>User 2</span>
        <span className='text-gray-400'>➡️</span>
        <div className='bg-gray-800 p-2 rounded'>Page Cache (new)</div>
      </div>
    </div>
  )
}
