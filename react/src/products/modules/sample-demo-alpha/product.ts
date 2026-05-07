import type { ProductModule } from '../../types'

const module: ProductModule = {
  product: {
    id: 'sample-demo-alpha',
    sortOrder: 90,
    name: 'Preview — Alpha Stream',
    description:
      'Demo card for layout only. Stream ingestion with durable queues and replay — illustrative copy.',
    highlights: [],
    architectureLayers: [
      { label: 'FE', value: 'Sample shell (preview)' },
      { label: 'API', value: 'Sample gateway (preview)' },
      { label: 'DB', value: 'Sample store (preview)' },
      { label: 'INFRA', value: 'Edge (preview)' },
    ],
    stackTags: ['Preview', 'Demo'],
    liveUrl: '#product',
    liveLabel: 'Preview',
    logoEmoji: '📡',
    cardTone: 'default',
    status: { label: 'Preview', tone: 'live' },
  },
}

export default module
