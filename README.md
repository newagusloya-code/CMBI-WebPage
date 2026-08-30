# CMBI Web

Landing corporativa para `CMBI Centro Medico de Bienestar Integral` construida con `Astro + Tailwind CSS`.

## Stack

- `Astro 7`
- `Tailwind CSS 4`
- Sitio estatico listo para desplegarse en `Vercel`

## Desarrollo local

```sh
npm install
npm run dev
```

Servidor local por defecto:

```text
http://localhost:4321
```

Build de produccion:

```sh
npm run build
```

Preview local del build:

```sh
npm run preview
```

## Donde editar contenido

La configuracion principal vive en:

- `src/data/site.ts`

Desde ese archivo se editan:

- nombre del sitio
- eslogan
- numero de WhatsApp
- enlaces de Instagram y Facebook
- mensajes prellenados por servicio
- direccion y referencia de ubicacion
- bloques de servicios
- FAQ

Datos confirmados en la version local:

- WhatsApp: `646 255 02 05`
- Direccion: `De Las Redes 96, Playa Ensenada, 22880 Ensenada, B.C.`
- Horario general: `7:00 am - 8:00 pm`

## Assets

Los assets publicos viven en:

- `public/cmbi-logo.jpg`
- `public/cmbi-hero.png`
- `public/cmbi-pool.png`
- `public/cmbi-fitness.png`
- `public/cmbi-wellness.png`
- `public/cmbi-map.png`
- `public/cmbi-nutrition-demo.jpg`
- `public/cmbi-cafeteria-demo.jpg`
- `public/cmbi-sauna-demo.jpg`
- `public/cmbi-supplements-demo.jpg`

Las imagenes actuales sirven como base visual premium. Conviene reemplazarlas por fotografias reales del centro cuando esten disponibles.

## Estructura principal

- `src/pages/index.astro`: home principal
- `src/pages/privacidad.astro`: aviso de privacidad
- `src/pages/aviso-legal.astro`: aviso legal
- `src/pages/cookies.astro`: politica de cookies
- `src/layouts/Layout.astro`: layout base y SEO
- `src/styles/global.css`: estilos globales

## Despliegue en Vercel

Este proyecto ya genera salida estatica en `dist/`, por lo que Vercel lo puede desplegar sin adaptador extra.

Configuracion recomendada en Vercel:

- Framework Preset: `Astro`
- Build Command: `npm run build`
- Output Directory: `dist`

## Checklist antes de publicar

- Sustituir placeholders visuales por fotos reales si ya existen
- Revisar enlaces a Instagram y Facebook
- Validar textos legales con el criterio final del negocio
