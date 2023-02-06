import { FC, useMemo, useState } from "react"
import { defaultTheme, Theme, ThemeContext } from "shared/config/ThemeContext"

export const ThemeContextProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)


	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}