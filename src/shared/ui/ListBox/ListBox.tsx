import Arrow from '@/shared/assets/icons/arrow.svg';
import cn from '@/shared/lib/classNames/cn';

import { Fragment, type ReactNode } from 'react';

import { autoUpdate, flip, size, useFloating } from '@floating-ui/react';
import { Listbox as HeadlessListBox } from '@headlessui/react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';
import styles from './ListBox.module.scss';

export interface ListBoxItem<T> {
	content: ReactNode;
	value: T;
	disabled?: boolean;
}

interface ListboxProps<T> {
	className?: string;
	items: Array<ListBoxItem<T>>;
	value?: T;
	onChange: (value: T) => void;
	holder?: string;
	label?: ReactNode;
	disabled?: boolean;
}

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
	const { className, items, onChange, disabled, holder, value, label } = props;

	const { refs, floatingStyles } = useFloating({
		whileElementsMounted: autoUpdate,
		middleware: [
			flip({ padding: 10 }),
			size({
				apply({ rects, elements, availableHeight }) {
					Object.assign(elements.floating.style, {
						maxHeight: `${availableHeight}px`,
						minWidth: `${rects.reference.width}px`,
					});
				},
				padding: 10,
			}),
		],
	});

	return (
		<HStack align='center' gap='4'>
			<span className={styles.label}>{label}</span>
			<HeadlessListBox
				as='div'
				className={cn(styles.listbox, {}, className)}
				disabled={disabled}
				value={value}
				onChange={onChange}
			>
				{({ open }) => (
					<>
						<HeadlessListBox.Button
							ref={refs.setReference}
							as={Button}
							className={cn(styles.btn, { [styles.opened]: open })}
						>
							{value ?? holder} <Icon SVG={Arrow} className={styles.arrow} />
						</HeadlessListBox.Button>
						<HeadlessListBox.Options
							ref={refs.setFloating}
							style={{ ...floatingStyles }}
							className={styles.options}
						>
							{items.map((item) => (
								<HeadlessListBox.Option
									as={Fragment}
									key={item.value}
									value={item.value}
									disabled={item.disabled}
								>
									{({ active, disabled, selected }) => (
										<li
											className={cn(styles.item, {
												[styles.active]: active,
												[styles.disabled]: disabled,
												[styles.selected]: selected,
											})}
										>
											{item.content}
										</li>
									)}
								</HeadlessListBox.Option>
							))}
						</HeadlessListBox.Options>
					</>
				)}
			</HeadlessListBox>
		</HStack>
	);
};
