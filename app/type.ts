export interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
}

export interface TextParticleProps {
  text: string
  fontSize?: number
  fontFamily?: string
  particleSize?: number
  particleColor?: string
  particleDensity?: number
  backgroundColor?: string
  className?: string
}

export interface ModernCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}
