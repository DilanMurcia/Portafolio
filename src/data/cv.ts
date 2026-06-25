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
	summary: { es: string; en: string };
	languages: { es: string[]; en: string[] };
}

export const profile: Profile = {
	name: 'Dilan Albert Murcia Parra',
	role: {
		es: 'Desarrollador Full Stack | React · Node.js · Java',
		en: 'Full Stack Developer | React · Node.js · Java'
	},
	location: 'Bogotá, Colombia',
	email: 'dapdesarrollador@gmail.com',
	phone: '+57 321 690 3828',
	summary: {
		es: 'Tecnólogo en Sistematización de Datos con enfoque en desarrollo web full stack. He construido proyectos propios con React, Node.js, Java, Spring y APIs REST, manejando bases de datos relacionales y no relacionales. Me interesa escribir código limpio, entender los problemas antes de resolverlos y trabajar en equipo con Git. Aprendo rápido y me adapto bien a nuevas tecnologías. Busco mi primera experiencia profesional en un equipo donde pueda aportar desde el primer día y seguir creciendo como desarrollador.',
		en: 'Associate Degree in Data Systems with a focus on full-stack web development. I have built personal projects with React, Node.js, Java, Spring and REST APIs, handling relational and non-relational databases. I care about writing clean code, understanding problems before solving them, and working in a team with Git. I learn fast and adapt easily to new technologies. I am looking for my first professional experience in a team where I can contribute from day one and continue growing as a developer.'
	},
	languages: {
		es: ['Español (nativo)', 'Inglés (intermedio B1)'],
		en: ['Spanish (native)', 'English (intermediate B1)']
	}
};

export const skills: Skill[] = [
	{
		category: { es: 'Frontend', en: 'Frontend' },
		items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Astro']
	},
	{
		category: { es: 'Backend', en: 'Backend' },
		items: ['Node.js', 'Java', 'Spring', 'APIs REST', 'JWT', 'Python']
	},
	{
		category: { es: 'Bases de datos', en: 'Databases' },
		items: ['MySQL', 'MongoDB']
	},
	{
		category: { es: 'Herramientas', en: 'Tools' },
		items: ['Git', 'GitHub', 'VS Code', 'Scrum']
	},
	{
		category: { es: 'Infra / DevOps', en: 'Infra / DevOps' },
		items: ['Linux (Debian, Ubuntu, CachyOS)', 'VPS', 'n8n', 'Notion API']
	}
];

export const experience: Experience[] = [
	{
		role: {
			es: 'Automatización de Procesos',
			en: 'Process Automation'
		},
		company: 'Freelance',
		date: { es: 'May 2026', en: 'May 2026' },
		location: 'Farmacia, Bogotá',
		description: {
			es: [
				'Diseñé e implementé un sistema de registro de turnos y conciliación de caja (efectivo, datáfono y transferencias) con guardado automático en plantillas de Excel, reemplazando el registro manual.',
				'Reduje errores de cálculo en el cierre diario y ahorré 5–10 min por empleado al digitalizar el proceso.'
			],
			en: [
				'Designed and implemented a shift tracking and cash reconciliation system (cash, card and transfers) with automatic saving to Excel templates, replacing the manual ledger.',
				'Reduced calculation errors in the daily closing and saved 5–10 min per employee by digitizing the process.'
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
		date: { es: 'Finalización esperada: dic 2025', en: 'Expected completion: Dec 2025' },
		location: 'Bogotá, Colombia',
		description: {
			es: [
				'Programa con énfasis en programación, análisis de sistemas, bases de datos relacionales y metodologías de desarrollo (RUP, Scrum).',
				'Actualmente pendiente de 2 materias para obtener el título.',
				'Proyectos académicos orientados al diseño de software y desarrollo de aplicaciones cliente-servidor.'
			],
			en: [
				'Program focused on programming, systems analysis, relational databases and development methodologies (RUP, Scrum).',
				'Currently pending 2 courses to obtain the degree.',
				'Academic projects oriented to software design and client-server application development.'
			]
		}
	},
	{
		role: {
			es: 'Técnico Laboral en Desarrollo de Aplicaciones Web',
			en: 'Vocational Technician in Web Application Development'
		},
		school: 'Universidad Autónoma de Bucaramanga (UNAB)',
		date: { es: 'Agosto 2023', en: 'August 2023' },
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
		name: 'Google IT Support Professional Certificate',
		school: 'Coursera',
		date: 'Dic 2023'
	}
];
