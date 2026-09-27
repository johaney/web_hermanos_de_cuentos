# Hermanos de cuento

Web de cuentos infantiles en español e inglés hecha con [Astro](https://astro.build). Cada cuento tiene su propia página y puede ofrecerse como texto, vídeo de YouTube o audio.

La documentación funcional y técnica está en [CLAUDE.md](CLAUDE.md).

## Ver en local

Requiere Node 22.12 o superior (ver `.nvmrc`).

```bash
npm install
npm run dev
```

Después abre `http://localhost:4321`.

## Añadir un cuento

1. Crea la carpeta `src/content/cuentos/<clave>/` (por ejemplo `pinocho`).
2. Añade `es.md` y `en.md` siguiendo [docs/plantilla-cuento.md](docs/plantilla-cuento.md).
3. Opcional: `portada.png`, `narracion-es.mp3` / `narracion-en.mp3` en la misma carpeta, y `youtube:` en el texto.
4. `npm run build` comprueba que todo esté correcto.

## Publicar

Al fusionar en `main`, GitHub Actions compila el sitio y lo sube a IONOS (ver `.github/workflows/deploy.yml`).
