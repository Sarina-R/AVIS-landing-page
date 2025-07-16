import React from 'react'

export const VercelFunctions: React.FC = () => {
  return (
    <div className='bg-black p-10 border border-white/10'>
      <div className='flex items-center mb-2'>
        <span className='text-gray-400 mr-2'>📡</span>
        <h2 className='text-lg font-semibold text-white'>Vercel Functions</h2>
      </div>
      <p className='text-sm mb-4 text-gray-300'>
        Servers made simple. We deploy and optimize the necessary compute for
        any scale, replicated across 18 regions.
      </p>
      <div className='flex items-center space-x-2'>
        <span className='text-green-400'>js app/api/beta.js</span>
        <div className='bg-gray-800 p-2 rounded'>
          <pre className='text-xs text-green-400'>
            {`export const GET = (request) => {
  if (isBetaUser(request)) {
    return new Response("Beta User");
  }
  return new Response("User");
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
