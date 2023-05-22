import cn, { type Mods } from 'shared/lib/classNames/cn';

import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';

import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';
export type FlexWrap = 'wrap';

const justifyClasses: Record<FlexJustify, string> = {
	start: styles.justifyStart,
	center: styles.justifyCenter,
	end: styles.justifyEnd,
	between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
	start: styles.alignStart,
	center: styles.alignCenter,
	end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
	row: styles.directionRow,
	column: styles.directionColumn,
};

const wrapClasses: Record<FlexWrap, string> = {
	wrap: styles.wrap,
};

const gapClasses: Record<FlexGap, string> = {
	4: styles.gap4,
	8: styles.gap8,
	16: styles.gap16,
	32: styles.gap32,
};

export interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction: FlexDirection;
	gap?: FlexGap;
	max?: boolean;
	wrap?: FlexWrap;
}

export const Flex: FC<FlexProps> = (props) => {
	const { max, className, children, wrap, justify = 'start', align = 'start', direction, gap, ...otherProps } = props;

	const classes = [
		justifyClasses[justify],
		directionClasses[direction],
		alignClasses[align],
		//
		gap && gapClasses[gap],
		wrap && wrapClasses[wrap],
	];

	const mods: Mods = {
		[styles.max]: max,
	};

	return (
		<div className={cn(styles.flex, mods, className, ...classes)} {...otherProps}>
			{children}
		</div>
	);
};
