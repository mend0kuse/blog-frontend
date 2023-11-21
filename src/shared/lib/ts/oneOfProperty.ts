export type OneOfProperty<T extends Record<string | number | symbol, unknown>> = {
	[K in keyof T]: T[K];
}[keyof T];

type Merge<A extends readonly [...any]> = A extends [infer L, ...infer R] ? MergeTwo<L, Merge<R>> : unknown;
type MergeTwo<L, R> = L & R;

export const createEnumsMixin = <Objects extends Array<Readonly<Record<string, string>>>>(...mixingEnums: Objects) => {
	let enumMixin = {};

	for (const mixinEnum of mixingEnums) {
		enumMixin = Object.assign(enumMixin, mixinEnum);
	}

	return enumMixin as Readonly<Merge<Objects>>;
};
