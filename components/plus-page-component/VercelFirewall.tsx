import React from 'react'

export const VercelFirewall: React.FC = () => {
  return (
    <div className='bg-black p-10 border border-white/10'>
      <div className='flex items-center mb-2'>
        <span className='text-gray-400 mr-2'>🛡️</span>
        <h2 className='text-lg font-semibold'>Vercel Firewall</h2>
      </div>
      <p className='text-sm mb-4'>
        Edge-localized protection. L3/L4 protection at every edge location. Your
        site stays protected without adding latency.
      </p>
      <div className='flex space-x-4 justify-center'>
        <div className='text-center'>
          <span className='block text-gray-400'>L3/L4 DDoS</span>
          <span className='block text-red-500'>█</span>
          <span className='block'>Protection</span>
        </div>
        <div className='text-center'>
          <span className='block text-gray-400'>Global L7</span>
          <span className='block text-green-500'>█</span>
          <span className='block'>Firewall</span>
        </div>
        <div className='text-center'>
          <span className='block text-gray-400'>Bot</span>
          <span className='block text-red-500'>█</span>
          <span className='block'>Management</span>
        </div>
      </div>
    </div>
  )
}
