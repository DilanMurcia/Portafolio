export interface Project {
	name: { es: string; en: string };
	demoLink: string;
	githubLink?: string;
	tags?: string[];
	description?: { es: string; en: string };
	postLink?: string;
	demoLinkRel?: string;
	featured?: boolean;
	date?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: {
			es: 'WhisWhim — E-commerce y PIM',
			en: 'WhisWhim — E-commerce & PIM'
		},
		demoLink: 'https://whiswhim.shop',
		tags: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'n8n'],
		featured: true,
		date: '2026',
		description: {
			es: 'Plataforma e-commerce/PIM para una boutique de ropa: catálogo con carrito, panel de administración e inventario por variantes. Backend en Spring Boot con seguridad JWT, pagos Wompi con webhook y descuento automático de stock, y agente de ventas con n8n. Desplegada en VPS con Docker Compose, nginx y CI con GitHub Actions.',
			en: 'E-commerce/PIM platform for a clothing boutique: catalog with cart, admin panel and variant-level inventory. Spring Boot backend with JWT security, Wompi payments with confirmation webhook and automatic stock deduction, plus an n8n sales agent. Deployed on a VPS with Docker Compose, nginx and GitHub Actions CI.'
		}
	},
	{
		name: {
			es: 'MeetFlow — Videoconferencia en tiempo real',
			en: 'MeetFlow — Real-time Video Conferencing'
		},
		demoLink: 'https://meetflow.servidordilanalbert.online/',
		tags: ['Node.js', 'Express', 'Socket.io', 'Prisma', 'PostgreSQL', 'Docker', 'Coolify'],
		date: '2026',
		description: {
			es: 'Plataforma de videoconferencia en tiempo real (simulación laboral No-Country). API de autenticación completa con JWT y rotación de refresh tokens, eventos en tiempo real vía Socket.io, pipeline CD a Vercel + Render + Neon e imagen Docker combinada para Coolify con HTTPS en VPS.',
			en: 'Real-time videoconferencing platform (No-Country work simulation). Full auth API with JWT and refresh token rotation, real-time events via Socket.io, CD pipeline to Vercel + Render + Neon, and a combined Docker image for Coolify with HTTPS on a VPS.'
		}
	},
	{
		name: {
			es: 'PhysaFlow — Análisis de capacidad en data centers',
			en: 'PhysaFlow — Data Center Capacity Analysis'
		},
		demoLink: 'https://physaflow.netlify.app/',
		tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Flyway', 'OpenAPI 3'],
		date: '2026',
		description: {
			es: 'Plataforma web para análisis de capacidad en data centers, desarrollada en equipo. Infraestructura Docker multi-stage con perfil mock, migraciones Flyway versionadas, contrato de API en OpenAPI 3, más de 35 historias de usuario y CI/CD con GitHub Actions y Docker Hub.',
			en: 'Web platform for data center capacity analysis, built as a team. Multi-stage Docker infrastructure with a mock profile, versioned Flyway migrations, OpenAPI 3 API contract, 35+ user stories and CI/CD with GitHub Actions and Docker Hub.'
		}
	},
	{
		name: {
			es: 'Automatizaciones con n8n',
			en: 'n8n Automations'
		},
		demoLink: 'https://github.com/DilanMurcia',
		tags: ['n8n', 'WhatsApp', 'Telegram', 'Supabase', 'Notion', 'VPS'],
		date: '2026',
		description: {
			es: 'Chatbots inteligentes conectados a WhatsApp y Telegram, automatización de scraping, formularios, backups y sincronización entre plataformas (Notion, Supabase, Excel, Word). Instancias de n8n desplegadas y administradas en VPS con Linux.',
			en: 'Smart chatbots connected to WhatsApp and Telegram, plus automation of web scraping, forms, backups and cross-platform sync (Notion, Supabase, Excel, Word). n8n instances deployed and administered on Linux VPS.'
		}
	},
	{
		name: {
			es: 'Portafolio Web Personal',
			en: 'Personal Web Portfolio'
		},
		demoLink: 'https://dilan-albert-murcia-parra.netlify.app',
		githubLink: 'https://github.com/DilanMurcia/Portafolio',
		tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
		featured: true,
		date: '2024-2026',
		description: {
			es: 'Diseñé y desarrollé mi portafolio profesional partiendo de una plantilla base, personalizando completamente el diseño, los estilos y la lógica de navegación. Integra mis proyectos y servicios con soporte bilingüe (ES/EN), animaciones con canvas y modo oscuro. Practiqué el flujo completo de desarrollo front-end moderno con Astro 5.',
			en: 'I designed and developed my professional portfolio starting from a base template, fully customizing the design, styles and navigation logic. It integrates my projects and services with bilingual support (ES/EN), canvas animations and dark mode. I practiced the complete modern front-end development workflow with Astro 5.'
		}
	}
];
