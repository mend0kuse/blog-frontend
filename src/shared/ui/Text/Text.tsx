import { type FC, memo } from 'react';

import cn from '@/shared/lib/classNames/cn';

import styles from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum SizeText {
	m = 'size_m',
	l = 'size_l',
}

export enum TextAlign {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}

interface TextProps {
	className?: string;
	text?: string | null | number;
	theme?: ThemeText;
	align?: TextAlign;
	title?: string | null;
	size?: SizeText;
	'data-testid'?: string;
}

export const Text: FC<TextProps> = memo((props) => {
	const {
		className,
		text,
		'data-testid': dataTestId,
		size = SizeText.m,
		title,
		theme = ThemeText.PRIMARY,
		align = TextAlign.LEFT,
	} = props;

	return (
		<div
			data-testid={dataTestId}
			className={cn(styles.Text, {}, styles[theme], className, styles[align], styles[size])}
		>
			{title && <h2 className={styles.title}>{title}</h2>}
			{text && <p className={styles.paragraph}>{text}</p>}
		</div>
	);
});

Text.displayName = 'Text';
