// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública y subcarpeta; se pueden sobrescribir por entorno (ver CLAUDE.md).
const site = process.env.SITE_URL || 'https://cuentos.adeviosystem.com';
const base = process.env.BASE_PATH || '/';

/** Genera dist/.htaccess para Apache (IONOS) con la ruta base correcta. */
const htaccess = {
  name: 'htaccess',
  hooks: {
    /** @param {{ dir: URL }} options */
    'astro:build:done': async ({ dir }) => {
      const root = base.replace(/\/?$/, '/');
      await writeFile(
        new URL('.htaccess', dir),
        `# Generado en el build (astro.config.mjs). No editar en el servidor.
ErrorDocument 404 ${root}404.html

<IfModule mod_headers.c>
  # Los recursos de _astro/ llevan hash en el nombre: se pueden cachear para siempre.
  <If "%{REQUEST_URI} =~ m#/_astro/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml
</IfModule>
`,
      );
    },
  },
};

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Sitemap solo con páginas con idioma: la raíz es una redirección y la 404 no se indexa.
  integrations: [htaccess, sitemap({ filter: (page) => /\/(es|en)\//.test(page) })],
});
