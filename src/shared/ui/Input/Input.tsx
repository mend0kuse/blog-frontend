import cn, { type Mods } from 'shared/lib/classNames/cn';

import { type FC, type InputHTMLAttributes, memo, useState } from 'react';

import styles from './Input.module.scss';

type HtmlInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;

interface InputProps extends HtmlInput {
	value?: string | number;
	placeholder?: string | null;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
	const { value, placeholder, readOnly, className, type = 'text', onChange, ...otherProps } = props;

	const [upper, setUpper] = useState(Boolean(value));

	const onUpper = () => {
		setUpper(true);
	};

	const onCancelUpper = () => {
		if (!value) {
			setUpper(false);
		}
	};

	const mods: Mods = {
		[styles.editable]: !readOnly,
	};

	return (
		<div className={styles.wrapper}>
			<input
				className={cn(styles.Input, mods, className)}
				type={type}
				value={value}
				readOnly={readOnly}
				onFocus={onUpper}
				onBlur={onCancelUpper}
				onChange={(e) => {
					onChange?.(e.target.value);
				}}
				{...otherProps}
			/>
			{placeholder && <span className={cn(styles.label, { [styles.upper]: upper })}>{placeholder}</span>}
		</div>
	);
});

Input.displayName = 'Input';
