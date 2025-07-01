# Portafolio de Dilan Albert Murcia Parra

Este es mi portafolio personal como desarrollador de software. He construido esta web con la intención de mostrar mis proyectos, habilidades, y ofrecer mis servicios como freelance, utilizando herramientas modernas como Astro, Tailwind CSS y TypeScript.

---

## 🌐 Sitio en producción

🔗 [https://dilan-albert-murcia-parra.netlify.app](https://dilan-albert-murcia-parra.netlify.app)

---

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build/) – Framework estático y optimizado para rendimiento
- [Tailwind CSS](https://tailwindcss.com/) – Utilidades CSS modernas
- [TypeScript](https://www.typescriptlang.org/) – Superset tipado de JavaScript
- [pnpm](https://pnpm.io/) – Gestor de paquetes rápido y eficiente
- [Heroicons](https://heroicons.com/) – Íconos SVG por Tailwind Labs
- Markdown + MDX – Para gestionar contenidos y blogs

---

## 📁 Estructura del proyecto

```bash
Portafolio/
├── public/              # Recursos públicos (imágenes, CV, JS)
│   ├── cv/              # Hoja de vida en PDF
│   └── blog-placeholder-*.jpg
├── src/
│   ├── assets/          # Imágenes del sitio
│   ├── components/      # Componentes Astro reutilizables (Prose, ProjectList, etc.)
│   ├── layouts/         # Layouts base como BaseLayout.astro
│   ├── pages/           # Páginas principales: proyectos, servicios, posts, etc.
│   └── consts.ts        # Título, descripción y tagline del sitio
├── astro.config.mjs     # Configuración principal de Astro
├── tailwind.config.mjs  # Configuración de estilos con Tailwind
├── package.json         # Dependencias y scripts del proyecto
└── pnpm-lock.yaml       # Resoluciones exactas de dependencias
```

---

## ✨ Funcionalidades

- 📄 Presentación personal con imagen e introducción
- 🛠️ Sección de proyectos dinámicos (con componente `ProjectList`)
- 🧠 Blog/Servicios con publicaciones cargadas desde `content/`
- 📥 Descarga directa de mi CV en PDF (`/public/cv/CVDilanMurcia.pdf`)
- 📱 Responsive y optimizado para móviles
- 🌙 Soporte para modo oscuro (dark mode)

---

## 📦 Instalación local

```bash
git clone https://github.com/DilanMurcia/Portafolio.git
cd Portafolio
pnpm install
pnpm dev
```
