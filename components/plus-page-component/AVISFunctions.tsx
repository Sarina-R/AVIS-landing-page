export const AVISFunctions = () => {
  const codeLines = [
    {
      number: '1',
      content: [
        { text: 'export const', className: 'text-blue-400' },
        { text: 'LOGIN', className: 'ml-2' },
        { text: '(', className: 'text-yellow-400' },
        { text: 'request', className: 'text-orange-400' },
        { text: ') {', className: 'text-yellow-400' },
      ],
    },
    {
      number: '2',
      content: [
        { text: 'if', className: 'text-blue-400 ml-4' },
        { text: '(', className: 'text-yellow-400' },
        { text: 'isAVISPlusUser', className: 'text-blue-400' },
        { text: '(', className: 'text-yellow-400' },
        { text: 'request', className: 'text-orange-400' },
        { text: ')) {', className: 'text-yellow-400' },
      ],
    },
    {
      number: '3',
      content: [
        { text: 'return new', className: 'text-blue-400 ml-8' },
        { text: 'Response', className: 'ml-2' },
        { text: '(', className: 'text-yellow-400' },
        { text: '"🔑 AVIS Plus User"', className: 'text-green-400' },
        { text: ');', className: 'text-yellow-400' },
      ],
    },
    {
      number: '4',
      content: [{ text: '}', className: 'ml-4' }],
    },
    {
      number: '5',
      content: [
        { text: 'return new', className: 'text-blue-400 ml-4' },
        { text: 'Response', className: 'ml-2' },
        { text: '(', className: 'text-yellow-400' },
        { text: '"🔐 Guest User"', className: 'text-green-400' },
        { text: ');', className: 'text-yellow-400' },
      ],
    },
    {
      number: '6',
      content: [{ text: '}', className: 'text-yellow-400' }],
    },
  ]

  return (
    <div className='bg-black p-6 md:p-8 lg:p-10 border border-white/10 flex flex-col h-full'>
      {/* Header */}
      <div className='flex items-center mb-4' role='heading' aria-level={2}>
        <div className='w-5 h-5 mr-3 flex items-center justify-center'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-4 h-4 text-neutral-400'
            aria-hidden='true'
          >
            <rect
              x='2'
              y='4'
              width='20'
              height='16'
              rx='2'
              stroke='currentColor'
              strokeWidth='1.5'
            />
            <path
              d='M6 8H10M6 12H14M6 16H10'
              stroke='currentColor'
              strokeWidth='1.5'
            />
          </svg>
        </div>
        <h2 className='text-lg font-medium'>AVIS Functions</h2>
      </div>

      {/* Description */}
      <div className='mb-8 flex-1'>
        <p className='text-base font-medium mb-2'>
          <span className='font-bold'>Identity simplified.</span>{' '}
          <span className='text-neutral-400'>
            AVIS Plus handles authentication across all platforms, ensuring
            secure and scalable access.
          </span>
        </p>
      </div>

      {/* Code Section */}
      <div className='space-y-4'>
        {/* Code block */}
        <pre className='bg-black border border-white/20 rounded-md p-4 font-mono text-sm overflow-x-auto'>
          <code>
            {codeLines.map((line) => (
              <div className='flex' key={line.number}>
                <span className='text-neutral-500 mr-4'>{line.number}</span>
                {line.content.map((part, index) => (
                  <span key={index} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
