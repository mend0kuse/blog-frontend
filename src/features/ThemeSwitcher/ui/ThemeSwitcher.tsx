import { type FC, memo } from 'react';

import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { Theme } from '@/shared/config/themes/ThemeContext';
import { useTheme } from '@/shared/config/themes/useTheme';
import { Button, ThemeButton } from '@/shared/ui/Button';

export const ThemeSwitcher: FC = memo(() => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
			<ThemeSwitcherIcon fill={theme === Theme.LIGHT ? '#FFC700' : '#0115C6'} />
		</Button>
	);
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
