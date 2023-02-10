type Mods = Record<string, string | boolean>;

export default function cn(
	cls: string,
	mods: Mods = {},
	...additional: string[]
) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([name, value]) => Boolean(value))
			.map(([name]) => name),
		...additional.filter(Boolean),
	].join(' ');
}
