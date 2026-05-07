import type { Product } from './types'

const modules = import.meta.glob('./modules/*/product.ts', { eager: true }) as Record<
  string,
  { default: { product: Product } }
>

/** Products shown on the site. Re-enable previews by adding ids: sample-demo-alpha, sample-demo-beta, sample-demo-gamma */
const ENABLED_PRODUCT_IDS = new Set<string>(['pendulinevault', 'property-rental-manager'])

export function getAllProducts(): Product[] {
  const products = Object.values(modules)
    .map((m) => m.default.product)
    .filter(Boolean)
    .filter((p) => ENABLED_PRODUCT_IDS.has(p.id))

  return products.sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999) || a.name.localeCompare(b.name))
}
