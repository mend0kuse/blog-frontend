import cn from 'shared/lib/classNames/cn';

import { type FC, type ReactNode, useCallback, useEffect } from 'react';

import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import { Overlay } from '../Overlay/Overlay';
import styles from './Drawer.module.scss';

interface DrawerProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	lazy?: boolean;
	onClose: () => void;
}

const height = window.innerHeight - 100;

export const Drawer: FC<DrawerProps> = (props) => {
	const { className, children, onClose, isOpen } = props;

	const [{ y }, api] = useSpring(() => ({ y: height }));

	const open = useCallback(
		({ canceled }: { canceled?: boolean }) => {
			api.start({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff });
		},
		[api],
	);

	const close = (velocity = 0) => {
		api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });
		onClose();
	};

	useEffect(() => {
		if (isOpen) {
			open({});
		}
	}, [isOpen, open]);

	const bind = useDrag(
		({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
			if (oy < -70) cancel();
			if (last) {
				oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled });
			} else api.start({ y: oy, immediate: true });
		},
		{ from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
	);

	const display = y.to((py) => (py < height ? 'block' : 'none'));

	return (
		<div className={cn(styles.drawer, { [styles.isOpen]: isOpen }, className)}>
			<Overlay onClick={() => {}} />
			<a.div
				className={cn(styles.sheet)}
				{...bind()}
				style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
			>
				{children}
			</a.div>
		</div>
	);
};
