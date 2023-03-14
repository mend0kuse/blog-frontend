export type Mods = Record<string, string | boolean | undefined>;

export default function cn(cls: string, mods: Mods = {}, ...additional: Array<string | undefined>) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([name, value]) => Boolean(value))
			.map(([name]) => name),
		...additional.filter(Boolean),
	].join(' ');
}
