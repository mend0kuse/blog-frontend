import { useCallback, useState } from 'react';

export const useToggler = () => {
	const [value, setValue] = useState(false);

	const setTrue = useCallback(() => {
		setValue(true);
	}, []);

	const setFalse = useCallback(() => {
		setValue(false);
	}, []);

	const toggleValue = useCallback(() => {
		setValue((prev) => !prev);
	}, []);

	return { value, setTrue, setFalse, toggleValue };
};
