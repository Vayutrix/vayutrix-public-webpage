import type { ProductModule } from '../../types'

const module: ProductModule = {
  product: {
    id: 'property-rental-manager',
    sortOrder: 20,
    name: 'Property Rental Manager',
    description:
      'Secure, edge-native platform for property managers to track rent payments, flag overdue balances, and audit tenant payment history. Built on Cloudflare’s global edge with encrypted data storage and role-based access for landlords and tenants.',
    highlights: [
      'Per-tenant payment ledger with real-time balance tracking',
      'Automated overdue detection and configurable late-fee rules',
      'Encrypted tenant records stored in Cloudflare D1 (AES-GCM)',
      'Role-based access control — landlord vs. tenant portal views',
      'Full audit log of every payment event with timestamps',
      'Secure invite-based tenant onboarding with JWT authentication',
    ],
    architectureLayers: [
      { label: 'FE', value: 'React + TypeScript · Vite · Cloudflare Pages' },
      { label: 'API', value: 'Cloudflare Workers · Hono.js · JWT Auth · Role-based middleware' },
      { label: 'DB', value: 'Cloudflare D1 · AES-GCM encrypted records · Payment audit log' },
      { label: 'INFRA', value: 'Cloudflare Edge Network · Wrangler CLI · GitHub Actions CI/CD' },
    ],
    stackTags: [
      'React',
      'TypeScript',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Hono.js',
      'Web Crypto API',
      'JWT',
      'Cloudflare Pages',
      'Wrangler CLI',
    ],
    liveUrl: 'https://realproperty.vayutrix.com/',
    liveLabel: 'Try it...',
    logoEmoji: '🏢',
    cardTone: 'default',
    status: { label: 'Live', tone: 'live' },
  },
}

export default module
