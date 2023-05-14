import cn from 'shared/lib/classNames/cn';

import { type FC, type HTMLProps, type ReactNode, memo } from 'react';

import styles from './Card.module.scss';

interface CardProps extends HTMLProps<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	theme?: CardTheme;
}

export enum CardTheme {
	PRIMARY = 'primary',
	OUTLINED = 'outlined',
}

export const Card: FC<CardProps> = memo((props) => {
	const { className, children, theme = CardTheme.PRIMARY, ...otherProps } = props;

	return (
		<div className={cn(styles.card, {}, className, styles[theme])} {...otherProps}>
			{children}
		</div>
	);
});

Card.displayName = 'Card';
