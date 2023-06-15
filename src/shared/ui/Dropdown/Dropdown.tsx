import { type FC, Fragment, type ReactNode } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { type Placement, autoUpdate, flip, offset, useFloating } from '@floating-ui/react';
import { Menu as HeadlessMenu } from '@headlessui/react';

import { AppLink } from '../AppLink/AppLink';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
	onClick?: () => void;
	href?: string;
	text: string;
}

interface DropdownProps {
	className?: string;
	trigger: ReactNode;
	placement?: Placement;
	items: DropdownItem[];
}

export const Dropdown: FC<DropdownProps> = (props) => {
	const { trigger, className, placement, items } = props;

	const { refs, floatingStyles } = useFloating({
		placement: placement ?? 'bottom-end',
		whileElementsMounted: autoUpdate,
		middleware: [offset(1), flip({ padding: 10 })],
	});

	return (
		<HeadlessMenu as={'div'} className={cn(styles.dropdown, {}, className)}>
			<HeadlessMenu.Button ref={refs.setReference} className={styles.btn}>
				{trigger}
			</HeadlessMenu.Button>
			<HeadlessMenu.Items as='div' ref={refs.setFloating} className={styles.menu} style={{ ...floatingStyles }}>
				{items.map((item) => (
					<HeadlessMenu.Item as={Fragment} key={item.text}>
						{({ active }) => {
							if (item.href) {
								return (
									<AppLink className={cn(styles.item, { [styles.active]: active })} to={item.href}>
										{item.text}
									</AppLink>
								);
							}

							return (
								<button
									className={cn(styles.item, { [styles.active]: active }, styles.btn)}
									onClick={item.onClick}
								>
									{item.text}
								</button>
							);
						}}
					</HeadlessMenu.Item>
				))}
			</HeadlessMenu.Items>
		</HeadlessMenu>
	);
};
