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
- Portada: frase manuscrita, título, texto, botón "Explorar cuentos" e ilustración principal (dos niños leyendo bajo un árbol).
- Rejilla de tarjetas con forma de libro: portada (ilustración del cuento o dibujo provisional por categoría), meta (categoría · minutos · edad), título, descripción y "Leer cuento →". Toda la tarjeta es clicable.
- Filtros por categoría: Todos, Bíblicos, Valores, Tradicionales.
- Buscador que filtra por título, etiqueta y descripción (en ambos idiomas).
- Nota final: "Un rincón para leer con calma".

### Página de cuento
Estructura completa y cómo añadir contenido: **[docs/plantilla-cuento.md](docs/plantilla-cuento.md)**.
- Meta (categoría · minutos de lectura · edad), título, entradilla, portada (ilustración o dibujo provisional), texto por párrafos con capitular y "Fin".
- **Narración** (opcional, por idioma): reproductor propio encima del texto (play/pausa, progreso, velocidad 1×/0,75×/1,25×) para leer mientras se escucha.
- **Vídeo** (opcional, por idioma): si existe, aparecen las pestañas Leer / Ver el vídeo.
- **Para conversar después del cuento**: hasta 3 preguntas de comprensión lectora (recordar, pensar, conectar).
- **Libro recomendado** (opcional, por idioma): enlace de afiliado de Amazon con aviso legal (`RecommendedBook.astro`, ID de afiliado en `src/config.ts`).
- Enlaces para volver al catálogo.

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

### Cuentos actuales (30)
- **Bíblicos (11)**: samaritano, noe, david, jonas, jose, moises, daniel, panes, zaqueo, prodigo, belen.
- **Valores (2)**: estrella, semilla.
- **Tradicionales (17)**: leon, liebre, caperucita, cerditos, blancanieves, patito, ricitos, hansel, sopa, bremen, cenicienta, emperador, nabo, zapatero, habichuelas, cigarra, raton.

Los cuentos 1–11 tienen unas 250 palabras; los 12–30, entre 800 y 1000 (8–10 minutos de lectura). Todos son versiones propias: tramas de dominio público o relatos bíblicos contados con nuestras palabras, sin copiar libros, traducciones concretas de la Biblia ni películas.

## Estado anterior (antes de la migración)

Hasta la rama `migracion-astro` la web era un único `index.html` (~47 KB) con CSS, JS y los 11 cuentos embebidos como datos JavaScript, más `hermanos-leyendo.png` (3 MB). Los cuentos se abrían con JavaScript en la misma página mediante `#id` (`/#estrella`), por lo que para Google todo el sitio era una sola página. Motivos de la migración:

1. AdSense y el SEO necesitan una URL por cuento con el texto en el HTML.
2. Añadir vídeo y audio al archivo único lo hacía inmantenible.
3. Añadir un cuento obligaba a editar un bloque de código enorme.

Los enlaces antiguos `/#estrella` deben seguir funcionando: la raíz redirige al cuento nuevo.

## Arquitectura (Astro)

- **Astro 7**, salida **estática** (`output: 'static'`), sin servidor Node en producción. Requiere **Node ≥ 22.12** (ver `.nvmrc`).
- Sin frameworks de UI: componentes `.astro` y scripts pequeños solo donde hay interactividad (filtros/búsqueda, pestañas de formato, redirección de idioma).
- Imágenes optimizadas con `astro:assets` (WebP responsive).
- Fuentes autoalojadas con Fontsource (Alegreya, Alegreya Sans y Caveat), sin peticiones a Google Fonts (mejor privacidad/RGPD).
- **Diseño "libro ilustrado"**: paleta, tipografía y componentes documentados en [docs/diseno.md](docs/diseno.md). Leerlo antes de tocar estilos.

### Estructura

```
src/
  content.config.ts          # esquema de la colección de cuentos
  content/cuentos/<clave>/
    es.md                    # versión en español (frontmatter + texto)
    en.md                    # versión en inglés
    portada.png              # opcional: ilustración del cuento (png/jpg/webp)
    narracion-es.mp3         # opcional: narración por idioma (mp3/m4a)
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
color: "#f9d68d"                        # fondo de portada
orden: 1                                # posición en el catálogo
descripcion: Una estrella descubre que al ayudar a otras, su brillo no se apaga.
preguntas:                              # 1 a 3: recordar, pensar, conectar
  - ¿Qué le pidió el pajarito a Lía?
  - ¿Por qué crees que la luz de Lía no se apagó al compartirla?
  - ¿Qué cosa pequeña podrías compartir hoy con alguien?
youtube: dQw4w9WgXcQ                    # opcional: ID del vídeo de YouTube
---
Párrafos del cuento en Markdown…
```

Los campos comunes (categoría, edad, minutos, color, orden) se repiten en ambos idiomas; si no coinciden, el build falla para evitar incoherencias.

**Portada ilustrada**: basta con dejar `portada.png` (o `.jpg`/`.webp`) en la carpeta del cuento; se detecta sola, se optimiza y sustituye al dibujo provisional de la categoría. Formato recomendado: horizontal 16:10 o más ancho, mínimo 1424 px de ancho, mismo estilo que `src/assets/hermanos-leyendo.png`. `color` se usa como fondo del dibujo provisional.

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
- **Narración**: `narracion-<idioma>.mp3` en la carpeta del cuento, detectada con `import.meta.glob` en `src/lib/stories.ts` y servida con hash desde `_astro/`. `NarrationPlayer.astro` mejora un `<audio controls>` nativo (funciona sin JavaScript).

## Monetización (fase 3, pendiente)

Estrategia acordada: primero contenido y SEO (objetivo 30–50 cuentos), luego afiliados, YouTube/pódcast con las narraciones e imprimibles; AdSense al final, cuando haya contenido y tráfico. Expectativa realista: ingresos casi nulos los primeros 6–12 meses.

- **Afiliados de Amazon** (listo): bloque "libro recomendado" por cuento, enlaces `rel="sponsored nofollow"`, aviso obligatorio junto al enlace. Falta darse de alta y rellenar `tag` en `src/config.ts`.
- **Ilustraciones**: prompts por cuento en [docs/ilustraciones.md](docs/ilustraciones.md).

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
- [x] Rediseño "libro ilustrado" ([docs/diseno.md](docs/diseno.md)).
- [ ] Fase 2 — Formatos: narración, vídeo y 3 preguntas de comprensión. *Plantilla lista ([docs/plantilla-cuento.md](docs/plantilla-cuento.md)); los 30 cuentos tienen portada; faltan narraciones y vídeos reales.*
- [ ] Fase 3 — Monetización: AdSense, consentimiento, páginas legales, `ads.txt`, sitemap.
- [ ] Fase 4 — Actualizar el workflow de GitHub Actions y la configuración de IONOS. *Workflow listo; pendiente la primera publicación.*

## Decisiones pendientes

- Activar `rsync --delete` en el despliegue para limpiar archivos antiguos del servidor (revisar antes qué hay en `/home/www/public/cuentos/`).
