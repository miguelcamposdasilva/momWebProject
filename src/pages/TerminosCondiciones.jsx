import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TerminosCondiciones() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Términos y Condiciones | Cotiza Sepulturas y Parques'
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
          Términos y Condiciones
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

          <div style={{
            background: 'rgba(45,90,64,0.06)',
            border: '1px solid rgba(45,90,64,0.15)',
            borderRadius: 12,
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            color: 'var(--verde-oscuro)',
          }}>
            Al acceder y utilizar este sitio web, usted acepta los presentes Términos y Condiciones
            en su totalidad. Si no está de acuerdo con alguno de ellos, le pedimos que no utilice
            este sitio.
          </div>

          <Seccion titulo="1. Identificación del titular">
            <p>
              Este sitio web es administrado por una ejecutiva de ventas independiente que
              comercializa sepulturas y servicios funerarios en Chile, actuando como intermediaria
              entre los interesados y los parques cementerios correspondientes.
            </p>
            <p>
              Contacto: <strong style={{ color: 'var(--texto-principal)' }}>+56 9 8436 4519</strong>{' '}
              (WhatsApp y llamadas, disponible 24/7)
            </p>
          </Seccion>

          <Seccion titulo="2. Objeto del sitio">
            <p>
              Este sitio web tiene como único propósito entregar información orientativa sobre
              sepulturas, servicios funerarios y parques cementerios disponibles en Chile, y
              facilitar el contacto entre personas interesadas y la ejecutiva de ventas para
              recibir asesoría personalizada y gratuita.
            </p>
            <p>
              <strong style={{ color: 'var(--texto-principal)' }}>Este sitio no realiza
              ventas directas en línea</strong>. Todas las transacciones se formalizan a través
              de los canales oficiales de cada parque cementerio correspondiente.
            </p>
          </Seccion>

          <Seccion titulo="3. Carácter de la asesoría">
            <p>
              La asesoría prestada a través de este sitio y sus canales de contacto (WhatsApp,
              teléfono) es de carácter <strong style={{ color: 'var(--texto-principal)' }}>
              informativo y orientativo</strong>. La información sobre precios, disponibilidad
              y condiciones de financiamiento es referencial y puede variar sin previo aviso
              según las políticas de cada parque cementerio.
            </p>
            <p>
              Los precios definitivos, contratos y condiciones de compra son establecidos
              directamente por cada parque cementerio y deben constar en documentos oficiales
              firmados por ambas partes.
            </p>
          </Seccion>

          <Seccion titulo="4. Uso aceptable del sitio">
            <p>Al utilizar este sitio, usted se compromete a:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {[
                'Utilizar el sitio únicamente con fines lícitos y legítimos',
                'No reproducir, distribuir o modificar el contenido sin autorización',
                'No utilizar el sitio para actividades fraudulentas o que perjudiquen a terceros',
                'Proporcionar información veraz al momento de contactarnos',
                'No intentar vulnerar la seguridad o funcionamiento del sitio',
              ].map(item => <li key={item} style={{ padding: '3px 0' }}>{item}</li>)}
            </ul>
          </Seccion>

          <Seccion titulo="5. Propiedad intelectual">
            <p>
              El contenido de este sitio web —incluyendo textos, diseño, logotipos y estructura—
              es propiedad de su titular o ha sido licenciado para su uso. Queda prohibida su
              reproducción total o parcial sin autorización escrita previa.
            </p>
            <p>
              Los nombres y marcas de los parques cementerios mencionados (Parque Manantial,
              Parque El Prado, Parque Santiago, Parque Cannán, Parques La Foresta) son marcas
              registradas de sus respectivos propietarios.
            </p>
          </Seccion>

          <Seccion titulo="6. Limitación de responsabilidad">
            <p>
              El titular de este sitio no se responsabiliza por:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {[
                'Cambios en precios, disponibilidad o condiciones de los parques cementerios',
                'Interrupciones temporales del servicio por causas técnicas ajenas a su control',
                'Daños derivados del uso inadecuado de la información contenida en el sitio',
                'El contenido de sitios web de terceros enlazados desde este sitio',
                'Demoras en la respuesta a través de WhatsApp por circunstancias de fuerza mayor',
              ].map(item => <li key={item} style={{ padding: '3px 0' }}>{item}</li>)}
            </ul>
          </Seccion>

          <Seccion titulo="7. Disponibilidad del servicio">
            <p>
              Si bien este sitio procura estar disponible las 24 horas del día, no garantizamos
              la disponibilidad ininterrumpida del mismo. Podemos realizar mantenciones o
              actualizaciones que impliquen interrupciones temporales, intentando minimizar
              su impacto.
            </p>
            <p>
              La atención por WhatsApp y teléfono es 24/7, pero los tiempos de respuesta pueden
              variar según la carga de consultas.
            </p>
          </Seccion>

          <Seccion titulo="8. Legislación aplicable y jurisdicción">
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Chile.
              Cualquier controversia derivada del uso de este sitio o de los servicios prestados
              se someterá a la jurisdicción de los tribunales ordinarios de justicia de Chile.
            </p>
            <p>
              En particular, son aplicables la{' '}
              <strong style={{ color: 'var(--texto-principal)' }}>Ley N° 19.496</strong> sobre
              Protección de los Derechos de los Consumidores y la{' '}
              <strong style={{ color: 'var(--texto-principal)' }}>Ley N° 19.628</strong> sobre
              Protección de la Vida Privada.
            </p>
          </Seccion>

          <Seccion titulo="9. Modificaciones">
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier
              momento. Los cambios entrarán en vigor desde su publicación en esta página.
              El uso continuado del sitio después de cualquier modificación implica la aceptación
              de los nuevos términos.
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
              ¿Tiene dudas sobre estos términos?
            </p>
            <a
              href="https://wa.me/56984364519?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20t%C3%A9rminos%20y%20condiciones%20del%20sitio."
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