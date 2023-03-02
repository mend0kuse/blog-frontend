import {
	type Theme,
	ThemeContext,
	defaultTheme,
} from 'shared/config/themes/ThemeContext';

import { type FC, useMemo, useState, useEffect } from 'react';

export const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		document.body.className = theme
	}, [])

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
