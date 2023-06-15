import { type FC, type ReactNode, useCallback, useEffect } from 'react';

import { AnimationProvider, useAnimationLibs } from '@/shared/animation/AnimationProvider';
import cn from '@/shared/lib/classNames/cn';

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

export const DrawerContent: FC<DrawerProps> = (props) => {
	const { Gesture, Spring } = useAnimationLibs();
	const { className, children, onClose, isOpen } = props;

	const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

	const open = useCallback(
		({ canceled }: { canceled?: boolean }) => {
			api.start({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff });
		},
		[Spring.config.stiff, Spring.config.wobbly, api],
	);

	const close = (velocity = 0) => {
		api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity } });
		onClose();
	};

	useEffect(() => {
		if (isOpen) {
			open({});
		}
	}, [isOpen, open]);

	const bind = Gesture.useDrag(
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
			<Spring.a.div
				className={cn(styles.sheet)}
				{...bind()}
				style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
			>
				{children}
			</Spring.a.div>
		</div>
	);
};

export const DrawerWrapper: FC<DrawerProps> = (props) => {
	const { isLoaded } = useAnimationLibs();

	if (!isLoaded) {
		return null;
	}

	return <DrawerContent {...props} />;
};

export const Drawer: FC<DrawerProps> = (props) => {
	return (
		<AnimationProvider>
			<DrawerWrapper {...props} />
		</AnimationProvider>
	);
};
