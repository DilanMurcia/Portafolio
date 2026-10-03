export interface Skill {
	category: { es: string; en: string };
	items: string[];
}

export interface Experience {
	role: { es: string; en: string };
	company: string;
	date: { es: string; en: string };
	location: string;
	description: { es: string[]; en: string[] };
}

export interface Project {
	name: { es: string; en: string };
	stack: string;
	date: { es: string; en: string };
	githubUrl?: string;
	liveUrl?: string;
	description: { es: string[]; en: string[] };
}

export interface Education {
	role: { es: string; en: string };
	school: string;
	date: { es: string; en: string };
	location: string;
	description: { es: string[]; en: string[] };
}

export interface Course {
	name: string;
	school: string;
	date: string;
}

export interface Profile {
	name: string;
	role: { es: string; en: string };
	location: string;
	email: string;
	phone: string;
	github: string;
	portfolio: string;
	summary: { es: string; en: string };
	languages: { es: string[]; en: string[] };
}

export const profile: Profile = {
	name: 'Dilan Albert Murcia Parra',
	role: {
		es: 'Desarrollador Web Full Stack',
		en: 'Full Stack Web Developer'
	},
	location: 'Bogotá, Colombia',
	email: 'dapdesarrollador@gmail.com',
	phone: '+57 321 690 3828',
	github: 'https://github.com/DilanMurcia',
	portfolio: 'https://dilan-albert-murcia-parra.netlify.app/es/',
	summary: {
		es: 'Técnico en desarrollo web y estudiante próximo a graduarse de la Tecnología en Sistematización de Datos en la Universidad Distrital Francisco José de Caldas. Me desenvuelvo como desarrollador full stack con React, Node.js, Java y Spring Boot, y manejo bases de datos relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB). Cuento con experiencia freelance desarrollando una tienda e-commerce para una boutique de ropa y la web de un conjunto residencial, además de trabajo en equipo con CI/CD, Docker y despliegues en VPS. Me interesa escribir código limpio, entender los problemas antes de resolverlos y colaborar con Git. Busco un equipo donde aportar desde el primer día y seguir creciendo como desarrollador.',
		en: 'Vocational technician in web development and student about to graduate from the Data Systems Technology program at Universidad Distrital Francisco José de Caldas. I work as a full stack developer with React, Node.js, Java and Spring Boot, handling relational (PostgreSQL, MySQL) and non-relational (MongoDB) databases. I have freelance experience building an e-commerce store for a clothing boutique and the website for a residential complex, plus teamwork with CI/CD, Docker and VPS deployments. I care about writing clean code, understanding problems before solving them and collaborating with Git. Looking for a team where I can contribute from day one and keep growing as a developer.'
	},
	languages: {
		es: ['Español (nativo)', 'Inglés (intermedio B1)'],
		en: ['Spanish (native)', 'English (intermediate B1)']
	}
};

export const skills: Skill[] = [
	{
		category: { es: 'Frontend', en: 'Frontend' },
		items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS', 'Astro']
	},
	{
		category: { es: 'Backend', en: 'Backend' },
		items: ['Node.js', 'Java', 'Spring Boot', 'C / C++']
	},
	{
		category: { es: 'Bases de datos', en: 'Databases' },
		items: ['MongoDB', 'PostgreSQL']
	},
	{
		category: { es: 'DevOps / Infra', en: 'DevOps / Infra' },
		items: ['Docker', 'GitHub Actions', 'VPS', 'n8n']
	},
	{
		category: { es: 'SO / Sysadmin', en: 'OS / Sysadmin' },
		items: ['Linux (Debian, Ubuntu, CachyOS)']
	},
	{
		category: { es: 'Herramientas', en: 'Tools' },
		items: ['Git', 'GitHub', 'VS Code', 'Scrum', 'RUP']
	}
];

export const experience: Experience[] = [
	{
		role: {
			es: 'Full Stack Developer (Freelance) · WhisWhim (boutique de ropa)',
			en: 'Full Stack Developer (Freelance) · WhisWhim (clothing boutique)'
		},
		company: 'WhisWhim',
		date: { es: 'Ago 2026 – Presente', en: 'Aug 2026 – Present' },
		location: 'Remoto',
		description: {
			es: [
				'Desarrollé de extremo a extremo una plataforma e-commerce/PIM para una boutique de ropa: catálogo público con carrito, panel de administración, gestión de productos e inventario por variantes (talla y color).',
				'Construí el backend en Java 21 + Spring Boot (REST, Spring Security + JWT, Flyway, Springdoc OpenAPI) y el frontend en React + TypeScript + TailwindCSS.',
				'Integré la pasarela de pagos Wompi (Nequi, PSE, tarjetas) con webhook de confirmación y descuento automático de stock, y un agente de ventas con n8n que consulta el catálogo en tiempo real.',
				'Desplegué en producción en un VPS con Docker Compose y nginx, configuré CI con GitHub Actions y backups a Google Drive con rclone.'
			],
			en: [
				'Developed end-to-end an e-commerce/PIM platform for a clothing boutique: public catalog with cart, admin panel, product management and variant-level inventory (size and color).',
				'Built the backend with Java 21 + Spring Boot (REST, Spring Security + JWT, Flyway, Springdoc OpenAPI) and the frontend with React + TypeScript + TailwindCSS.',
				'Integrated the Wompi payment gateway (Nequi, PSE, cards) with confirmation webhook and automatic stock deduction, plus an n8n sales agent that queries the catalog in real time.',
				'Deployed to production on a VPS with Docker Compose and nginx; set up CI with GitHub Actions and Google Drive backups with rclone.'
			]
		}
	},
	{
		role: {
			es: 'Backend Developer & DevOps · No-Country — MeetFlow',
			en: 'Backend Developer & DevOps · No-Country — MeetFlow'
		},
		company: 'No-Country',
		date: { es: 'Sep – Oct 2026', en: 'Sep – Oct 2026' },
		location: 'Remoto',
		description: {
			es: [
				'Plataforma de videoconferencia en tiempo real — simulación laboral en dos equipos multidisciplinarios.',
				'Construí la API de autenticación completa: JWT con rotación de refresh tokens, revocación al cerrar sesión y recuperación de contraseña, sobre arquitectura en capas con repositorios (Prisma/PostgreSQL).',
				'Implementé eventos de tiempo real (estado de mic, cámara y pantalla compartida) vía Socket.io con contrato versionado y documentado para el consumo del frontend.',
				'Armé la infraestructura de despliegue: Dockerfiles dev/prod, docker-compose local, CI de imágenes Docker y pipeline CD (GitHub Actions) a Vercel + Render + Neon con migraciones Prisma antes del deploy.',
				'Diseñé la imagen Docker combinada para Coolify (API + Next.js + nginx en un solo contenedor) con proxy inverso interno, upgrade de WebSockets y webhooks; desplegada en un VPS con dominio propio y HTTPS.'
			],
			en: [
				'Real-time videoconferencing platform — work simulation across two multidisciplinary teams.',
				'Built the full authentication API: JWT with refresh token rotation, revocation on logout and password recovery, on a layered architecture with repositories (Prisma/PostgreSQL).',
				'Implemented real-time events (mic, camera and screen-share state) via Socket.io with a versioned, documented contract for frontend consumption.',
				'Built the deployment infrastructure: dev/prod Dockerfiles, local docker-compose, Docker image CI and a GitHub Actions CD pipeline to Vercel + Render + Neon with Prisma migrations before deploy.',
				'Designed the combined Docker image for Coolify (API + Next.js + nginx in one container) with internal reverse proxy, WebSocket upgrade and webhooks; deployed on a VPS with its own domain and HTTPS.'
			]
		}
	},
	{
		role: {
			es: 'Backend Developer · PhysaFlow (proyecto en equipo)',
			en: 'Backend Developer · PhysaFlow (team project)'
		},
		company: 'PhysaFlow',
		date: { es: 'Jul – Ago 2026', en: 'Jul – Aug 2026' },
		location: 'Remoto',
		description: {
			es: [
				'Plataforma web para análisis de capacidad en data centers — APIs REST, CI/CD, Docker.',
				'Diseñé e implementé la infraestructura Docker del backend (Dockerfile multi-stage, docker-compose, perfil mock sin DB), permitiendo que el equipo frontend integrara contra el servidor desde el día 1 sin instalar Java localmente.',
				'Modelé la base de datos relacional (tablas con FK, UNIQUE y CHECK) y escribí las migraciones Flyway versionadas, documentando el esquema con diagramas ER (Mermaid) y las convenciones del equipo (snake_case en DB, camelCase en Java).',
				'Redacté el contrato de API en OpenAPI 3 y más de 35 historias de usuario en formato ágil, coordinando el trabajo en paralelo con otro desarrollador backend mediante Conventional Commits, branches por feature y PRs revisados.',
				'Configuré CI/CD con GitHub Actions y publicación de imágenes Docker en Docker Hub para automatizar los despliegues del equipo.'
			],
			en: [
				'Web platform for data center capacity analysis — REST APIs, CI/CD, Docker.',
				'Designed and implemented the backend Docker infrastructure (multi-stage Dockerfile, docker-compose, mock profile without DB), allowing the frontend team to integrate against the server from day 1 without installing Java locally.',
				'Modeled the relational database (tables with FK, UNIQUE and CHECK) and wrote versioned Flyway migrations, documenting the schema with ER diagrams (Mermaid) and team conventions (snake_case in DB, camelCase in Java).',
				'Wrote the OpenAPI 3 API contract and 35+ user stories in agile format, coordinating work in parallel with another backend developer using Conventional Commits, feature branches and reviewed PRs.',
				'Set up CI/CD with GitHub Actions and Docker Hub image publishing to automate team deployments.'
			]
		}
	},
	{
		role: {
			es: 'Desarrollador Web (Freelance) · Conjunto residencial',
			en: 'Web Developer (Freelance) · Residential complex'
		},
		company: 'Conjunto residencial',
		date: { es: '2024', en: '2024' },
		location: 'Bogotá, Colombia',
		description: {
			es: [
				'Diseñé y desarrollé una landing page responsiva para el conjunto residencial, presentando información institucional, servicios y comunicados para los residentes.',
				'Implementé un módulo de gestión y almacenamiento de documentos de propiedad horizontal (actas y reglamentos), permitiendo a los copropietarios la consulta y descarga organizada.',
				'Construí el backend con Node.js para servir el contenido y gestionar los documentos, y maqueté la interfaz con HTML, CSS y TailwindCSS logrando un diseño limpio y moderno.'
			],
			en: [
				'Designed and developed a responsive landing page for the residential complex, presenting institutional information, services and announcements for residents.',
				'Implemented a document management and storage module for horizontal property documents (minutes and regulations), allowing co-owners to browse and download them in an organized way.',
				'Built the Node.js backend to serve content and manage documents, and crafted the UI with HTML, CSS and TailwindCSS for a clean, modern design.'
			]
		}
	}
];

export const projects: Project[] = [
	{
		name: {
			es: 'WhisWhim — E-commerce y PIM',
			en: 'WhisWhim — E-commerce & PIM'
		},
		stack: 'Java 21 · Spring Boot · React · TypeScript · PostgreSQL · Docker · Wompi · n8n',
		date: { es: 'Ago 2026', en: 'Aug 2026' },
		liveUrl: 'https://whiswhim.shop',
		description: {
			es: [
				'Plataforma e-commerce/PIM para una boutique de ropa: catálogo público con carrito, panel de administración y gestión de inventario por variantes (talla y color).',
				'Backend en Spring Boot (REST, Spring Security + JWT, Flyway) y frontend en React + TailwindCSS.',
				'Pasarela de pagos Wompi con webhook de confirmación y descuento automático de stock, más un agente de ventas con n8n que consulta el catálogo en tiempo real.'
			],
			en: [
				'E-commerce/PIM platform for a clothing boutique: public catalog with cart, admin panel and variant-level inventory (size and color).',
				'Spring Boot backend (REST, Spring Security + JWT, Flyway) and React + TailwindCSS frontend.',
				'Wompi payment gateway with confirmation webhook and automatic stock deduction, plus an n8n sales agent querying the catalog in real time.'
			]
		}
	},
	{
		name: {
			es: 'MeetFlow — Videoconferencia en tiempo real',
			en: 'MeetFlow — Real-time Video Conferencing'
		},
		stack: 'Node.js · Express · Socket.io · Prisma · PostgreSQL · Docker · Coolify',
		date: { es: 'Sep – Oct 2026', en: 'Sep – Oct 2026' },
		liveUrl: 'https://meetflow.servidordilanalbert.online/',
		description: {
			es: [
				'Plataforma de videoconferencia en tiempo real (simulación laboral No-Country) con API de autenticación completa (JWT con rotación de refresh tokens).',
				'Eventos de tiempo real vía Socket.io con contrato versionado y pipeline CD a Vercel + Render + Neon.',
				'Imagen Docker combinada para Coolify con proxy inverso interno, WebSockets y HTTPS en VPS.'
			],
			en: [
				'Real-time videoconferencing platform (No-Country work simulation) with a full auth API (JWT with refresh token rotation).',
				'Real-time events via Socket.io with a versioned contract and CD pipeline to Vercel + Render + Neon.',
				'Combined Docker image for Coolify with internal reverse proxy, WebSockets and HTTPS on a VPS.'
			]
		}
	},
	{
		name: {
			es: 'PhysaFlow — Análisis de capacidad en data centers',
			en: 'PhysaFlow — Data Center Capacity Analysis'
		},
		stack: 'Java 21 · Spring Boot · PostgreSQL · Docker · Flyway · OpenAPI 3 · GitHub Actions',
		date: { es: 'Jul – Ago 2026', en: 'Jul – Aug 2026' },
		liveUrl: 'https://physaflow.netlify.app/',
		description: {
			es: [
				'Plataforma web para análisis de capacidad en data centers, desarrollada en equipo.',
				'Infraestructura Docker multi-stage con perfil mock, migraciones Flyway versionadas y esquema documentado con diagramas ER.',
				'Contrato de API en OpenAPI 3, más de 35 historias de usuario y CI/CD con GitHub Actions y Docker Hub.'
			],
			en: [
				'Web platform for data center capacity analysis, built as a team project.',
				'Multi-stage Docker infrastructure with a mock profile, versioned Flyway migrations and schema documented with ER diagrams.',
				'OpenAPI 3 API contract, 35+ user stories and CI/CD with GitHub Actions and Docker Hub.'
			]
		}
	},
	{
		name: {
			es: 'Automatizaciones con n8n',
			en: 'n8n Automations'
		},
		stack: 'n8n · WhatsApp · Telegram · Supabase · Notion · Excel · VPS · Linux',
		date: { es: '2026', en: '2026' },
		description: {
			es: [
				'Chatbots inteligentes conectados a WhatsApp y Telegram capaces de responder consultas, ejecutar flujos condicionales y gestionar datos en tiempo real.',
				'Automatización de procesos de scraping web, formularios, backups periódicos y sincronización de datos entre plataformas como Notion, Supabase, Excel y Word.',
				'Despliegue y administración de instancias de n8n en servidores VPS con Linux, gestionando configuración del entorno, servicios y acceso remoto.'
			],
			en: [
				'Smart chatbots connected to WhatsApp and Telegram able to answer queries, run conditional flows and manage data in real time.',
				'Automation of web scraping, forms, periodic backups and data sync across platforms like Notion, Supabase, Excel and Word.',
				'Deployment and administration of n8n instances on Linux VPS servers, managing environment configuration, services and remote access.'
			]
		}
	},
	{
		name: {
			es: 'Portafolio Web Personal',
			en: 'Personal Web Portfolio'
		},
		stack: 'Astro · React · TailwindCSS · Node.js',
		date: { es: 'Sep 2024', en: 'Sep 2024' },
		liveUrl: 'https://dilan-albert-murcia-parra.netlify.app',
		githubUrl: 'https://github.com/DilanMurcia/Portafolio',
		description: {
			es: [
				'Diseñé y desarrollé mi portafolio profesional personalizando completamente el diseño, los estilos y la lógica de navegación a partir de una plantilla base.',
				'Integré proyectos académicos y adapté la arquitectura del sitio, practicando el flujo completo de desarrollo front-end moderno.'
			],
			en: [
				'Designed and developed my professional portfolio, fully customizing the design, styles and navigation logic from a base template.',
				'Integrated academic projects and adapted the site architecture, practicing the complete modern front-end development workflow.'
			]
		}
	},
	{
		name: {
			es: 'Herramienta de Análisis de Rutas en Grafos',
			en: 'Graph Path Analysis Tool'
		},
		stack: 'C++ · GitHub · Algoritmos de teoría de conjuntos',
		date: { es: 'Sep 2023', en: 'Sep 2023' },
		githubUrl: 'https://github.com/DilanMurcia/conjunto',
		description: {
			es: [
				'Colaboré en el diseño del backend y la lógica de operaciones sobre conjuntos para una herramienta que analiza rutas en estructuras de grafos.',
				'Apliqué buenas prácticas de código abierto y flujo de trabajo colaborativo con GitHub (pull requests, revisiones de código).'
			],
			en: [
				'Collaborated on backend design and set-operation logic for a tool that analyzes paths in graph structures.',
				'Applied open-source best practices and collaborative GitHub workflow (pull requests, code reviews).'
			]
		}
	},
	{
		name: {
			es: 'App de Simplificación Booleana',
			en: 'Boolean Simplification App'
		},
		stack: 'Java · Patrón MVC · Algoritmo de Quine-McCluskey',
		date: { es: 'Sep 2023', en: 'Sep 2023' },
		description: {
			es: [
				'Desarrollé una aplicación de escritorio que simplifica expresiones booleanas mediante el algoritmo de Quine-McCluskey.',
				'Implementé el patrón MVC para separar la lógica de negocio de la interfaz, reforzando habilidades de diseño de software.'
			],
			en: [
				'Developed a desktop application that simplifies boolean expressions using the Quine-McCluskey algorithm.',
				'Implemented the MVC pattern to separate business logic from the UI, reinforcing software design skills.'
			]
		}
	}
];

export const education: Education[] = [
	{
		role: {
			es: 'Tecnólogo en Sistematización de Datos',
			en: 'Associate Degree in Data Systems'
		},
		school: 'Universidad Distrital Francisco José de Caldas',
		date: { es: 'Esperada: Dic 2025', en: 'Expected: Dec 2025' },
		location: 'Bogotá, Colombia',
		description: {
			es: [
				'Programa con énfasis en programación, análisis de sistemas, bases de datos relacionales y metodologías de desarrollo (RUP, Scrum). Actualmente pendiente de 2 materias para obtener el título.'
			],
			en: [
				'Program with emphasis on programming, systems analysis, relational databases and development methodologies (RUP, Scrum). Currently 2 courses away from earning the degree.'
			]
		}
	},
	{
		role: {
			es: 'Técnico Laboral en Desarrollo de Aplicaciones Web',
			en: 'Vocational Technician in Web Application Development'
		},
		school: 'Universidad Autónoma de Bucaramanga (UNAB)',
		date: { es: 'Ago 2023', en: 'Aug 2023' },
		location: 'Bucaramanga, Colombia',
		description: {
			es: [
				'Formación práctica en HTML, CSS, JavaScript y bases de datos con enfoque en interfaces responsive y estructuras CRUD.'
			],
			en: [
				'Practical training in HTML, CSS, JavaScript and databases focused on responsive interfaces and CRUD structures.'
			]
		}
	}
];

export const courses: Course[] = [
	{
		name: 'Oracle Next Education F2 T5 — Back-end',
		school: 'Oracle & Alura Latam',
		date: 'Dic 2023'
	},
	{
		name: 'Soporte de Tecnologías de la Información de Google',
		school: 'Coursera',
		date: 'Dic 2023'
	}
];
