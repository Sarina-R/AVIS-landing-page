'use client'
import { useState } from 'react'
import { Copy } from 'lucide-react'

const code = `import avisengine
import cv2

# Connect to simulator
car.connect("127.0.0.1", 25001)

# Take Control
while(True):
    # Set Speed
    car.setSpeed(20)

    # Set Steering
    car.setSteering(-10)

    # Get sensors and camera data
    car.getData()
...`

export const CodeBlock = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className=' backdrop-blur-xl bg-primary-gradient
        border border-border group
        hover:shadow-2xl transition-all duration-500
        dark:bg-primary-gradient dark:border-dark-border relative bg-gradient-to-br from-[#1c1c2a] to-[#12121a] p-4 rounded-xl shadow-xl overflow-auto height-3xl'
    >
      <pre className='text-sm text-white font-mono relative pl-10 leading-relaxed'>
        <code>
          {code.split('\n').map((line, index) => (
            <div key={index} className={`relative group`}>
              <span className='absolute -left-7 w-6 text-right text-neutral-600 select-none pr-12'>
                {index + 1}
              </span>
              <span
                className={
                  index === 4
                    ? 'bg-white/10 rounded px-1 py-0.5 block w-fit'
                    : ''
                }
              >
                <SyntaxHighlighter line={line} />
              </span>
            </div>
          ))}
        </code>
      </pre>

      <button
        onClick={handleCopy}
        className='absolute top-3 right-3 text-white/60 hover:text-white transition-colors cursor-pointer'
      >
        <Copy className='w-4 h-4' />
      </button>

      {copied && (
        <span className='absolute top-3 right-12 text-xs text-green-400'>
          Copied!
        </span>
      )}
    </div>
  )
}

const SyntaxHighlighter = ({ line }: { line: string }) => {
  const tokens = line
    .split(/(\s+|".*?"|\d+|True|False|\(|\)|#.*)/g)
    .filter(Boolean)

  return (
    <>
      {tokens.map((token, idx) => {
        if (token.startsWith('#')) {
          return (
            <span key={idx} className='text-neutral-500 italic'>
              {token}
            </span>
          )
        }
        if (token === 'import') {
          return (
            <span key={idx} className='text-purple-400'>
              {token}
            </span>
          )
        }
        if (token === 'while' || token === 'True' || token === 'False') {
          return (
            <span key={idx} className='text-orange-400'>
              {token}
            </span>
          )
        }
        if (/^\d+$/.test(token)) {
          return (
            <span key={idx} className='text-orange-300'>
              {token}
            </span>
          )
        }
        if (/^".*?"$/.test(token)) {
          return (
            <span key={idx} className='text-emerald-300'>
              {token}
            </span>
          )
        }
        return <span key={idx}>{token}</span>
      })}
    </>
  )
}
