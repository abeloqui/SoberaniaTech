import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    categoria: z.string(), // Ej: "Seguridad", "Herramientas digitales", "Logística"
    nivel: z.enum(['Básico', 'Intermedio', 'Avanzado']).default('Básico'),
    duracion: z.string(), // Ej: "2 horas"
    destacado: z.boolean().default(false),
    orden: z.number().default(99), // menor = aparece primero
    actualizado: z.coerce.date(),
    autor: z.string().default('Comunidad SoberaníaTech'),
    recursos: z
      .array(
        z.object({
          titulo: z.string(),
          url: z.string().url(),
          tipo: z.enum(['Documento', 'Video', 'Herramienta', 'Normativa', 'Web']).default('Web'),
        })
      )
      .default([]),
  }),
});

export const collections = { cursos };