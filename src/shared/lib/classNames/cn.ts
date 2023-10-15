export type Mods = Record<string, string | boolean | undefined>;

type Additional = Array<string | undefined>;

function cn(cls: string): string;
function cn(cls: string, mods: Mods): string;
function cn(cls: string, ...additional: Additional): string;
function cn(cls: string, mods: Mods, ...additional: Additional): string;
function cn(cls: string, modsOrClass?: any, ...additional: any[]): string {
	const result = [cls];

	const isStringMods = typeof modsOrClass === 'string';

	if (isStringMods) {
		result.push(modsOrClass);
	}

	result.push(...additional.filter(Boolean));

	if (isStringMods || !modsOrClass) {
		return result.join(' ');
	}

	const mappedMods = Object.entries(modsOrClass)
		.filter(([_, value]) => Boolean(value))
		.map(([name]) => name);

	return result.concat(mappedMods).join(' ');
}

export default cn;
