import { useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
	const ref = useRef(false);

	return (...args: any[]) => {
		if (!ref.current) {
			// eslint-disable-next-line n/no-callback-literal
			callback(...args);
			ref.current = true;

			setTimeout(() => {
				ref.current = false;
			}, delay);
		}
	};
};
