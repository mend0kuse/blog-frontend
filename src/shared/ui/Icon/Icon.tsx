import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import styles from './Icon.module.scss';

interface IconProps {
	SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	className?: string;
}

export const Icon: FC<IconProps> = memo((props) => {
	const { SVG, className } = props;
	return <SVG className={cn(styles.Icon, {}, className)} />;
});

Icon.displayName = 'Icon';
