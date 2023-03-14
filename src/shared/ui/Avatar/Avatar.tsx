import cn from 'shared/lib/classNames/cn';

import { type CSSProperties, type FC, type ImgHTMLAttributes, useMemo } from 'react';

import styles from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
	const { className, size = 50, ...otherProps } = props;

	const style: CSSProperties = useMemo(() => {
		return {
			width: size,
			height: size,
		};
	}, [size]);

	return <img className={cn(styles.Avatar, {}, className)} style={style} {...otherProps} />;
};
