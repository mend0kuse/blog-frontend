import { type MutableRefObject, useCallback, useRef } from 'react';

import type { BaseFn } from './ts/BaseFn';
import type { FnArguments } from './ts/argsType';

export const useDebounce = <T extends BaseFn>(callback: T, delay: number) => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	const timer = useRef() as MutableRefObject<any>;

	return useCallback(
		(...args: FnArguments<T>) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			timer.current = setTimeout(() => {
				// eslint-disable-next-line n/no-callback-literal
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
};
