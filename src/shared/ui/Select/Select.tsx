import cn from 'shared/lib/classNames/cn';

import { type ChangeEvent, type FC, type SelectHTMLAttributes } from 'react';
import { useMemo } from 'react';

import styles from './Select.module.scss';

export type SelectHtmlProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps extends SelectHtmlProps {
	value?: string;
	onChange?: (val: string) => void;
	options?: SelectOption[];
	label?: string | null;
}

export const Select: FC<SelectProps> = (props) => {
	const { className, label, value, onChange, options, ...otherProps } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
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
