import cn from 'shared/lib/classNames/cn';

import { type FC, type ReactNode, memo } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
	className?: string;
	children: ReactNode;
	open?: boolean;
	onClose: () => void;
}

export const Drawer: FC<DrawerProps> = memo((props) => {
	const { className, children, onClose, open } = props;

	return (
		<Portal>
			<div className={cn(styles.drawer, { [styles.open]: open }, className)}>
				<Overlay onClick={onClose} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	);
});

Drawer.displayName = 'Drawer';
