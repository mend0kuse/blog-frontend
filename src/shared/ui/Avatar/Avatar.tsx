import { type CSSProperties, type FC, type ImgHTMLAttributes, useMemo } from 'react';

import cn from '@/shared/lib/classNames/cn';
import type { TestProps } from '@/shared/lib/tests/testProps';

import UserIcon from '../../assets/icons/user.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import styles from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>, TestProps {
	size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
	const { className, size = 50, 'data-testId': dataTestId, src, ...otherProps } = props;

	const style: CSSProperties = useMemo(() => {
		return {
			width: size,
			height: size,
		};
	}, [size]);

	return (
		<AppImage
			data-testId={dataTestId}
			src={src}
			loader={<Skeleton height={size} width={size} borderRadius={'50%'} />}
			error={<Icon inverted SVG={UserIcon} className={cn(styles.Avatar, className)} />}
			className={cn(styles.Avatar, className)}
			style={style}
			{...otherProps}
		/>
	);
};
