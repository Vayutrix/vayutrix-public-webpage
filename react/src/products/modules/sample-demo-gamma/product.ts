import type { ProductModule } from '../../types'

const module: ProductModule = {
  product: {
    id: 'sample-demo-gamma',
    sortOrder: 92,
    name: 'Preview — Gamma Lake',
    description:
      'Demo card for layout only. Batch and streaming pipelines with lineage-friendly metadata — illustrative copy.',
    highlights: [],
    architectureLayers: [
      { label: 'FE', value: 'Operator UI (preview)' },
      { label: 'API', value: 'Orchestration (preview)' },
      { label: 'DB', value: 'Lake tables (preview)' },
      { label: 'INFRA', value: 'Runtime (preview)' },
    ],
    stackTags: ['Preview', 'Demo'],
    liveUrl: '#product',
    liveLabel: 'Preview',
    logoEmoji: '🗄️',
    cardTone: 'default',
    status: { label: 'Preview', tone: 'live' },
  },
}

export default module
