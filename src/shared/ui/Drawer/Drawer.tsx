import { useModal } from 'shared/hooks/useModal';
import cn, { type Mods } from 'shared/lib/classNames/cn';

import { type FC, type ReactNode, memo } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
	className?: string;
	children: ReactNode;
	open: boolean;
	lazy?: boolean;
	onClose: () => void;
}

export const Drawer: FC<DrawerProps> = memo((props) => {
	const { className, children, onClose, open, lazy } = props;

	const { closeHandler, isClosing, isMounted } = useModal({
		animationDelay: 200,
		close: onClose,
		isOpen: open,
	});

	if (lazy && !isMounted) {
		return null;
	}

	const mods: Mods = {
		[styles.isClosing]: isClosing,
		[styles.open]: open,
	};

	return (
		<Portal>
			<div className={cn(styles.drawer, mods, className)}>
				<Overlay onClick={closeHandler} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	);
});

Drawer.displayName = 'Drawer';
