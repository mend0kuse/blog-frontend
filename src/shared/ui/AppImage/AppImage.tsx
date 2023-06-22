import type { FC, ImgHTMLAttributes, ReactElement } from 'react';
import { memo, useEffect, useState } from 'react';

import cn from '@/shared/lib/classNames/cn';

import styles from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	loader?: ReactElement;
	error?: ReactElement;
}

export const AppImage: FC<AppImageProps> = memo((props) => {
	const { className, loader, error, src = '', alt = '', ...otherProps } = props;

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};
	}, [src]);

	if (isLoading && loader) {
		return loader;
	}

	if (isError && error) {
		return error;
	}

	return <img alt={alt} src={src} className={cn(styles.appImage, {}, className)} {...otherProps} />;
});

AppImage.displayName = 'AppImage';
