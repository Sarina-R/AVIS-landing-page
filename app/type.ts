export interface NavItem {
  name: string
  link: string
  children?: { name: string; link: string }[]
}

export interface NavigationProps {
  logo: string
  navItems: NavItem[]
}

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
