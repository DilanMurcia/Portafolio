# Portafolio de Dilan Albert Murcia Parra

> Personal portfolio as a full stack developer specialized in **Artificial Intelligence**, **process automation with n8n**, and **web development** with React, Node.js and Java.
> Built with **Astro 5** + **Tailwind CSS** + **TypeScript**. Fully bilingual (ES/EN).

🌐 **Sitio en producción / Live site:**
[https://dilan-albert-murcia-parra.netlify.app](https://dilan-albert-murcia-parra.netlify.app)

- 🇪🇸 Español: [`/es/`](https://dilan-albert-murcia-parra.netlify.app/es/)
- 🇺🇸 English: [`/en/`](https://dilan-albert-murcia-parra.netlify.app/en/)

---

## 🇪🇸 Versión en español

Este es mi portafolio personal como desarrollador de software. Lo construí para mostrar mis proyectos, habilidades, y ofrecer mis servicios como freelance, con un diseño bilingüe optimizado para SEO.

### 🚀 Stack tecnológico

- [Astro 5](https://astro.build/) – Framework estático con i18n nativo (ES/EN)
- [Tailwind CSS](https://tailwindcss.com/) – Utilidades CSS
- [TypeScript](https://www.typescriptlang.org/) – Superset tipado de JavaScript
- [MDX](https://mdxjs.com/) – Contenido de blog/servicios
- [pnpm](https://pnpm.io/) – Gestor de paquetes
- [Heroicons](https://heroicons.com/) – Íconos SVG
- [Formspree](https://formspree.io/) – Formulario de contacto

### ✨ Funcionalidades

- 🌐 **Bilingüe ES/EN** con selector de idioma
- 📄 **CV completo** en formato web y PDF descargable
- 🛠️ **Sección de proyectos** con datos desde `src/data/projects.ts`
- 💼 **Sección de servicios** con cards de cotización
- 📬 **Formulario de contacto** (Formspree)
- 🌙 Modo oscuro con persistencia
- 📱 Responsive y optimizado para móviles
- ⚡ Animación de fondo con canvas
- 🗺️ Sitemap + RSS bilingües

### 📁 Estructura del proyecto

```bash
Portafolio/
├── public/                       # Recursos públicos
│   ├── cv/CVDilanMurcia.pdf      # Hoja de vida en PDF
│   ├── og-image.svg              # Imagen Open Graph por defecto
│   └── *.jpg                     # Imágenes placeholder
├── src/
│   ├── assets/                   # Imágenes y SVGs
│   ├── components/               # Componentes Astro reutilizables
│   │   ├── LangSwitch.astro      # Selector de idioma
│   │   ├── ProjectList.astro     # Lista de proyectos
│   │   ├── ServiceCard.astro     # Card de servicio
│   │   ├── SkillBadge.astro      # Badge de habilidad
│   │   └── ExperienceItem.astro  # Item de experiencia
│   ├── content/
│   │   ├── blog/                 # Posts ES (carpeta YYYY-MM-DD-slug/)
│   │   │   └── YYYY-MM-DD-*-en/  # Posts EN (carpeta paralela)
│   │   └── config.ts             # Schema de content collections
│   ├── data/
│   │   ├── cv.ts                 # Datos del CV (ES/EN)
│   │   └── projects.ts           # Lista de proyectos
│   ├── i18n/
│   │   ├── ui.ts                 # Diccionarios de traducciones UI
│   │   └── utils.ts              # Helpers de i18n
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── components/
│   │       ├── BaseHead.astro
│   │       ├── Header.astro
│   │       └── Footer.astro
│   ├── pages/
│   │   ├── es/                   # Versión español
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── contact.astro
│   │   │   ├── cv.astro
│   │   │   ├── proyectos/index.astro
│   │   │   ├── servicios/index.astro
│   │   │   ├── posts/index.astro
│   │   │   ├── posts/[...slug].astro
│   │   │   ├── etiquetas/index.astro
│   │   │   ├── etiquetas/[tag].astro
│   │   │   ├── 404.astro
│   │   │   └── rss.xml.js
│   │   └── en/                   # Versión inglés (misma estructura)
│   ├── consts.ts                 # Metadata del sitio ES/EN
│   └── utils.ts
├── astro.config.mjs              # i18n config: defaultLocale 'es', locales ['es','en']
├── tailwind.config.mjs
└── package.json
```

### ➕ Cómo agregar un nuevo post bilingüe

1. Crea la carpeta con fecha y slug en ES: `src/content/blog/YYYY-MM-DD-mi-slug/`
2. Crea el archivo `index.mdx` con frontmatter que incluya `locale: 'es'` y `translationKey: 'mi-slug'`
3. Crea la carpeta EN: `src/content/blog/YYYY-MM-DD-mi-slug-en/`
4. Crea `index.mdx` (o `.md`) con `locale: 'en'` y el mismo `translationKey`
5. Los posts aparecerán automáticamente en `/es/posts/` y `/en/posts/`

### ➕ Cómo agregar un proyecto

Edita `src/data/projects.ts` y añade un objeto con:
- `name`, `demoLink`, `githubLink`, `tags`, `description: { es, en }`, `featured`, `date`

### 📦 Instalación y desarrollo local

```bash
git clone https://github.com/DilanMurcia/Portafolio.git
cd Portafolio
pnpm install
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción
pnpm preview      # vista previa del build
```

---

## 🇺🇸 English version

This is my personal portfolio as a software developer. I built it to showcase my projects, skills, and offer my services as a freelancer, with a bilingual design optimized for SEO.

### 🚀 Tech stack

- [Astro 5](https://astro.build/) – Static framework with native i18n (ES/EN)
- [Tailwind CSS](https://tailwindcss.com/) – CSS utilities
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript superset
- [MDX](https://mdxjs.com/) – Blog/services content
- [pnpm](https://pnpm.io/) – Package manager
- [Heroicons](https://heroicons.com/) – SVG icons
- [Formspree](https://formspree.io/) – Contact form

### ✨ Features

- 🌐 **Bilingual ES/EN** with language switcher
- 📄 **Full CV** in web format and downloadable PDF
- 🛠️ **Projects section** with data from `src/data/projects.ts`
- 💼 **Services section** with quote cards
- 📬 **Contact form** (Formspree)
- 🌙 Persistent dark mode
- 📱 Responsive and mobile-optimized
- ⚡ Canvas background animation
- 🗺️ Sitemap + bilingual RSS

### ➕ How to add a new bilingual post

1. Create folder with date and slug for ES: `src/content/blog/YYYY-MM-DD-my-slug/`
2. Create `index.mdx` with frontmatter including `locale: 'es'` and `translationKey: 'my-slug'`
3. Create EN folder: `src/content/blog/YYYY-MM-DD-my-slug-en/`
4. Create `index.mdx` (or `.md`) with `locale: 'en'` and same `translationKey`
5. Posts will appear automatically in `/es/posts/` and `/en/posts/`

### ➕ How to add a project

Edit `src/data/projects.ts` and add an object with:
- `name`, `demoLink`, `githubLink`, `tags`, `description: { es, en }`, `featured`, `date`

### 📦 Local development

```bash
git clone https://github.com/DilanMurcia/Portafolio.git
cd Portafolio
pnpm install
pnpm dev          # dev server
pnpm build        # production build
pnpm preview      # preview build
```

---

## 📫 Contacto / Contact

- **Email:** [dapdesarrollador@gmail.com](mailto:dapdesarrollador@gmail.com)
- **WhatsApp:** [+57 321 690 3828](https://wa.me/573216903828)
- **GitHub:** [@DilanMurcia](https://github.com/DilanMurcia)
- **Ubicación / Location:** Bogotá, Colombia
