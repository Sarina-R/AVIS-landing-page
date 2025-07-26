export default function CodeBlock() {
  return (
    <>
      <div className='relative w-full max-w-2xl rounded-xl p-0.5'>
        <div className='code-border-anim' />
        <div className='relative overflow-hidden rounded-xl bg-[radial-gradient(at_88%_40%,#000000_0,transparent_85%),radial-gradient(at_49%_30%,#000000_0,transparent_85%),radial-gradient(at_14%_26%,#000000_0,transparent_85%),radial-gradient(at_0%_64%,#6e0101_0,transparent_85%),radial-gradient(at_41%_94%,#e90000_0,transparent_85%),radial-gradient(at_100%_99%,#000000_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,0,0,0.4)_inset] bg-black animate-redPulse'>
          {/* Shimmer Overlay */}
          <div className='absolute inset-0 shimmer-mask pointer-events-none' />

          <div className='flex items-center justify-between pb-4 relative z-10'>
            <span className='text-base font-semibold text-white'>app.tsx</span>
            <button className='rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition hover:bg-secondary'>
              Copy
            </button>
          </div>

          <pre className='m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-green-100 relative z-10'>
            <code>
              <span className='text-[#1fcdfc]'>import</span> avisengine
              <br />
              <span className='text-[#1fcdfc]'>import</span> cv2
              <br />
              <br />
              <span className='text-[#777]'># Connect to simulator</span>
              <br />
              car.connect(
              <span className='text-[#f7b731]'>
                &quot;127.0.0.1&quot;
              </span>, <span className='text-[#f7b731]'>25001</span>)<br />
              <br />
              <span className='text-[#777]'># Take Control</span>
              <br />
              <span className='text-[#1fcdfc]'>while</span>(
              <span className='text-[#f7b731]'>True</span>):
              <br />
              &nbsp;&nbsp;<span className='text-[#777]'># Set Speed</span>
              <br />
              &nbsp;&nbsp;car.setSpeed(
              <span className='text-[#f7b731]'>20</span>)<br />
              <br />
              &nbsp;&nbsp;<span className='text-[#777]'># Set Steering</span>
              <br />
              &nbsp;&nbsp;car.setSteering(
              <span className='text-[#f7b731]'>-10</span>)<br />
              <br />
              &nbsp;&nbsp;
              <span className='text-[#777]'># Get sensors and camera data</span>
              <br />
              &nbsp;&nbsp;car.getData()
              <br />
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        /* Pulsing red glow */
        @keyframes redPulse {
          0%, 100% {
            box-shadow: 0px -16px 24px 0px rgba(255,0,0,0.2) inset;
          }
          50% {
            box-shadow: 0px -16px 40px 0px rgba(255,0,0,0.5) inset;
          }
        }
        .animate-redPulse {
          animation: redPulse 4s ease-in-out infinite;
        }

        /* Shimmer sweep */
        .shimmer-mask {
          background: linear-gradient(
            120deg,
            rgba(255,0,0,0) 0%,
            rgba(255,50,50,0.2) 40%,
            rgba(255,0,0,0) 70%
          );
          transform: translateX(-100%);
          animation: shimmerMove 6s ease-in-out infinite;
        }
        @keyframes shimmerMove {
          0% { transform: translateX(-100%) rotate(0deg); }
          50% { transform: translateX(100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(0deg); }
        }

        /* Keep the border anim you had */
        .code-border-anim {
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 1rem;
          overflow: hidden;
          pointer-events: none;
        }
        .code-border-anim::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 10rem;
          background: linear-gradient(
            0deg,
            hsla(0,0%,100%,0) 0%,
            rgba(255,0,0,0.8) 40%,
            rgba(255,0,0,0.8) 60%,
            hsla(0,0%,40%,0) 100%
          );
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: left;
          animation: border-rotate 8s linear infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes border-rotate {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}
