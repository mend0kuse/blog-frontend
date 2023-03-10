import cn from 'shared/lib/classNames/cn';
import { Button } from 'shared/ui/Button/Button';

import { type FC, memo } from 'react';

import styles from './SidebarHamburger.module.scss';

interface SidebarHamburgerProps {
	onToggle: () => void;
	collapsed: boolean;
}

export const SidebarHamburger: FC<SidebarHamburgerProps> = memo((props) => {
	const { onToggle, collapsed } = props;

	return (
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
	);
});

SidebarHamburger.displayName = 'SidebarHamburger';
