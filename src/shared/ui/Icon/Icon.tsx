import { memo } from 'react';
import type { FC, SVGProps } from 'react';

import cn from '@/shared/lib/classNames/cn';

import styles from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
	SVG: React.FC<SVGProps<SVGSVGElement>>;
	className?: string;
	inverted?: boolean;
	manualFill?: boolean;
}

export const Icon: FC<IconProps> = memo((props) => {
	const { SVG, className, inverted, manualFill, ...otherProps } = props;
	return (
		<SVG
			className={cn(!inverted ? styles.Icon : styles.inverted, { [styles.withoutFill]: manualFill }, className)}
			{...otherProps}
		/>
	);
});

Icon.displayName = 'Icon';
