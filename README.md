# Cotiza Sepulturas y Parques — Sitio Web

Sitio web profesional para cotización de sepulturas y parques cementerios en Chile.
Construido con **React + Vite**, desplegado en **Cloudflare Pages**.

---

## 🚀 Cómo correr el proyecto localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# → http://localhost:5173
```

---

## 📦 Estructura del proyecto

```
cotizasepulturas/
├── index.html              ← HTML base con todos los meta tags SEO
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── robots.txt          ← Permite indexación a Google
│   ├── sitemap.xml         ← Mapa del sitio para SEO
│   ├── _headers            ← Headers de seguridad (Cloudflare)
│   └── _redirects          ← Rutas SPA (Cloudflare)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx       ← Navegación fija con menú móvil
        ├── Hero.jsx         ← Sección principal con CTAs WhatsApp
        ├── Parques.jsx      ← Cards de los 5 parques cementerios
        ├── Servicios.jsx    ← Tipos de sepulturas + sección financiamiento
        ├── WhatsAppFloat.jsx ← Botón flotante WhatsApp con animación
        └── Footer.jsx       ← Pie de página con contacto
```

---

## ☁️ Cómo desplegar en Cloudflare Pages

### Paso 1 — Subir el código a GitHub
```bash
git init
git add .
git commit -m "primer commit: sitio cotizasepulturas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/cotizasepulturas.git
git push -u origin main
```

### Paso 2 — Conectar con Cloudflare Pages
1. Ir a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Crear cuenta (gratis)
3. Click en "Create a project" → "Connect to Git"
4. Seleccionar el repositorio `cotizasepulturas`
5. Configurar el build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click en "Save and Deploy"

### Paso 3 — Agregar el dominio personalizado
1. En Cloudflare Pages → tu proyecto → "Custom domains"
2. Click en "Set up a custom domain"
3. Ingresar: `cotizasepulturasparques.cl`
4. Cloudflare te dará los **nameservers** a configurar en NIC.cl

### Paso 4 — Apuntar el dominio en NIC.cl
1. Ir a [nic.cl](https://www.nic.cl) → iniciar sesión
2. Buscar el dominio `cotizasepulturasparques.cl`
3. Ir a "Servidores de nombres"
4. Reemplazar los nameservers actuales por los de Cloudflare
5. Esperar entre 30 minutos y 48 horas para que propague

---

## 🔧 Personalizaciones pendientes

- [ ] Agregar fotos reales de cada parque (reemplazar con imágenes en `/public/`)
- [ ] Actualizar las URLs de og:image con imagen real
- [ ] Agregar Google Analytics o Cloudflare Analytics
- [ ] Crear página `/politica-de-privacidad`
- [ ] Registrar en Google Search Console una vez el dominio esté apuntado

---

## 📊 SEO incluido

- ✅ Meta title y description optimizados
- ✅ Open Graph para Facebook/WhatsApp/LinkedIn
- ✅ Twitter Card
- ✅ Schema markup (LocalBusiness) en JSON-LD
- ✅ Viewport sin user-scalable=0
- ✅ Alt text en imágenes
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Headers de seguridad (Cloudflare _headers)
- ✅ Canonical URL
- ✅ HTML semántico (section, article, aria-label)

---

## 💬 Número de WhatsApp

El número configurado es: **+56 9 8436 4519**

Para cambiarlo, busca `56984364519` en los archivos y reemplaza por el nuevo número.
