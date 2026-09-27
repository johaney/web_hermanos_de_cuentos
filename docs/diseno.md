# Diseño: "libro ilustrado"

La web debe sentirse como abrir un libro de cuentos, no como una plantilla. Todo sale de la ilustración principal (`src/assets/hermanos-leyendo.png`): noche azul, luz ámbar de las estrellas, el zorro naranja y papel crema.

## Paleta (`src/styles/global.css`, `:root`)

| Token | Color | Uso |
|---|---|---|
| `--paper` | `#f7f0e3` | Fondo general (con textura `--grain`) |
| `--paper-deep` | `#efe3cc` | Sombra de "páginas" bajo las tarjetas |
| `--card` | `#fffaf0` | Tarjetas, notas, marcos |
| `--ink` / `--ink-soft` | `#1d2540` / `#4c5470` | Texto principal / secundario |
| `--night` | `#16233f` | Títulos, botón, pie |
| `--teal` | `#2c6474` | Cursivas de títulos, etiquetas de categoría, enlaces de volver |
| `--amber` | `#e9a23b` | Solo decorativo (subrayados, estrellas, sombra del botón). **No usar para texto** sobre papel: poco contraste |
| `--fox` | `#b0501d` | Acentos de texto: frases manuscritas, capitular, "Leer cuento", "Fin" |
| `--line` | `#d9ccb3` | Bordes y separadores |

## Tipografía

- **Alegreya** (`--serif`): títulos (peso 700–800) y texto de los cuentos (21 px / 1.75). Cursiva para entradillas y palabras destacadas.
- **Alegreya Sans** (`--sans`): interfaz (navegación, filtros, meta, botones).
- **Caveat** (`--hand`, clase `.hand`): solo notas breves "escritas a mano" (frase de portada, "Fin", título de la pregunta de reflexión, nota final). Nunca en párrafos.

## Recursos gráficos

- **Subrayado a mano** (`--squiggle`): estado activo de navegación, idioma, filtros y pestañas de formato. No usar botones tipo píldora.
- **Cinta adhesiva**: rectángulos translúcidos sobre la ilustración de portada y la nota de reflexión.
- **Ornamento** (`Ornament.astro`): separador de dos trazos con estrella; bajo el título del cuento y en la nota final.
- **Tarjeta-libro**: lomo sombreado a la izquierda, bordes 3px/10px y sombra sólida desplazada que simula páginas.
- **Dibujos provisionales** (`CategoryMotif.astro`): línea fina en tinta sobre el `color` del cuento. Bosque y luna (tradicionales), estrella sobre colinas (bíblicos), brote con sol (valores). Se sustituyen por `portada.png` cuando exista.
- **Logo** (`LogoMark.astro`): libro abierto bajo una luna creciente.
- **Pie**: colinas nocturnas (SVG) sobre fondo `--night`.

## Reglas

- Nada de emojis como ilustración ni etiquetas en mayúsculas espaciadas.
- Composición asimétrica y alineada a la izquierda en la portada; centrada solo en la cabecera del cuento.
- Pequeñas rotaciones (±0.4–2°) dan aire artesanal; no pasar de ahí.
- Respetar `prefers-reduced-motion` (ya desactiva transiciones).
- Comprobar en móvil (375 px) que no haya scroll horizontal.
