import type { ProductModule } from '../../types'

const module: ProductModule = {
  product: {
    id: 'sample-demo-beta',
    sortOrder: 91,
    name: 'Preview — Beta Fabric',
    description:
      'Demo card for layout only. API mesh with policies and rate limits — illustrative copy.',
    highlights: [],
    architectureLayers: [
      { label: 'FE', value: 'Dashboard (preview)' },
      { label: 'API', value: 'Gateway (preview)' },
      { label: 'DB', value: 'Policies (preview)' },
      { label: 'INFRA', value: 'Multi-region (preview)' },
    ],
    stackTags: ['Preview', 'Demo'],
    liveUrl: '#product',
    liveLabel: 'Preview',
    logoEmoji: '🧩',
    cardTone: 'alt',
    status: { label: 'Preview', tone: 'live' },
  },
}

export default module
