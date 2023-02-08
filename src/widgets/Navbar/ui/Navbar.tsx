import cn from 'shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';

import styles from './Navbar.module.scss';

interface NavbarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props;
	return (
		<header className={cn(styles.Navbar, {}, className)}>
			<nav className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					about
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/'>
					main
				</AppLink>
			</nav>
		</header>
	);
};
