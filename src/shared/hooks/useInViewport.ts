import { type MutableRefObject, useEffect } from 'react';

export const useInViewport = (
	wrapperRef: MutableRefObject<HTMLElement | null>,
	target: MutableRefObject<HTMLElement | null>,
	callback?: () => void,
) => {
	useEffect(() => {
		const options = {
			root: wrapperRef.current,
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				callback?.();
			}
		}, options);

		target.current && observer.observe(target.current);

		return () => {
			observer.disconnect();
		};
	}, [callback, target, wrapperRef]);
};
