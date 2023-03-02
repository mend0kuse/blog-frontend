import cn from 'shared/lib/classNames/cn';

import {
	type FC,
	type MouseEvent,
	type ReactNode,
	useCallback,
	useEffect,
} from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
	children: ReactNode;
	open: boolean;
	className?: string;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
	const { children, className, onClose, open } = props;

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
		window.addEventListener('keydown', onEscDown);
		return () => {
			window.removeEventListener('keydown', onEscDown);
		};
	}, [onEscDown]);

	return (
		<div className={cn(styles.Modal, { [styles.open]: open }, className)}>
			<div className={styles.overlay} onClick={onClose}>
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
