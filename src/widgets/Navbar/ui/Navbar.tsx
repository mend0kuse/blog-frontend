import cn from 'shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

interface NavbarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = (props) => {
	const { t } = useTranslation();
	const { className } = props;
	return (
		<header className={cn(styles.Navbar, {}, className)}>
			<nav className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					{t('About us')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>
					{t('Main')}
				</AppLink>
			</nav>
		</header>
	);
};
