import { type FC, type HTMLAttributes } from 'react';

import cn from '@/shared/lib/classNames/cn';
import { Loader } from '@/shared/ui/Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
	return (
		<div className={cn(styles.PageLoader)}>
			<Loader />
		</div>
	);
};
