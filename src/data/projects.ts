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
