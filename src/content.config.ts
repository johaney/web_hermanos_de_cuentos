import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = ['biblicos', 'valores', 'tradicionales'] as const;

// Un cuento = src/content/cuentos/<clave>/<idioma>.md → id "<clave>/<idioma>".
const cuentos = defineCollection({
  loader: glob({
    pattern: '*/{es,en}.md',
    base: './src/content/cuentos',
    // Sin esto Astro usaría el campo `slug` como id; aquí el id es siempre la ruta.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    titulo: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
    categoria: z.enum(categories),
    etiqueta: z.string(),
    edad: z.tuple([z.number().int(), z.number().int()]),
    minutos: z.number().int().positive(),
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    orden: z.number().int(),
    descripcion: z.string(),
    // Comprensión lectora: 1) recordar qué pasó, 2) pensar por qué, 3) conectar con el niño.
    preguntas: z.array(z.string()).min(1).max(3),
    youtube: z.string().regex(/^[\w-]{11}$/, 'ID de vídeo de YouTube (11 caracteres)').optional(),
    // Libro recomendado (afiliados): `asin` de Amazon o, para otra tienda, `url` completa.
    libro: z
      .object({
        titulo: z.string(),
        autor: z.string(),
        asin: z.string().regex(/^[A-Z0-9]{10}$/, 'ASIN de Amazon (10 caracteres)').optional(),
        url: z.url().optional(),
        nota: z.string().optional(),
      })
      .refine((libro) => libro.asin || libro.url, 'El libro necesita "asin" o "url"')
      .optional(),
  }),
});

export const collections = { cuentos };
