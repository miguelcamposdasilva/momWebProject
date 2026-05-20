import React from 'react'

const WA_BASE = 'https://wa.me/56984364519?text='

export default function Servicios() {
  const servicios = [
    {
      icon: '🪦',
      titulo: 'Sepultura Individual',
      desc: 'Parcela de 1 nivel para una persona. La opción más accesible con excelente ubicación en todos nuestros parques.',
      msg: 'Hola, me gustaría información sobre sepulturas individuales. ¿Cuáles son los precios y opciones disponibles?',
    },
    {
      icon: '👫',
      titulo: 'Sepultura Doble',
      desc: 'Capacidad para 2 personas. Ideal para parejas que desean estar juntos en un mismo espacio de descanso.',
      msg: 'Hola, me gustaría información sobre sepulturas dobles (2 capacidades). ¿Cuáles son las opciones y precios?',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      titulo: 'Sepultura Familiar 3-4',
      desc: 'Sepultura familiar para 3 a 4 integrantes. Ahorra planificando junto a toda la familia en un solo lugar.',
      msg: 'Hola, me interesa una sepultura familiar para 3 a 4 personas. ¿Pueden informarme sobre precios y disponibilidad?',
    },
    {
      icon: '🏡',
      titulo: 'Sepultura Familiar 8',
      desc: 'La opción más completa. Capacidad para 8 personas con precio por nivel y financiamiento especial.',
      msg: 'Hola, me interesa una sepultura familiar para 8 personas. ¿Pueden asesorarme sobre esta opción?',
    },
    {
      icon: '🕊️',
      titulo: 'Cremación',
      desc: 'Servicios de cremación con diferentes opciones de urnas y destino final. Una alternativa respetuosa y más accesible.',
      msg: 'Hola, me gustaría información sobre el servicio de cremación. ¿Cuáles son las opciones disponibles?',
    },
    {
      icon: '🏛️',
      titulo: 'Columbario',
      desc: 'Nicho individual o familiar para urnas de cenizas. Disponible en varios de nuestros parques cementerios.',
      msg: 'Hola, me interesa información sobre columbarios para urnas de cenizas. ¿Qué opciones y precios tienen?',
    },
  ]

  return (
    <>
      {/* SERVICIOS */}
      <section
        id="servicios"
        aria-label="Tipos de sepulturas y servicios funerarios disponibles"
        style={{
          padding: 'var(--section-py) 0',
          background: `linear-gradient(180deg, var(--blanco) 0%, var(--crema) 100%)`,
        }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: 'var(--verde-oscuro)',
              marginBottom: '0.75rem',
            }}>
              Tipos de sepulturas y servicios
            </h2>
            <p style={{
              fontSize: '1rem', color: 'var(--texto-suave)',
              maxWidth: '520px', margin: '0 auto', lineHeight: 1.7,
            }}>
              Cada familia es diferente. Por eso ofrecemos opciones para todos los presupuestos
              y necesidades, con asesoría completamente gratuita.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {servicios.map((s) => (
              <a
                key={s.titulo}
                href={`${WA_BASE}${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar sobre ${s.titulo}`}
                style={{
                  display: 'block',
                  background: 'var(--blanco)',
                  border: '1px solid var(--borde)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = 'var(--verde-claro)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,58,42,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--borde)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  color: 'var(--verde-oscuro)',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}>
                  {s.titulo}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--texto-suave)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}>
                  {s.desc}
                </p>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#25D366',
                  fontWeight: 500,
                }}>
                  Consultar por WhatsApp →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIAMIENTO */}
      <section
        id="financiamiento"
        aria-label="Opciones de financiamiento para sepulturas"
        style={{
          padding: 'var(--section-py) 0',
          background: 'var(--verde-oscuro)',
          position: 'relative',
          overflow: 'hidden',
        }}>

        {/* Decoración */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }} className="fin-grid">

            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: 'var(--crema)',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}>
                Financia tu sepultura
                <br />
                <em style={{ color: 'var(--verde-claro)' }}>sin interés</em>
              </h2>
              <p style={{
                color: 'rgba(245,240,232,0.75)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                Sabemos que planificar con anticipación es un acto de amor. Por eso ofrecemos
                condiciones de pago que se adaptan a cada familia, sin necesidad de crédito bancario
                ni trámites complicados.
              </p>

              <a
                href={`${WA_BASE}${encodeURIComponent('Hola, me gustaría información sobre las opciones de financiamiento disponibles para sepulturas. ¿Cuáles son los planes de cuotas?')}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#25D366', color: '#fff',
                  padding: '14px 24px', borderRadius: 40,
                  fontWeight: 500, fontSize: '0.95rem',
                  transition: 'filter 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                💬 Preguntar por financiamiento
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {[
                { num: '48', label: 'Cuotas máximas', sub: 'sin interés' },
                { num: '0%', label: 'Interés', sub: 'precio contado' },
                { num: '24/7', label: 'Atención', sub: 'todos los días' },
                { num: '5', label: 'Parques', sub: 'para comparar' },
              ].map(({ num, label, sub }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    color: 'var(--crema)',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>{num}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--verde-claro)', fontWeight: 500 }}>{label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.5)', marginTop: '2px' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .fin-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>
    </>
  )
}
