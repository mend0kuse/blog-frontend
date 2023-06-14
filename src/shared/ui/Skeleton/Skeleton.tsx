import cn from '@/shared/lib/classNames/cn';

import { type CSSProperties, type FC } from 'react';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	borderRadius?: number | string;
	width?: number | string;
	height?: number | string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
	const { className, borderRadius, height, width } = props;

	const cls: CSSProperties = {
		borderRadius,
		height,
		width,
	};

	return <div style={cls} className={cn(styles.skeleton, {}, className)}></div>;
};
