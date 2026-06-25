import { ui, defaultLanguage, languages, type Language } from './ui';

export const LANGUAGES = languages;
export type { Language };
export { defaultLanguage, ui };

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split('/');
	if (lang === 'es' || lang === 'en') return lang;
	return defaultLanguage;
}

export function useTranslations(lang: Language) {
	return function t(key: keyof typeof ui[typeof defaultLanguage]): string {
		const value = ui[lang][key];
		if (value === undefined) {
			console.warn(`Missing translation for key "${key}" in language "${lang}"`);
			return ui[defaultLanguage][key] || key;
		}
		return value;
	};
}

export function getPathWithLocale(path: string, newLang: Language): string {
	const segments = path.split('/').filter(Boolean);
	if (segments.length === 0) return `/${newLang}/`;
	const first = segments[0];
	if (first === 'es' || first === 'en') {
		segments[0] = newLang;
	} else {
		segments.unshift(newLang);
	}
	const joined = segments.join('/');
	return `/${joined}${path.endsWith('/') || !path.split('/').pop() ? '/' : ''}`;
}
