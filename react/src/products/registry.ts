import type { Product } from './types'

const modules = import.meta.glob('./modules/*/product.ts', { eager: true }) as Record<
  string,
  { default: { product: Product } }
>

export function getAllProducts(): Product[] {
  const products = Object.values(modules)
    .map((m) => m.default.product)
    .filter(Boolean)

  return products.sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999) || a.name.localeCompare(b.name))
}
