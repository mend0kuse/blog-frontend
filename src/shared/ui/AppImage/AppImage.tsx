import type { FC, ImgHTMLAttributes, ReactElement } from 'react';
import { memo, useEffect, useState } from 'react';

import cn from '@/shared/lib/classNames/cn';
import type { TestProps } from '@/shared/lib/tests/testProps';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>, TestProps {
	className?: string;
	loader?: ReactElement;
	error?: ReactElement;
}

export const AppImage: FC<AppImageProps> = memo((props) => {
	const { className, loader, error, src = '', alt = '', 'data-testId': dataTestId, ...otherProps } = props;

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsError(false);
		setIsLoading(true);

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

	return <img data-testid={dataTestId} alt={alt} src={src} className={cn('', className)} {...otherProps} />;
});

AppImage.displayName = 'AppImage';
