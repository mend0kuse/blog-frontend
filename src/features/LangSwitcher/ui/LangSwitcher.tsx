import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss'


export const LangSwitcher: FC = () => {
	const { t, i18n } = useTranslation()

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	return (
		<Button onClick={toggleLang} theme={ThemeButton.CLEAR} className={cn(styles.LangSwitcher, {})}>
			{t('Перевод')}
		</Button>
	);
};