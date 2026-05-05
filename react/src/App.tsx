import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { ProductsSection } from './products/ProductsSection'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)

  const navLinks = useMemo(
    () => [
      { href: '#home', label: 'Home' },
      { href: '#capabilities', label: 'Services' },
      { href: '#product', label: 'Product' },
      { href: '#about', label: 'About' },
    ],
    [],
  )

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target) return

      // Handle hamburger separately
      if (target.closest('.hamburger')) return

      const link = target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')

      // external links / mailto: let browser handle
      if (!href || !href.startsWith('#')) return

      // Prevent default anchor jump
      e.preventDefault()

      // Close mobile menu
      setMobileOpen(false)

      // If just "#", do nothing
      if (href === '#') return

      const el = document.querySelector(href)
      if (!el) return

      const navH = document.querySelector('nav')?.clientHeight ?? 0
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }

    const onOutsideClickCloseMobile = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target) return
      if (target.closest('.hamburger')) return

      const menu = document.getElementById('mobileMenu')
      if (mobileOpen && menu && !menu.contains(target)) setMobileOpen(false)
    }

    document.addEventListener('click', onDocumentClick)
    document.addEventListener('click', onOutsideClickCloseMobile)
    return () => {
      document.removeEventListener('click', onDocumentClick)
      document.removeEventListener('click', onOutsideClickCloseMobile)
    }
  }, [mobileOpen])

  useEffect(() => {
    const navSections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]
    const allNavLinks = Array.from(document.querySelectorAll("a[href^='#']"))

    const setActive = () => {
      const navH = (document.querySelector('nav')?.clientHeight ?? 0) + 20
      let current = ''
      for (const sec of navSections) {
        if (window.scrollY >= sec.offsetTop - navH) current = sec.id
      }
      for (const a of allNavLinks) {
        a.classList.remove('nav-active')
        if (a.getAttribute('href') === `#${current}`) a.classList.add('nav-active')
      }
    }

    const setShadow = () => {
      const nav = document.querySelector('nav') as HTMLElement | null
      if (!nav) return
      nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,.08)' : 'none'
    }

    window.addEventListener('scroll', setActive, { passive: true })
    window.addEventListener('scroll', setShadow, { passive: true })
    setActive()
    setShadow()

    return () => {
      window.removeEventListener('scroll', setActive)
      window.removeEventListener('scroll', setShadow)
    }
  }, [])

  useLayoutEffect(() => {
    const seen = new WeakSet<Element>()

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    const scan = () => {
      const reveals = Array.from(document.querySelectorAll('.reveal'))
      for (const el of reveals) {
        if (seen.has(el)) continue
        seen.add(el)
        obs.observe(el)
      }
    }

    let raf = 0
    const scheduleScan = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => scan())
    }

    scan()

    const mo = new MutationObserver(() => scheduleScan())
    mo.observe(document.documentElement, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      mo.disconnect()
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          {logoOk ? (
            <>
              <img
                src="/vaytrix-logo.png"
                onError={() => setLogoOk(false)}
                style={{ height: '40px', width: 'auto' }}
              />
              <span
                style={{
                  marginLeft: '10px',
                  fontFamily: "'Black Ops One', 'Noto Sans', system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  letterSpacing: '.12em',
                  color: 'var(--dark)',
                  lineHeight: 1,
                }}
              >
                VĀYUṬRIX
              </span>
            </>
          ) : null}
        </div>
        <ul className="nav-menu">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          {/* <li><a href="mailto:hello@vayutrix.com" className="nav-cta">Contact Sales</a></li> */}
        </ul>
        <button
          className="hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobileMenu">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a href="mailto:hello@vayutrix.com" className="m-cta">
          Contact Sales
        </a>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-eyebrow">
          <span className="dot"></span> Engineering the Digital Future
        </div>
        <h1>
          Build Smarter.
          <br />
          <em>Scale Faster.</em>
        </h1>
        <p>
          Vayutrix architects next-generation applications powered by AI, cloud-native infrastructure,
          and modern digital technology — built for the businesses of tomorrow.
        </p>
        <div className="hero-actions">
          <a href="#product" className="btn btn-primary">
            Explore Our Product
          </a>
          <a href="#about" className="btn btn-outline">
            About Us
          </a>
        </div>
        {logoOk ? <img className="hero-logo" src="/vaytrix-logo.png" /> : null}
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="section">
        <div className="section-inner">
          <div className="section-header centered">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Full-Spectrum Digital Engineering</h2>
            <p className="section-sub">
              From intelligent AI integrations to cloud-native architectures — we design and build
              software that drives real business outcomes.
            </p>
          </div>
          <div className="caps-grid">
            <div className="cap-card reveal">
              <div className="cap-icon">🤖</div>
              <h3>Custom AI Integration</h3>
              <p>
                Embedding predictive analytics and generative AI directly into your business
                processes to drive unprecedented efficiency and intelligent automation.
              </p>
            </div>
            <div className="cap-card reveal" style={{ transitionDelay: '.1s' }}>
              <div className="cap-icon">☁️</div>
              <h3>Cloud-Native Architecture</h3>
              <p>
                Expert design of microservices and containerised applications on AWS, Docker, and
                Kubernetes — built for elastic scalability and zero downtime.
              </p>
            </div>
            <div className="cap-card reveal" style={{ transitionDelay: '.2s' }}>
              <div className="cap-icon">⚡</div>
              <h3>Full-Stack Excellence</h3>
              <p>
                High-performance React and Next.js frontends paired with secure, enterprise-grade
                Java and Spring Boot backends — tested end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual reveal">
              {logoOk ? (
                <img src="/vaytrix-logo.png" onError={() => setLogoOk(false)} />
              ) : null}
              {/* <h3>Vayutrix Solutions</h3> */}
              <p>
                Where agility meets a multifaceted matrix of technological solutions — designed for
                the global market.
              </p>
              <span className="about-domain">vayutrix.com</span>
            </div>
            <div className="about-content reveal" style={{ transitionDelay: '.12s' }}>
              <p className="section-label">About Us</p>
              <h2 className="section-title">Built to Engineer Your Future</h2>
              <p className="about-para">
                Vayutrix represents the intersection of agility — <em>Vayu</em>, the Sanskrit word
                for wind — and a multifaceted matrix of technological solutions. We are a technology
                company focused on building intelligent, cloud-native applications that solve
                real-world business problems.
              </p>
              <p className="about-para">
                Based in India and serving a global market, our mission is to provide the most
                sophisticated digital tech stack — enabling businesses to automate the present and
                confidently engineer their future.
              </p>
              <p className="about-para">
                We don&apos;t just consult. We design, build, and ship production-grade software with
                deep engineering expertise at every level of the stack.
              </p>
              <div className="value-pills">
                <span className="vpill">AI-First Thinking</span>
                <span className="vpill">Cloud Native</span>
                <span className="vpill">Enterprise Grade</span>
                <span className="vpill">Production Ready</span>
                <span className="vpill">India-Based, Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              {logoOk ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      width: '100%',
                    }}
                  >
                    <img
                      src="/vaytrix-logo.png"
                      onError={() => setLogoOk(false)}
                      style={{ width: '96px', height: 'auto', flex: '0 0 auto' }}
                    />
                    <span
                      style={{
                        fontFamily: "'Black Ops One', 'Noto Sans', system-ui, sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        color: '#e5e7eb',
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                        flex: '0 0 auto',
                      }}
                    >
                      VĀYUṬRIX
                    </span>
                  </div>

                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <span
                      style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Engineering the Digital Future
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="footer-links-group">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href="mailto:hello@vayutrix.com">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Vayutrix Business Associates. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a
                href="#"
                style={{
                  color: '#4b5563',
                  fontSize: '12px',
                  transition: 'color .2s',
                }}
                onMouseOver={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
                onMouseOut={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#4b5563'
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: '#4b5563',
                  fontSize: '12px',
                  transition: 'color .2s',
                }}
                onMouseOver={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
                onMouseOut={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#4b5563'
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="social-sidebar">
        <a href="" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/vayutrix.in?igsh=dWs5YmQ2OTBpZTFu&utm_source=ig_contact_invite"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a href="" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default App
