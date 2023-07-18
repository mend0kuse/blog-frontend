import { type FC, type PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';

import { getUserSettings } from '@/entities/User';
import { Theme, ThemeContext } from '@/shared/config/themes/ThemeContext';

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const { theme: defaultTheme } = getUserSettings();
	const initial = useRef(false);
	const [theme, setTheme] = useState<Theme>(defaultTheme ?? Theme.DARK);

	useEffect(() => {
		if (!initial.current && defaultTheme) {
			setTheme(defaultTheme);
			initial.current = true;
		}

		document.body.className = defaultTheme ?? Theme.DARK;
	}, [defaultTheme]);

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
