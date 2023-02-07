import { ButtonHTMLAttributes, FC } from 'react';
import { useTheme } from 'shared/config/themes/useTheme';
import cn from 'shared/lib/classNames/cn';
import styles from './ThemeSwitcher.module.scss'
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { Theme } from 'shared/config/themes/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={cn(styles.ThemeSwitcher, {}, className)}
			onClick={toggleTheme}
		>
			<ThemeSwitcherIcon fill={theme === Theme.LIGHT ? '#FFC700' : '#0115C6'} />
		</Button>
	);
};
