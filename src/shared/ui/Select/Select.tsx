import cn from '@/shared/lib/classNames/cn';

import { type ChangeEvent, type SelectHTMLAttributes } from 'react';
import { useMemo } from 'react';

import styles from './Select.module.scss';

export type SelectHtmlProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

export interface SelectOption<T> {
	value: T;
	content: string;
}

interface SelectProps<T> extends SelectHtmlProps {
	value?: T;
	onChange: (val: T) => void;
	options: Array<SelectOption<T>>;
	label?: string | null;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, label, value, onChange, options, ...otherProps } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	const optionsList = useMemo(() => {
		return options?.map((opt) => (
			<option className={styles.option} key={opt.value} value={opt.value}>
				{opt.content}
			</option>
		));
	}, [options]);

	return (
		<div className={cn(styles.wrapper, {}, className)}>
			{label && <span className={styles.label}>{label}</span>}
			<select value={value} className={styles.select} onChange={onChangeHandler} {...otherProps}>
				{optionsList}
			</select>
		</div>
	);
};
