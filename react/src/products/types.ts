export type ProductArchitectureLayer = {
  label: string
  value: string
}

export type Product = {
  id: string
  /** Lower sorts first */
  sortOrder?: number
  name: string
  description: string
  highlights: string[]
  architectureLayers: ProductArchitectureLayer[]
  stackTags: string[]
  liveUrl: string
  liveLabel: string
  logo?: {
    kind: 'image'
    src: string
  }
  logoEmoji?: string
  /** Card background stripe: omit for default white card */
  cardTone?: 'default' | 'alt'
  status?: {
    label: string
    tone?: 'live'
  }
}

export type ProductModule = {
  product: Product
}
