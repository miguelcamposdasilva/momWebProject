import React from 'react'

const PHONE = '+56984364519'
const WA_BASE = 'https://wa.me/56984364519?text='

const waMsg = (txt) => `${WA_BASE}${encodeURIComponent(txt)}`

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Sección principal - Cotiza Sepulturas y Parques Cementerios"
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse at 70% 40%, rgba(74,124,95,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 10% 80%, rgba(45,90,64,0.1) 0%, transparent 50%),
          var(--crema)
        `,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>

      {/* Decoración de fondo */}
      <div style={{
        position: 'absolute', top: '8%', right: '-5%',
        width: '420px', height: '420px',
        borderRadius: '50%',
        border: '1px solid rgba(45,90,64,0.12)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '15%', right: '2%',
        width: '280px', height: '280px',
        borderRadius: '50%',
        border: '1px solid rgba(45,90,64,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'rgba(74,124,95,0.06)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Texto principal */}
          <div>
            <div className="fade-up" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(45,90,64,0.08)',
              border: '1px solid rgba(45,90,64,0.2)',
              borderRadius: 40,
              padding: '6px 14px',
              fontSize: '0.78rem',
              color: 'var(--verde-medio)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              <span>🌿</span> Atención 24/7 · Chile
            </div>

            <h1 className="fade-up delay-1" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 700,
              color: 'var(--verde-oscuro)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              Planifica con calma.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--verde-suave)' }}>
                Protege a tu familia.
              </em>
            </h1>

            <p className="fade-up delay-2" style={{
              fontSize: '1.05rem',
              color: 'var(--texto-suave)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '480px',
            }}>
              Asesoría gratuita y personalizada en la compra de sepulturas y servicios funerarios.
              Comparamos los mejores parques cementerios de Chile para que tomes la mejor decisión
              <strong style={{ color: 'var(--verde-oscuro)' }}> con tiempo y sin presión.</strong>
            </p>

            {/* CTAs */}
            <div className="fade-up delay-3" style={{
              display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem',
            }}>
              <a href={waMsg('Hola, me gustaría cotizar una sepultura. ¿Pueden ayudarme?')}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#25D366',
                  color: '#fff',
                  padding: '14px 24px',
                  borderRadius: 40,
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 6px 24px rgba(37,211,102,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(37,211,102,0.3)'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar por WhatsApp
              </a>
              <a href="tel:+56984364519" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent',
                color: 'var(--verde-oscuro)',
                border: '1.5px solid var(--verde-oscuro)',
                padding: '13px 22px',
                borderRadius: 40,
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--verde-oscuro)'; e.currentTarget.style.color='var(--crema)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--verde-oscuro)'; }}>
                📞 Llamar ahora
              </a>
            </div>

            {/* Trust indicators */}
            <div className="fade-up delay-4" style={{
              display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
            }}>
              {[
                { icon: '🆓', text: 'Asesoría sin costo' },
                { icon: '💳', text: 'Hasta 48 cuotas' },
                { icon: '🕐', text: 'Atención 24/7' },
                { icon: '🏆', text: '5 parques disponibles' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.82rem', color: 'var(--texto-suave)',
                }}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card flotante decorativa */}
          <div className="fade-up delay-2" style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--blanco)',
              border: '1px solid var(--borde)',
              borderRadius: 24,
              padding: '2rem',
              boxShadow: '0 20px 60px rgba(26,58,42,0.1)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--verde-oscuro)',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}>
                ¿Qué desea cotizar?
              </div>

              {[
                { label: 'Sepultura Individual', msg: 'Hola, me gustaría cotizar una sepultura individual. ¿Pueden ayudarme con precios y disponibilidad?' },
                { label: 'Sepultura Doble', msg: 'Hola, me gustaría cotizar una sepultura doble (2 capacidades). ¿Cuáles son las opciones disponibles?' },
                { label: 'Sepultura Familiar (3–4 cap.)', msg: 'Hola, me gustaría cotizar una sepultura familiar para 3 a 4 personas. ¿Pueden asesorarme?' },
                { label: 'Sepultura Familiar (8 cap.)', msg: 'Hola, me gustaría cotizar una sepultura familiar para 8 personas. ¿Qué parques tienen disponibilidad?' },
                { label: 'Cremación / Columbario', msg: 'Hola, me gustaría información sobre opciones de cremación y columbario. ¿Pueden asesorarme?' },
                { label: 'Comparar todos los parques', msg: 'Hola, quisiera comparar las opciones de sepulturas en todos los parques disponibles. ¿Pueden enviarme información?' },
              ].map(({ label, msg }) => (
                <a
                  key={label}
                  href={`${WA_BASE}${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    marginBottom: '8px',
                    borderRadius: 12,
                    border: '1px solid var(--crema-oscura)',
                    background: 'var(--crema)',
                    fontSize: '0.875rem',
                    color: 'var(--texto-principal)',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--verde-claro)'; e.currentTarget.style.background='var(--blanco)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--crema-oscura)'; e.currentTarget.style.background='var(--crema)'; }}>
                  <span>{label}</span>
                  <span style={{ color: '#25D366', fontSize: '1.1rem' }}>→</span>
                </a>
              ))}

              <div style={{
                marginTop: '1rem',
                padding: '10px 14px',
                background: 'rgba(37,211,102,0.08)',
                borderRadius: 10,
                fontSize: '0.78rem',
                color: 'var(--verde-medio)',
                textAlign: 'center',
              }}>
                ✓ Respuesta inmediata · ✓ Sin costo · ✓ Sin compromiso
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
