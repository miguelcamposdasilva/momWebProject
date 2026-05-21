import React from 'react'

const WA_BASE = 'https://wa.me/56984364519?text='

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      aria-label="Contacto y pie de página"
      style={{
        background: 'var(--cafe-oscuro)',
        color: 'rgba(245,240,232,0.8)',
        padding: '3.5rem 0 2rem',
      }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">

          {/* Columna marca */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              color: 'var(--crema)',
              marginBottom: '0.75rem',
              fontWeight: 600,
            }}>
              🌿 Cotiza Sepulturas y Parques
            </div>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '340px',
            }}>
              Asesoría personalizada y gratuita para la compra de sepulturas y servicios
              funerarios en Chile. Atención 24/7 todos los días del año.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:+56984364519" style={{
                color: 'var(--verde-claro)',
                fontSize: '0.875rem',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                📞 +56 9 8436 4519
              </a>
              <a
                href={`${WA_BASE}${encodeURIComponent('Hola, me gustaría obtener asesoría sobre sepulturas y parques cementerios.')}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  fontSize: '0.875rem',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                💬 WhatsApp directo
              </a>
              <a
                href="mailto:contacto@tuparquecementerio.cl"
                style={{
                  color: 'var(--crema)',
                  fontSize: '0.875rem',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                📩contacto@tuparquecementerio.cl
              </a>
            </div>
          </div>

          {/* Columna parques */}
          <div>
            <h3 style={{
              color: 'var(--crema)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}>
              Parques
            </h3>
            {['Parque Manantial', 'Parque El Prado', 'Parque Santiago', 'Parque Cannán', 'Parques La Foresta'].map(p => (
              <a
                key={p}
                href={`${WA_BASE}${encodeURIComponent(`Hola, me interesa información sobre ${p}. ¿Pueden asesorarme?`)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--crema)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}>
                {p}
              </a>
            ))}
          </div>

          {/* Columna servicios */}
          <div>
            <h3 style={{
              color: 'var(--crema)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}>
              Servicios
            </h3>
            {[
              ['Sepultura Individual', 'Sepultura individual para 1 persona'],
              ['Sepultura Doble', 'Sepultura doble para 2 personas'],
              ['Sepultura Familiar', 'Sepultura familiar para 3 a 8 personas'],
              ['Cremación', 'Información sobre cremación'],
              ['Columbario', 'Información sobre columbarios'],
            ].map(([label, msg]) => (
              <a
                key={label}
                href={`${WA_BASE}${encodeURIComponent(`Hola, me gustaría información sobre ${msg}. ¿Pueden asesorarme?`)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--crema)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.78rem' }}>
            © {currentYear} Cotiza Sepulturas y Parques · Chile
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/politica-de-privacidad" style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = 'var(--crema)'}
               onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}>
              Política de privacidad
            </a>
            <a href = "/terminos-y-condiciones" style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--crema)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}>
              Términos y condiciones
            </a>
            <a href="https://www.instagram.com/asesorias_yd"
               target="_blank" rel="noopener noreferrer"
               style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = 'var(--crema)'}
               onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.8)'}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  )
}
