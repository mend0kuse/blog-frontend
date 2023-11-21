import { type FC, type ReactNode } from 'react';

import cn from '@/shared/lib/classNames/cn';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';
import { useModal } from './useModal';

interface ModalProps {
	children: ReactNode;
	open: boolean;
	className?: string;
	contentClassName?: string;
	onClose: () => void;
	lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
	const { children, className, contentClassName, onClose, open, lazy } = props;

	const { isClosing, closeHandler, isMounted } = useModal({
		animationDelay: 300,
		close: onClose,
		isOpen: open,
	});

	if (lazy && !isMounted) {
		return null;
	}

	const mods = {
		[styles.open]: open,
		[styles.isClosing]: isClosing,
	};

	return (
		<Portal>
			<div className={cn(styles.Modal, mods, className)}>
				<Overlay onClick={closeHandler} />
				<div className={cn(styles.content, contentClassName)}>{children}</div>
			</div>
		</Portal>
	);
};
