import cn from 'shared/lib/classNames/cn';

import { type FC, type ReactNode, memo } from 'react';

import { type Placement, autoUpdate, flip, offset, useFloating } from '@floating-ui/react';
import { Popover as HPopover } from '@headlessui/react';

import styles from './Popover.module.scss';

interface PopoverProps {
	className?: string;
	trigger: ReactNode;
	placement?: Placement;
	content: ReactNode;
}

export const Popover: FC<PopoverProps> = memo((props) => {
	const { className, trigger, placement, content } = props;

	const { refs, floatingStyles } = useFloating({
		placement: placement ?? 'bottom-end',
		whileElementsMounted: autoUpdate,
		middleware: [offset(1), flip({ padding: 10 })],
	});

	return (
		<HPopover className={cn(styles.popover, {}, className)}>
			<HPopover.Button ref={refs.setReference} className={styles.btn}>
				{trigger}
			</HPopover.Button>
			<HPopover.Panel ref={refs.setFloating} className={styles.content} style={{ ...floatingStyles }}>
				{content}
			</HPopover.Panel>
		</HPopover>
	);
});

Popover.displayName = 'Popover';
