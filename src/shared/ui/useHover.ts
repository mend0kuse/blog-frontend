import { useCallback, useState } from 'react';

type useHoverResult = [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }];

export const useHover = (): useHoverResult => {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return [isHover, { onMouseEnter, onMouseLeave }];
};
