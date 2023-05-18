import { type ButtonHTMLAttributes, type FC } from 'react';

import cn from '../../lib/classNames/cn';
import styles from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	PRIMARY = 'primary',
	OUTLINE = 'outline',
	OUTLINE_ERR = 'outline_err',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ThemeButton;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, size = 'size_m', theme = ThemeButton.OUTLINE, children, ...otherProps } = props;

	return (
		<button {...otherProps} className={cn(styles.Button, {}, className, styles[theme], styles[size])}>
			{children}
		</button>
	);
};
