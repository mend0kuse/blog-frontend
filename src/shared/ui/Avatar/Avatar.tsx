import { type CSSProperties, type FC, type ImgHTMLAttributes, useMemo } from 'react';

import cn from '@/shared/lib/classNames/cn';

import UserIcon from '../../assets/icons/user.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
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

	return (
		<AppImage
			loader={<Skeleton height={size} width={size} borderRadius={'50%'} />}
			error={<Icon inverted SVG={UserIcon} className={cn(styles.Avatar, {}, className)} />}
			className={cn(styles.Avatar, {}, className)}
			style={style}
			{...otherProps}
		/>
	);
};
