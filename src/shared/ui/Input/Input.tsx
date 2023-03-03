import cn from 'shared/lib/classNames/cn';

import { type FC, type InputHTMLAttributes, memo } from 'react';

import styles from './Input.module.scss';

type HtmlInput = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HtmlInput {
	value: string;
	onChange: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
	const {
		value,
		placeholder,
		className,
		type = 'text',
		onChange,
		...otherProps
	} = props;

	return (
		<div className={styles.wrapper}>
			<input
				className={cn(styles.Input, {}, className)}
				type={type}
				value={value}
				required
				onChange={(e) => {
					onChange(e.target.value);
				}}
				{...otherProps}
			/>
			<span className={styles.label}>{placeholder}</span>
		</div>
	);
});

Input.displayName = 'Input';
