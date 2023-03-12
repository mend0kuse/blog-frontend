import cn from 'shared/lib/classNames/cn';

import {
	type FC,
	type MouseEvent,
	type MutableRefObject,
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

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

	const [isMounted, setIsMounted] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	const [mods, setMods] = useState<Record<string, boolean>>({
		[styles.open]: false,
		[styles.isClosing]: false,
	});

	useEffect(() => {
		if (open) setIsMounted(true);

		timerRef.current = setTimeout(() => {
			setMods({ ...mods, [styles.open]: true });
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

	const contentClickHandler = (e: MouseEvent) => {
		e.stopPropagation();
	};

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

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<div className={cn(styles.Modal, mods, className)}>
			<div className={styles.overlay} onClick={closeHandler}>
				<div
					className={styles.content}
					onClick={(e) => {
						contentClickHandler(e);
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};
