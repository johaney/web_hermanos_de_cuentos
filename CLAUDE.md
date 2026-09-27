# Hermanos de cuento

Web de cuentos infantiles bilingüe (español / inglés) pensada para que **madres, padres y adultos lean con los niños**. Cada cuento puede ofrecerse en varios formatos (texto, vídeo de YouTube y audio) y la web se monetizará con anuncios (Google AdSense).

> Este archivo es el documento de contexto principal. Cuando una área crezca, se documenta en `docs/` y se enlaza aquí.

## Reglas de trabajo

- **Un push a `main` despliega a producción** (GitHub Actions → IONOS). Trabajar siempre en ramas y fusionar a `main` solo cuando el cambio esté revisado.
- Consultar con el propietario antes de cambios grandes de arquitectura, diseño o contenido.
- Idioma: la documentación, los commits y el contenido van en español. El código (variables, funciones, componentes) en inglés. Los campos del contenido (frontmatter) en español, porque los edita el propietario.
- Los cuentos bíblicos se presentan como relatos de tradición cristiana, con lenguaje respetuoso y adaptado a niños. Los cuentos tradicionales se adaptan evitando violencia explícita (p. ej. en Caperucita nadie es devorado; una guardabosques ahuyenta al lobo).

## Especificaciones funcionales

### Catálogo (portada)
- Cabecera con marca "✦ Hermanos de cuento", navegación (Cuentos, Bíblicos, Valores) y selector de idioma ES/EN.
- Hero con título, texto, botón "Explorar cuentos ↓" e ilustración principal (dos niños leyendo bajo un árbol).
- Rejilla de tarjetas: portada de color con emoji, meta (categoría · minutos · edad), título, descripción y enlace "Leer cuento →".
- Filtros por categoría: Todos, Bíblicos, Valores, Tradicionales.
- Buscador que filtra por título, etiqueta y descripción (en ambos idiomas).
- Nota final: "Un rincón para leer con calma".

### Página de cuento
- Meta (categoría · minutos de lectura · edad), título, entradilla, ilustración (emoji sobre color), texto por párrafos.
- Recuadro "Para conversar después del cuento" con una pregunta de reflexión.
- Enlaces para volver al catálogo.
- **Formatos**: pestañas 📖 Leer · ▶️ Ver · 🎧 Escuchar. Solo aparecen los formatos disponibles para ese cuento (el texto siempre existe; vídeo y audio son opcionales y por idioma).

### Idiomas
- Español (por defecto) e inglés, cada uno con sus propias URL indexables.
- El selector de idioma lleva a la misma página en el otro idioma.
- La preferencia se guarda en `localStorage` (`storyLanguage`) y la raíz `/` redirige al idioma guardado o al del navegador.

### Categorías
| Clave | ES | EN |
|---|---|---|
| `biblicos` | Bíblicos | Bible |
| `valores` | Valores | Values |
| `tradicionales` | Tradicionales | Classics |

### Cuentos actuales (11)
estrella, samaritano, semilla, leon, noe, liebre, caperucita, cerditos, blancanieves, patito, ricitos.

## Estado anterior (antes de la migración)

Hasta la rama `migracion-astro` la web era un único `index.html` (~47 KB) con CSS, JS y los 11 cuentos embebidos como datos JavaScript, más `hermanos-leyendo.png` (3 MB). Los cuentos se abrían con JavaScript en la misma página mediante `#id` (`/#estrella`), por lo que para Google todo el sitio era una sola página. Motivos de la migración:

1. AdSense y el SEO necesitan una URL por cuento con el texto en el HTML.
2. Añadir vídeo y audio al archivo único lo hacía inmantenible.
3. Añadir un cuento obligaba a editar un bloque de código enorme.

Los enlaces antiguos `/#estrella` deben seguir funcionando: la raíz redirige al cuento nuevo.

## Arquitectura (Astro)

- **Astro 7**, salida **estática** (`output: 'static'`), sin servidor Node en producción. Requiere **Node ≥ 22.12** (ver `.nvmrc`).
- Sin frameworks de UI: componentes `.astro` y scripts pequeños solo donde hay interactividad (filtros/búsqueda, pestañas de formato, redirección de idioma).
- Imágenes optimizadas con `astro:assets` (AVIF/WebP).
- Fuentes autoalojadas con Fontsource (Literata y Source Sans 3), sin peticiones a Google Fonts (mejor privacidad/RGPD).

### Estructura

```
src/
  content.config.ts          # esquema de la colección de cuentos
  content/cuentos/<clave>/
    es.md                    # versión en español (frontmatter + texto)
    en.md                    # versión en inglés
  assets/                    # imágenes procesadas por Astro
  components/                # Header, Footer, StoryCard, StoryFormats, …
  layouts/BaseLayout.astro
  i18n/ui.ts                 # textos de interfaz y utilidades de idioma
  lib/stories.ts             # consultas a la colección
  pages/
    index.astro              # redirección de idioma + enlaces antiguos #id
    es/index.astro           # catálogo ES
    es/cuentos/[slug].astro  # cuento ES
    en/index.astro           # catálogo EN
    en/stories/[slug].astro  # cuento EN
    404.astro
  styles/global.css
public/                      # archivos copiados tal cual (favicon, audio/)
```

### Modelo de contenido

Un cuento = una carpeta `src/content/cuentos/<clave>/` con un `.md` por idioma. La `<clave>` enlaza las traducciones y es la usada en los enlaces antiguos (`#estrella`).

```yaml
---
titulo: La estrella que compartía su luz
slug: la-estrella-que-compartia-su-luz   # URL de este idioma
categoria: valores                      # biblicos | valores | tradicionales
etiqueta: Generosidad
edad: [4, 8]                            # rango de edad
minutos: 6                              # minutos de lectura
emoji: 🌟
color: "#f9d68d"                        # fondo de portada
orden: 1                                # posición en el catálogo
descripcion: Una estrella descubre que al ayudar a otras, su brillo no se apaga.
pregunta: ¿Qué cosa pequeña podrías compartir hoy con alguien?
youtube: dQw4w9WgXcQ                    # opcional: ID del vídeo de YouTube
audio: /audio/estrella-es.mp3           # opcional: archivo en public/audio/
---
Párrafos del cuento en Markdown…
```

Los campos comunes (categoría, edad, minutos, emoji, color, orden) se repiten en ambos idiomas; si no coinciden, el build falla para evitar incoherencias.

### Rutas

| Página | ES | EN |
|---|---|---|
| Catálogo | `/es/` | `/en/` |
| Cuento | `/es/cuentos/<slug>/` | `/en/stories/<slug>/` |
| Filtro | `/es/?categoria=biblicos` | `/en/?categoria=biblicos` |
| Raíz | `/` → redirige a `/es/` o `/en/` (y `/#clave` al cuento) | |

La URL pública (`site`, necesaria para sitemap, canónicas y hreflang) es `https://cuentos.adeviosystem.com`, en la raíz del subdominio. Si algún día se sirve en una subcarpeta, se configura `base` con la variable `BASE_PATH`.

### Formatos multimedia
- **Vídeo**: fachada con miniatura; el `iframe` de `youtube-nocookie.com` solo se carga al pulsar. Los vídeos deberán marcarse en YouTube como "contenido para niños".
- **Audio**: MP3 por idioma en `public/audio/`, reproductor nativo `<audio>`.

## Monetización (fase 3, pendiente)

- Google AdSense con espacios fijos (`AdSlot`): tras unos párrafos del cuento y al final, nunca junto a botones o enlaces que usan los niños.
- Público declarado: **familias (adultos que leen con niños)**. Aun así el contenido es infantil: revisar la política de Google sobre contenido dirigido a menores (COPPA) y, si aplica, servir solo anuncios no personalizados.
- Banner de consentimiento con una CMP certificada por Google (obligatorio para visitantes del EEE/Reino Unido).
- Páginas requeridas: política de privacidad, sobre nosotros, contacto, `ads.txt`, `sitemap.xml`.
- Cambiar el texto "Lectura sin interrupciones ✨", que deja de ser cierto con anuncios.

## Despliegue

- `.github/workflows/deploy.yml`:
  - **verificar** (PR y push): `npm ci` + `npm run build` (incluye `astro check` y la validación del contenido) y comprueba que existen todas las páginas. Guarda `dist/` como artefacto.
  - **publicar** (solo push a `main` con la variable `DEPLOY_ENABLED=true`): sube el **contenido** de `dist/` por SSH/rsync a IONOS en `/home/www/public/cuentos/`.
- URL pública: **https://cuentos.adeviosystem.com** (subdominio cuyo document root es `/home/www/public/cuentos/`). Está fijada en `astro.config.mjs`; `SITE_URL` y `BASE_PATH` solo sirven para sobrescribirla en local.
- GitHub → Settings: variable `DEPLOY_ENABLED=true`, secretos `DEPLOY_SSH_KEY` y `DEPLOY_KNOWN_HOSTS`, y entorno `production`.
- Servidor Apache (IONOS): el build genera `dist/.htaccess` (integración en `astro.config.mjs`) con la página 404 y la caché de `_astro/`. No editarlo en el servidor.
- rsync no usa `--delete`: los archivos antiguos del servidor (p. ej. `hermanos-leyendo.png`) no se borran solos.

## Comandos

Node 24 LTS está instalado en `~/.local/node` (el Node del sistema es 20 y no sirve para Astro 7). En cada terminal: `export PATH=~/.local/node/bin:$PATH`.

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:4321)
npm run build      # generar el sitio estático en dist/
npm run preview    # servir dist/ en local
```

## Hoja de ruta

- [x] Fase 0 — Análisis y este documento.
- [x] Fase 1 — Migración a Astro con el mismo diseño, una página por cuento, ES/EN, imagen optimizada y redirección de enlaces antiguos.
- [ ] Fase 2 — Formatos: pestañas Leer/Ver/Escuchar con vídeo y audio opcionales. *Componente listo (`StoryFormats`); falta añadir vídeos y audios reales.*
- [ ] Fase 3 — Monetización: AdSense, consentimiento, páginas legales, `ads.txt`, sitemap.
- [ ] Fase 4 — Actualizar el workflow de GitHub Actions y la configuración de IONOS. *Workflow listo; pendiente la primera publicación.*

## Decisiones pendientes

- Activar `rsync --delete` en el despliegue para limpiar archivos antiguos del servidor (revisar antes qué hay en `/home/www/public/cuentos/`).
