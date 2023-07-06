import type { FC } from 'react';
import { memo, useCallback, useEffect, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import cn from '@/shared/lib/classNames/cn';

import { Icon } from '../Icon/Icon';
import styles from './StarRating.module.scss';

interface StarRatingProps {
	className?: string;
	starSize?: number;
	selectedRating?: number;
	onClick?: (number: number) => void;
}

const marks = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props) => {
	const { className, selectedRating = 0, onClick, starSize = 20 } = props;

	const [currentStar, setCurrentStar] = useState(selectedRating);

	useEffect(() => {
		setCurrentStar(selectedRating);
	}, [selectedRating]);

	const onHover = useCallback(
		(order: number) => {
			return () => {
				if (!selectedRating) {
					setCurrentStar(order);
				}
			};
		},
		[selectedRating],
	);

	const onLeave = useCallback(() => {
		if (!selectedRating) {
			setCurrentStar(0);
		}
	}, [selectedRating]);

	const onStarClick = useCallback(
		(star: number) => {
			return () => {
				if (!selectedRating) {
					onClick?.(star);
				}
			};
		},
		[onClick, selectedRating],
	);

	return (
		<div className={cn(styles.starRating, {}, className)}>
			{marks.map((number) => (
				<Icon
					data-testid={`StarRating.${number}`}
					data-selected={currentStar >= number}
					onClick={onStarClick(number)}
					className={cn(styles.star, { [styles.disabled]: Boolean(selectedRating) })}
					onMouseEnter={onHover(number)}
					onMouseLeave={onLeave}
					manualFill={currentStar < number}
					key={number}
					SVG={StarIcon}
					height={starSize}
					width={starSize}
				/>
			))}
		</div>
	);
});

StarRating.displayName = 'StarRating';
