import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	short: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ short }) => {
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
};
