import { type Theme, ThemeContext, defaultTheme } from 'shared/config/themes/ThemeContext';

import { type FC, useEffect, useMemo, useState } from 'react';

export const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		document.body.className = theme;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
