export function isTypeIstanse<T>(obj: any, key: keyof T): obj is T {
	return obj[key] !== undefined;
}
