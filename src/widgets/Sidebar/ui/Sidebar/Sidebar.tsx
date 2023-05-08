import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cn from 'shared/lib/classNames/cn';

import { type FC, type HTMLAttributes, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/getSidebarItems';
import { SidebarHamburger } from '../SidebarHamburger/SidebarHamburger';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [collapsed, setCollapsed] = useState(false);

	const items = useSelector(getSidebarItems);

	const onToggle = useCallback(() => {
		setCollapsed((prev) => !prev);
	}, []);

	return (
		<aside data-testid='Sidebar' className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, className)}>
			{/* hamburger */}
			<SidebarHamburger onToggle={onToggle} collapsed={collapsed} />

			{/* Links */}
			<nav className={styles.links}>
				{items.map((item) => (
					<SidebarItem key={item.path} collapsed={collapsed} item={item} />
				))}
			</nav>

			{/* switchers */}
			<div className={styles.swithers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</aside>
	);
});

Sidebar.displayName = 'Sidebar';
