export function isTypeInstanse<T>(obj: any, key: keyof T): obj is T {
	return obj[key] !== undefined;
}
