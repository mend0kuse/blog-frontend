import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { RouterPaths } from 'shared/config/routes/routes';
import cn from 'shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';

import { type FC, type HTMLAttributes, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Sidebar.module.scss';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> { }

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<aside
			data-testid='Sidebar'
			className={cn(
				styles.Sidebar,
				{ [styles.collapsed]: collapsed },
				className,
			)}
		>
			{/* hamburger */}
			<Button
				onClick={onToggle}
				data-testid='Sidebar-toggle'
				className={cn(styles.hamburger, {
					[styles['is-active']]: !collapsed,
				})}
			>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</Button>

			{/* Links */}
			<nav className={styles.links}>
				<AppLink
					className={styles.link}
					theme={AppLinkTheme.SECONDARY}
					to={RouterPaths.about}
				>
					<AboutIcon className={styles.icon} />
					<span>{t('About us')}</span>
				</AppLink>
				<AppLink
					className={styles.link}
					theme={AppLinkTheme.SECONDARY}
					to={RouterPaths.main}
				>
					<MainIcon className={styles.icon} />
					<span>{t('Main')}</span>
				</AppLink>
			</nav>

			{/* switchers */}
			<div className={styles.swithers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</aside>
	);
};
