# SoberaníaTech

> Capacitación técnica gratuita, de código abierto y soberana para el desarrollo de Neuquén.

Portal estático de cursos cortos y prácticos sobre transporte de personal, logística y
Vaca Muerta. Hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Requisitos

- Node.js 20 o superior

## Instalación

```bash
git clone https://github.com/abeloqui/soberaniatech.git
cd soberania-tech
npm install
npm run dev        # servidor local en http://localhost:4321
```

Para generar el sitio final:

```bash
npm run build      # genera la carpeta dist/
npm run preview    # previsualiza el build
```

## Estructura

```
src/
├── config.ts            # nombre, lema, repo y contacto
├── content.config.ts    # esquema del frontmatter de los cursos
├── content/cursos/      # un archivo .md por curso
├── layouts/             # Layout principal
├── components/          # Header, Footer, CursoCard
└── pages/               # rutas del sitio
```

## Cómo agregar un curso

1. Creá un archivo en `src/content/cursos/`, por ejemplo `mi-curso.md`
   (el nombre del archivo es la URL: `/cursos/mi-curso`).
2. Empezá con este encabezado:

```markdown
---
title: "Título del curso"
description: "Resumen en una o dos frases (máx. 200 caracteres)."
categoria: "Seguridad"        # texto libre
nivel: "Básico"               # Básico | Intermedio | Avanzado
duracion: "2 horas"
destacado: false              # true = aparece en la portada
orden: 10                     # menor = aparece primero
actualizado: 2026-10-18
autor: "Tu nombre o colectivo"   # opcional
recursos:                        # opcional
  - titulo: "Nombre del recurso"
    url: "https://ejemplo.org"
    tipo: "Web"                  # Documento | Video | Herramienta | Normativa | Web
---

## Contenido en Markdown

Escribí acá el curso.
```

3. Guardá, hacé commit y listo: el curso aparece solo en `/cursos`.

Si el frontmatter tiene un error, el build falla y te indica qué campo corregir.

## Licencia recomendada

- **Código:** GPL-3.0-or-later (copyleft: las mejoras quedan libres).
- **Contenidos (cursos y textos):** Creative Commons BY-SA 4.0.

Agregá el texto completo de la GPL-3.0 en un archivo `LICENSE` (disponible en
<https://www.gnu.org/licenses/gpl-3.0.txt>) y una nota sobre CC BY-SA 4.0 en `LICENSE-CONTENIDO.md`.

## Contribuir

Mirá la página **/contribuir** del sitio o abrí un Issue o Pull Request.
