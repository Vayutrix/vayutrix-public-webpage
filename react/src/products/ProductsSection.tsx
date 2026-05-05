import { getAllProducts } from './registry'

export function ProductsSection() {
  const products = getAllProducts()

  return (
    <section id="product" className="section product-section">
      <div className="section-inner">
        <div className="section-header centered">
          <p className="section-label">Products</p>
          <h2 className="section-title">Production-Grade Edge Products</h2>
          <p className="section-sub">
            Cloudflare edge is our default reference stack — but we are not limited to it. These products can be
            adapted to run on AWS, GCP, Azure, or on‑premises infrastructure to match your deployment and compliance
            requirements.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {products.map((p, idx) => (
            <div
              key={p.id}
              className={`product-card reveal${p.cardTone === 'alt' ? ' alt' : ''}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <div className="product-info">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    {p.logoEmoji ? (
                      <div style={{ fontSize: '1.9rem', lineHeight: 1 }}>{p.logoEmoji}</div>
                    ) : p.logo?.kind === 'image' ? (
                      <img
                        src={p.logo.src}
                        style={{ width: 38, height: 38, borderRadius: 8, objectFit: 'contain', display: 'block' }}
                      />
                    ) : null}
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '.975rem',
                        color: 'var(--dark)',
                        lineHeight: 1.3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {p.name}
                    </div>
                  </div>

                  {p.status?.label ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 999,
                          background: '#22c55e',
                          boxShadow: '0 0 0 4px rgba(34,197,94,.15)',
                        }}
                      />
                      <span style={{ color: '#16a34a', fontSize: 12, fontWeight: 600 }}>{p.status.label}</span>
                    </span>
                  ) : null}
                </div>

                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 12 }}>
                  {p.description}
                </p>

                <details style={{ marginBottom: 14, border: '1px solid var(--border)', borderRadius: 12, padding: '10px 12px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--dark)' }}>Architecture</summary>
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {p.architectureLayers.map((l) => (
                      <div key={l.label + l.value} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: '.06em',
                            textTransform: 'uppercase',
                            color: '#fff',
                            background: 'linear-gradient(135deg, var(--teal), #4f46e5)',
                            padding: '4px 8px',
                            borderRadius: 8,
                            flex: '0 0 auto',
                          }}
                        >
                          {l.label}
                        </span>
                        <span style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>{l.value}</span>
                      </div>
                    ))}
                  </div>
                </details>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', paddingTop: '.75rem', borderTop: '1px solid var(--border)' }}>
                  {p.stackTags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 999,
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                        background: 'rgba(255,255,255,.92)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 16 }}>
                  <a className="btn btn-primary" href={p.liveUrl} target="_blank" rel="noreferrer">
                    {p.liveLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
