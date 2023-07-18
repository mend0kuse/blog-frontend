import { useContext } from 'react';

import { Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (saveAction: (theme: Theme) => void) => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme?.(newTheme);
		document.body.className = newTheme;
		saveAction(newTheme);
	};

	return { theme, toggleTheme };
};
