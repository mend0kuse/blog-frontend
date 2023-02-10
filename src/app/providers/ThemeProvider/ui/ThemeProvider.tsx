import {
	type Theme,
	ThemeContext,
	defaultTheme,
} from 'shared/config/themes/ThemeContext';

import { type FC, useMemo, useState } from 'react';

export const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
