export default function MobileTiltMockup({ width = 130 }) {
  return (
    <svg
      width={width}
      viewBox='-50 -50 550 1100'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby='title desc'
      className='mx-auto'
    >
      <title id='title'>Minimal Tilted Mobile Mockup</title>
      <desc id='desc'>
        A minimal, modern SVG mockup of a tilted smartphone in black and white.
      </desc>

      {/* Phone group with tilt */}
      <g transform='skewX(-6) rotate(-2 250 500)'>
        {/* Phone body */}
        <rect
          x='50'
          y='50'
          width='400'
          height='900'
          rx='70'
          fill='#000'
          stroke='#fff'
          strokeWidth='10'
        />

        {/* Screen */}
        <rect
          x='70'
          y='110'
          width='360'
          height='780'
          rx='50'
          fill='#000'
          stroke='#fff'
          strokeWidth='4'
        />

        {/* Speaker notch */}
        <rect x='200' y='80' width='100' height='12' rx='6' fill='#fff' />

        {/* Side buttons */}
        <rect x='40' y='200' width='8' height='60' rx='4' fill='#fff' />
        <rect x='40' y='280' width='8' height='100' rx='4' fill='#fff' />
        <rect x='452' y='300' width='8' height='80' rx='4' fill='#fff' />

        {/* Home indicator */}
        <rect x='200' y='870' width='100' height='6' rx='3' fill='#fff' />
      </g>
    </svg>
  )
}
