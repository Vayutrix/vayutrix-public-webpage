import type { ProductModule } from '../../types'

const module: ProductModule = {
  product: {
    id: 'pendulinevault',
    sortOrder: 10,
    name: 'PendulineVault — Identity & Secrets Management',
    description:
      'A lightweight, edge-native secrets and identity management platform. PendulineVault lets teams securely store, rotate, and audit access to API keys, tokens, and credentials — all running on Cloudflare’s global edge with encryption at rest in D1 and zero-latency secret retrieval via Workers.',
    highlights: [
      'Encrypted secret storage in Cloudflare D1 using Web Crypto API (AES-GCM)',
      'Identity management: user accounts, API key issuance, and role-based access control',
      'Secret versioning and rotation with full audit trail per secret',
      'JWT-based authentication with short-lived tokens issued at the edge',
      'Cloudflare Workers handle all auth, encryption, and secret retrieval logic globally',
      'React dashboard for managing vaults, secrets, identities, and access policies',
    ],
    architectureLayers: [
      { label: 'FE', value: 'React + TypeScript · Vite · Cloudflare Pages' },
      { label: 'API', value: 'Cloudflare Workers · Hono.js · JWT Auth · Web Crypto API' },
      { label: 'DB', value: 'Cloudflare D1 · AES-GCM encrypted secrets · Secret versioning' },
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
    liveUrl: 'https://penduline.vayutrix.com/',
    liveLabel: 'Try it...',
    logo: { kind: 'image', src: '/products/pendulinevault.png' },
    cardTone: 'default',
    status: { label: 'Live', tone: 'live' },
  },
}

export default module
