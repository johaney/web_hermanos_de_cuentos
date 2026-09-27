# Plantilla de página de cuento

Cada cuento vive en `src/content/cuentos/<clave>/`. La `<clave>` es corta, en minúsculas y sin tildes (`leon`, `caperucita`).

```
src/content/cuentos/<clave>/
  es.md              # obligatorio: texto en español
  en.md              # obligatorio: texto en inglés
  portada.png        # opcional: ilustración (png, jpg o webp)
  narracion-es.mp3   # opcional: narración en español (mp3 o m4a)
  narracion-en.mp3   # opcional: narración en inglés
```

Los archivos opcionales se detectan solos: no hay que declararlos en ningún sitio.

## Cómo queda la página (de arriba abajo)

1. **← Volver a los cuentos**
2. **Cabecera**: categoría · minutos · edad, título, entradilla (`descripcion`) y adorno.
3. **Portada**: `portada.png` si existe; si no, el dibujo de la categoría sobre `color`.
4. **Pestañas Leer / Ver el vídeo**: solo aparecen si el cuento tiene `youtube`.
5. **Pestaña Leer**:
   - **Reproductor "Escucha el cuento"**, si existe `narracion-<idioma>`: reproducir/pausa, barra de progreso, tiempo y velocidad (1×, 0,75×, 1,25×). Está encima del texto para poder seguir la lectura mientras se escucha.
   - **Texto** con capitular en el primer párrafo.
   - **Fin**.
6. **Pestaña Ver el vídeo**: vídeo de YouTube (se carga al pulsar). Al cambiar de pestaña se pausa la narración.
7. **Para conversar después del cuento**: las preguntas numeradas.
8. **← Elegir otro cuento**

## Archivo de texto (`es.md`)

```markdown
---
titulo: "El título del cuento"
slug: el-titulo-del-cuento          # URL: /es/cuentos/el-titulo-del-cuento/
categoria: valores                  # biblicos | valores | tradicionales
etiqueta: "Amistad"                 # valor o tema principal
edad: [4, 8]
minutos: 5                          # minutos aproximados de lectura
color: "#b7dce6"                    # fondo del dibujo provisional
orden: 12                           # posición en el catálogo
descripcion: "Una frase que resume el cuento."
preguntas:
  - "Pregunta para recordar: ¿qué pasó…?"
  - "Pregunta para pensar: ¿por qué crees que…?"
  - "Pregunta para ti: ¿alguna vez…?"
youtube: aqz-KE-bpKQ                # opcional: ID del vídeo (lo que va tras v= en la URL)
---
Primer párrafo del cuento.

Segundo párrafo, separado por una línea en blanco.
```

`en.md` es igual, pero con el texto traducido y su propio `slug` (URL: `/en/stories/<slug>/`). `categoria`, `edad`, `minutos`, `color` y `orden` deben coincidir en los dos idiomas.

## Preguntas de comprensión lectora

Hasta 3 por cuento, en este orden:

1. **Recordar** (literal): algo que se dice en el texto. *¿Cómo liberó el ratón al león?*
2. **Pensar** (inferencial): el porqué, lo que sienten los personajes. *¿Por qué se rio el león?*
3. **Conectar** (personal): relacionar el cuento con la vida del niño. *¿Recuerdas cuando alguien pequeño hizo algo grande?*

Frases cortas, vocabulario del propio cuento y sin respuestas de sí/no.

## Narración

- Formato **mp3** (o m4a), mono, 64–96 kbps: un cuento de 5 minutos ocupa unos 3 MB.
- Nombre exacto: `narracion-es.mp3` / `narracion-en.mp3`.
- Leer el mismo texto que aparece en la página, para que el niño pueda seguirlo.
- Si solo hay narración en un idioma, el reproductor solo aparece en ese idioma.
