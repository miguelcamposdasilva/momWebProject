import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PoliticaPrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Política de Privacidad | Cotiza Sepulturas y Parques'
  }, [])

  return (
    <div style={{ background: 'var(--blanco)', minHeight: '100vh', paddingTop: '90px' }}>

      {/* Header de página */}
      <div style={{
        background: 'var(--crema)',
        borderBottom: '1px solid var(--borde)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
      }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '0.82rem', color: 'var(--texto-suave)',
          marginBottom: '1rem',
        }}>
          ← Volver al inicio
        </Link>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          color: 'var(--verde-oscuro)',
        }}>
          Política de Privacidad
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--texto-suave)', marginTop: '0.5rem' }}>
          Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Contenido */}
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
      }}>
        <div style={{ lineHeight: 1.8, color: 'var(--texto-suave)', fontSize: '0.95rem' }}>

          <Seccion titulo="1. Quiénes somos">
            <p>
              Este sitio web es operado por una ejecutiva de ventas independiente que comercializa
              sepulturas y servicios funerarios en Chile, en representación de parques cementerios
              autorizados. El sitio web es <strong style={{ color: 'var(--texto-principal)' }}>www.cotizasepulturasparques.cl</strong>.
            </p>
            <p>
              Para consultas relacionadas con esta política, puede contactarnos a través del número
              de WhatsApp <strong style={{ color: 'var(--texto-principal)' }}>+56 9 8436 4519</strong>,
              disponible las 24 horas.
            </p>
          </Seccion>

          <Seccion titulo="2. Qué información recopilamos">
            <p>
              Este sitio web <strong style={{ color: 'var(--texto-principal)' }}>no recopila
              datos personales de forma automática</strong> a través de formularios propios.
              La única vía de contacto es a través de WhatsApp, llamadas telefónicas o correo electrónico, servicios
              externos que cuentan con sus propias políticas de privacidad.
            </p>
            <p>Sin embargo, podemos recibir de forma voluntaria:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {[
                'Nombre y apellidos',
                'Número de teléfono o WhatsApp',
                'Correo electrónico (si lo facilita)',
                'Información sobre la sepultura o servicio de interés',
                'Ciudad o comuna de residencia',
              ].map(item => <li key={item} style={{ padding: '3px 0' }}>{item}</li>)}
            </ul>
          </Seccion>

          <Seccion titulo="3. Para qué usamos su información">
            <p>La información que nos proporciona voluntariamente es utilizada exclusivamente para:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {[
                'Responder a su consulta o solicitud de cotización',
                'Brindar asesoría personalizada sobre sepulturas y parques cementerios',
                'Informar sobre opciones de financiamiento disponibles',
                'Hacer seguimiento de su proceso de compra si así lo desea',
              ].map(item => <li key={item} style={{ padding: '3px 0' }}>{item}</li>)}
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              <strong style={{ color: 'var(--texto-principal)' }}>No vendemos, cedemos ni
              compartimos</strong> sus datos personales con terceros sin su consentimiento expreso,
              salvo obligación legal.
            </p>
          </Seccion>

          <Seccion titulo="4. Cookies y herramientas de análisis">
            <p>
              Este sitio puede utilizar servicios de análisis web (como Google Analytics o
              Cloudflare Analytics) para conocer el volumen de visitas y comportamiento general
              de navegación. Estos servicios pueden instalar cookies en su dispositivo.
            </p>
            <p>
              Ninguna cookie almacena información personal identificable. Puede desactivar las
              cookies desde la configuración de su navegador sin que afecte la funcionalidad
              del sitio.
            </p>
          </Seccion>

          <Seccion titulo="5. Servicios de terceros">
            <p>Este sitio web contiene enlaces y botones hacia servicios de terceros:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li style={{ padding: '3px 0' }}>
                <strong style={{ color: 'var(--texto-principal)' }}>WhatsApp</strong> — Al
                hacer clic en nuestros botones de contacto, será redirigido a la aplicación
                WhatsApp. La información compartida en esa plataforma se rige por la
                {' '}<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank"
                rel="noopener noreferrer" style={{ color: 'var(--verde-medio)' }}>
                Política de Privacidad de WhatsApp</a>.
              </li>
              <li style={{ padding: '3px 0', marginTop: '4px' }}>
                <strong style={{ color: 'var(--texto-principal)' }}>Google Fonts</strong> — Este
                sitio carga fuentes tipográficas desde los servidores de Google, lo que puede
                implicar la transmisión de su dirección IP a Google Inc.
              </li>
            </ul>
          </Seccion>

          <Seccion titulo="6. Seguridad de la información">
            <p>
              Adoptamos medidas razonables para proteger la información que nos comparte.
              El sitio opera bajo protocolo <strong style={{ color: 'var(--texto-principal)' }}>HTTPS</strong>{' '}
              con certificado SSL, lo que cifra la comunicación entre su dispositivo y nuestros servidores.
            </p>
          </Seccion>

          <Seccion titulo="7. Sus derechos (Ley 19.628 — Chile)">
            <p>
              De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile,
              usted tiene derecho a:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {[
                'Acceder a sus datos personales que poseamos',
                'Solicitar la rectificación de datos inexactos',
                'Solicitar la eliminación de sus datos personales',
                'Oponerse al tratamiento de sus datos',
              ].map(item => <li key={item} style={{ padding: '3px 0' }}>{item}</li>)}
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Para ejercer cualquiera de estos derechos, contáctenos por WhatsApp al{' '}
              <strong style={{ color: 'var(--texto-principal)' }}>+56 9 8436 4519</strong>.
            </p>
          </Seccion>

          <Seccion titulo="8. Modificaciones a esta política">
            <p>
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier
              momento. Cualquier cambio será publicado en esta misma página con la fecha de
              actualización correspondiente. Le recomendamos revisarla periódicamente.
            </p>
          </Seccion>

          {/* CTA final */}
          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'var(--crema)',
            borderRadius: 16,
            border: '1px solid var(--borde)',
            textAlign: 'center',
          }}>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
              ¿Tiene preguntas sobre el manejo de sus datos?
            </p>
            <a
              href="https://wa.me/56984364519?text=Hola%2C%20tengo%20una%20consulta%20sobre%20la%20pol%C3%ADtica%20de%20privacidad%20del%20sitio."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#25D366', color: '#fff',
                padding: '11px 22px', borderRadius: 40,
                fontWeight: 500, fontSize: '0.875rem',
              }}>
              💬 Consultar por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

function Seccion({ titulo, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.15rem',
        color: 'var(--verde-oscuro)',
        marginBottom: '0.75rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid var(--borde)',
      }}>
        {titulo}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {children}
      </div>
    </div>
  )
}