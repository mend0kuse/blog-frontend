import { createContext, FC, useMemo, useState } from "react";

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK

export const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)


	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}