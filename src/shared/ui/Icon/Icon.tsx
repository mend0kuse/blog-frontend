import cn from '@/shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import styles from './Icon.module.scss';

interface IconProps {
	SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	className?: string;
	inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((props) => {
	const { SVG, className, inverted } = props;
	return <SVG className={cn(!inverted ? styles.Icon : styles.inverted, {}, className)} />;
});

Icon.displayName = 'Icon';
