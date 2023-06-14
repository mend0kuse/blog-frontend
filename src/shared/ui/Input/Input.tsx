import cn from '@/shared/lib/classNames/cn';

import { type FC, type InputHTMLAttributes, memo, useState } from 'react';

import styles from './Input.module.scss';

type HtmlInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;

interface InputProps extends HtmlInput {
	value?: string | number;
	placeholder?: string | null;
	onChange?: (value: string) => void;
	withoutUpper?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
	const { value, placeholder, readOnly, withoutUpper, className, type = 'text', onChange, ...otherProps } = props;

	const [upper, setUpper] = useState(Boolean(value));

	const onUpper = () => {
		setUpper(true);
	};

	const onCancelUpper = () => {
		if (!value) {
			setUpper(false);
		}
	};

	return (
		<div className={cn(styles.wrapper, { [styles.withoutUpper]: withoutUpper }, className)}>
			<input
				className={cn(styles.Input, {})}
				type={type}
				value={value}
				readOnly={readOnly}
				placeholder={withoutUpper && placeholder ? placeholder : ''}
				onFocus={onUpper}
				onBlur={onCancelUpper}
				onChange={(e) => {
					onChange?.(e.target.value);
				}}
				{...otherProps}
			/>
			{!withoutUpper && <span className={cn(styles.label, { [styles.upper]: upper })}>{placeholder}</span>}
		</div>
	);
});

Input.displayName = 'Input';
