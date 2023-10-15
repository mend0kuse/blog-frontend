import type { BaseFn } from './BaseFn';

export type FnArguments<T extends BaseFn> = T extends (...args: infer C) => any ? C : never;
