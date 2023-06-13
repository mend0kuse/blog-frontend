import cn from 'shared/lib/classNames/cn';

import { type FC, type MutableRefObject, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

const ANIMATION_DELAY = 200;

interface ModalProps {
	children: ReactNode;
	open: boolean;
	className?: string;
	onClose: () => void;
	lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
	const { children, className, onClose, open, lazy } = props;

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	const [mods, setMods] = useState<Record<string, boolean>>({
		[styles.open]: false,
		[styles.isClosing]: false,
	});

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			setMods({ ...mods, [styles.open]: open });
		}, ANIMATION_DELAY);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	const closeHandler = useCallback(() => {
		setMods({ ...mods, [styles.isClosing]: true });
		timerRef.current = setTimeout(() => {
			onClose();
			setMods({ ...mods, [styles.isClosing]: false });
		}, ANIMATION_DELAY);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [onClose]);

	const onEscDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (open) {
			window.addEventListener('keydown', onEscDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onEscDown);
		};
	}, [open, onEscDown]);

	if (lazy && !open) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(styles.Modal, mods, className)}>
				<Overlay onClick={closeHandler} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	);
};
