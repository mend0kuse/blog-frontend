import { type FC, type HTMLAttributes } from 'react';

import cn from '@/shared/lib/classNames/cn';

import './Loader.scss';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div className={cn('lds-ellipsis', {}, className)}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
