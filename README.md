# Hermanos de cuento

Sitio estático de cuentos infantiles en español e inglés. Incluye once historias, filtros por categoría, búsqueda y selector de idioma. No requiere instalación, compilación ni servidor de aplicaciones.

## Ver en local

Abre `index.html` en un navegador. Para simular un servidor local, desde esta carpeta ejecuta:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Subir a GitHub

Crea un repositorio vacío en tu cuenta. En esta carpeta ejecuta:

```bash
git init
git add .
git commit -m "Publicar Hermanos de cuento"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Sustituye `TU_USUARIO` y `TU_REPOSITORIO`. Si quieres alojarlo en GitHub Pages, entra en **Settings → Pages**, selecciona **Deploy from a branch**, rama **main** y carpeta **/(root)**.

## Archivos

- `index.html`: estructura, estilos, comportamiento y textos de los cuentos.
- `hermanos-leyendo.png`: ilustración principal.

El sitio guarda la preferencia de idioma únicamente en el navegador de cada visitante. La fuente se carga desde Google Fonts; si falla, usa fuentes instaladas en el dispositivo.
