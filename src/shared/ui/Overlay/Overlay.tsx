import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import styles from './Overlay.module.scss';

interface OverlayProps {
	className?: string;
	onClick: () => void;
}

export const Overlay: FC<OverlayProps> = memo((props) => {
	const { className, onClick } = props;

	return <div onClick={onClick} className={cn(styles.overlay, {}, className)} />;
});

Overlay.displayName = 'Overlay';
