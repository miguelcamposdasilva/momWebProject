import React, { useState, useEffect } from 'react'

const PHONE = '+56984364519'
const PHONE_DISPLAY = '+56 9 8436 4519'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Parques', href: '#parques' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Financiamiento', href: '#financiamiento' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(250,250,247,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--borde)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 1.5rem',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px',
      }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--verde-medio)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'var(--crema)', fontSize: 18 }}>🌿</span>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--verde-oscuro)',
              lineHeight: 1.1,
            }}>Cotiza Sepulturas</div>
            <div style={{
              fontSize: '0.7rem',
              color: 'var(--texto-suave)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>y Parques Cementerios</div>
          </div>
        </a>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}
             className="nav-desktop">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '0.875rem',
              color: 'var(--texto-suave)',
              fontWeight: 400,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--verde-oscuro)'}
            onMouseLeave={e => e.target.style.color = 'var(--texto-suave)'}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${PHONE}`} style={{
            background: 'var(--verde-oscuro)',
            color: 'var(--crema)',
            padding: '8px 18px',
            borderRadius: 40,
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = 'var(--verde-medio)'}
          onMouseLeave={e => e.target.style.background = 'var(--verde-oscuro)'}>
            📞 {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--verde-oscuro)',
          }}
          className="nav-mobile-btn">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--blanco)',
          borderTop: '1px solid var(--borde)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--crema-oscura)',
                color: 'var(--texto-principal)',
                fontSize: '1rem',
              }}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${PHONE}`} style={{
            display: 'block',
            marginTop: '1rem',
            background: 'var(--verde-oscuro)',
            color: 'var(--crema)',
            padding: '12px',
            borderRadius: 40,
            textAlign: 'center',
            fontWeight: 500,
          }}>📞 Llamar ahora · {PHONE_DISPLAY}</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
