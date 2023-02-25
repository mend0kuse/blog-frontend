import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Theme } from 'shared/config/themes/ThemeContext';
import { useTheme } from 'shared/config/themes/useTheme';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { type ButtonHTMLAttributes, type FC } from 'react';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
			<ThemeSwitcherIcon
				fill={theme === Theme.LIGHT ? '#FFC700' : '#0115C6'}
			/>
		</Button>
	);
};
