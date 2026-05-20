import React from 'react'

const WA_BASE = 'https://wa.me/56984364519?text='

const parques = [
  {
    nombre: 'Parque Manantial',
    emoji: '🌊',
    descripcion: 'Ubicado en un entorno natural de gran belleza, Parque Manantial combina paisajes verdes con infraestructura moderna. Una de las opciones más completas de la región.',
    destacados: ['Amplias áreas verdes', 'Acceso directo pavimentado', 'Capilla y sala de velatorio', 'Mausoleos y jardines'],
    color: '#2d5a40',
    msg: 'Hola, me interesa información y precios de sepulturas en Parque Manantial. ¿Pueden asesorarme?',
  },
  {
    nombre: 'Parque El Prado',
    emoji: '🌾',
    descripcion: 'Un parque cementerio con décadas de historia, reconocido por su tranquilidad y ubicación conveniente. Ideal para familias que buscan un lugar de descanso tradicional.',
    destacados: ['Ubicación accesible', 'Sectores tradicionales y modernos', 'Servicio de mantención incluido', 'Múltiples capacidades'],
    color: '#4a7c5f',
    msg: 'Hola, me interesa información y precios de sepulturas en Parque El Prado. ¿Pueden asesorarme?',
  },
  {
    nombre: 'Parque Santiago',
    emoji: '🏙️',
    descripcion: 'Estratégicamente ubicado en la Región Metropolitana, Parque Santiago es una de las opciones más solicitadas por familias de Santiago por su accesibilidad y servicios.',
    destacados: ['Acceso desde múltiples comunas', 'Variedad de precios', 'Financiamiento disponible', 'Atención personalizada'],
    color: '#1a3a2a',
    msg: 'Hola, me interesa información y precios de sepulturas en Parque Santiago. ¿Pueden asesorarme?',
  },
  {
    nombre: 'Parque Cannán',
    emoji: '✨',
    descripcion: 'Parque cementerio de diseño contemporáneo que integra naturaleza y arquitectura. Ofrece una experiencia de visita diferente, con jardines cuidados y espacios de reflexión.',
    destacados: ['Diseño moderno y jardines', 'Sectores premium disponibles', 'Zona de columbarios', 'Alta mantención'],
    color: '#6b9e7a',
    msg: 'Hola, me interesa información y precios de sepulturas en Parque Cannán. ¿Pueden asesorarme?',
  },
  {
    nombre: 'Parques La Foresta',
    emoji: '🌲',
    descripcion: 'Rodeado de bosques nativos y naturaleza preservada, La Foresta ofrece un ambiente de paz y serenidad. Perfecto para familias que valoran el entorno natural.',
    destacados: ['Entorno boscoso natural', 'Aire puro y tranquilidad', 'Sepulturas en jardín', 'Espacios amplios'],
    color: '#3d6b50',
    msg: 'Hola, me interesa información y precios de sepulturas en Parques La Foresta. ¿Pueden asesorarme?',
  },
]

export default function Parques() {
  return (
    <section
      id="parques"
      aria-label="Parques cementerios disponibles en Chile"
      style={{
        padding: 'var(--section-py) 0',
        background: 'var(--blanco)',
      }}>
      <div className="container">

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(45,90,64,0.08)',
            border: '1px solid rgba(45,90,64,0.2)',
            color: 'var(--verde-medio)',
            padding: '5px 14px',
            borderRadius: 40,
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            5 parques disponibles
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: 'var(--verde-oscuro)',
            marginBottom: '1rem',
          }}>
            Encuentra el parque ideal
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--verde-suave)' }}>para tu familia</em>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--texto-suave)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Te asesoramos para que compares opciones, precios y financiamiento en cada uno de los parques,
            sin presión y a tu ritmo.
          </p>
        </div>

        {/* Cards de parques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {parques.map((parque) => (
            <article
              key={parque.nombre}
              aria-label={`Información sobre ${parque.nombre}`}
              style={{
                background: 'var(--crema)',
                border: '1px solid var(--borde)',
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,58,42,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>

              {/* Header de la card */}
              <div style={{
                background: parque.color,
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {parque.emoji}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: '#fff',
                  fontWeight: 600,
                }}>
                  {parque.nombre}
                </h3>
              </div>

              {/* Cuerpo */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--texto-suave)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}>
                  {parque.descripcion}
                </p>

                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                  {parque.destacados.map(d => (
                    <li key={d} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.82rem',
                      color: 'var(--texto-principal)',
                      padding: '4px 0',
                    }}>
                      <span style={{ color: parque.color, fontWeight: 'bold' }}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WA_BASE}${encodeURIComponent(parque.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar sepultura en ${parque.nombre} por WhatsApp`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '12px',
                    background: '#25D366',
                    color: '#fff',
                    borderRadius: 12,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    transition: 'filter 0.2s',
                    border: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Cotizar {parque.nombre}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
