import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, getUserSettings, useAddSettingsMutation } from '@/entities/User';
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { Theme } from '@/shared/config/themes/ThemeContext';
import { useTheme } from '@/shared/config/themes/useTheme';
import { Button, ThemeButton } from '@/shared/ui/Button';

export const ThemeSwitcher: FC = memo(() => {
	const { theme, toggleTheme } = useTheme();
	const [addSettings] = useAddSettingsMutation();

	const authData = useSelector(getUserAuthData);
	const currentSettings = getUserSettings();

	const onClickHandler = () => {
		toggleTheme((newTheme: Theme) => {
			addSettings({
				userId: authData?.id ?? '',
				userSettings: { ...currentSettings, theme: newTheme },
			});
		});
	};

	return (
		<Button theme={ThemeButton.CLEAR} onClick={onClickHandler}>
			<ThemeSwitcherIcon fill={theme === Theme.LIGHT ? '#FFC700' : '#0115C6'} />
		</Button>
	);
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
