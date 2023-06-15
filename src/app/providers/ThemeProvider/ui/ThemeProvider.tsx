import { type FC, type PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { type Theme, ThemeContext, defaultTheme } from '@/shared/config/themes/ThemeContext';

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		document.body.className = theme;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
