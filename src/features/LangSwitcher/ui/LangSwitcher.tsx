import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	short: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ short }) => {
	const { t, i18n } = useTranslation();

	const toggleLang = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<Button
			onClick={toggleLang}
			theme={ThemeButton.CLEAR}
			className={cn(styles.LangSwitcher)}
		>
			{short ? t('Short Lang') : t('Lang')}
		</Button>
	);
});

LangSwitcher.displayName = 'LangSwitcher';
