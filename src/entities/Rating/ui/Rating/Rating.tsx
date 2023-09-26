import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import cn from '@/shared/lib/classNames/cn';
import { useToggler } from '@/shared/lib/useToggler';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';
import { mobileBreakpoint } from '@/shared/ui/breakpoints';

import styles from './Rating.module.scss';

interface RatingProps {
	className?: string;
	title?: string | null;
	feedbackTitle?: string | null;
	hasFeedback?: boolean;
	initialRating?: number;
	onCancel?: (stars: number) => void;
	onSubmit?: (stars: number, feedback?: string) => void;
}

export const Rating = memo((props: RatingProps) => {
	const { className, feedbackTitle, initialRating = 0, hasFeedback, onCancel, onSubmit, title } = props;

	const { t } = useTranslation();
	const isMobile = useMediaQuery({ query: mobileBreakpoint });

	const [selectedRating, setSelectedRating] = useState(initialRating);
	const { setFalse: closeFeedback, setTrue: openFeedback, value: feedbackShow } = useToggler();
	const [feedbackText, setFeedbackText] = useState('');

	useEffect(() => {
		setSelectedRating(initialRating);
	}, [initialRating]);

	const onSubmitClick = useCallback(() => {
		closeFeedback();
		onSubmit?.(selectedRating, feedbackText);
	}, [closeFeedback, feedbackText, onSubmit, selectedRating]);

	const onSelect = useCallback(
		(rating: number) => {
			setSelectedRating(rating);
			if (hasFeedback) {
				openFeedback();
			} else {
				onSubmit?.(selectedRating);
			}
		},
		[hasFeedback, onSubmit, openFeedback, selectedRating],
	);

	const onModalClose = useCallback(() => {
		closeFeedback();
		onCancel?.(selectedRating);
	}, [closeFeedback, onCancel, selectedRating]);

	const form = (
		<VStack className={styles.form} gap='16'>
			<Text title={feedbackTitle} />
			<Input value={feedbackText} onChange={setFeedbackText} />
			<HStack gap='8' justify='end'>
				<Button data-testid='Rating.Send' onClick={onSubmitClick}>
					{t('Submit')}
				</Button>
				<Button data-testid='Rating.Cancel' theme={ThemeButton.OUTLINE_ERR} onClick={onModalClose}>
					{t('Cancel')}
				</Button>
			</HStack>
		</VStack>
	);

	return (
		<>
			<Card className={cn(styles.Rating, {}, className)}>
				<VStack align='center' gap='32'>
					<Text title={title} />
					<StarRating selectedRating={selectedRating} onClick={onSelect} starSize={50} />
				</VStack>
			</Card>
			{isMobile ? (
				<Drawer isOpen={feedbackShow} onClose={onModalClose}>
					{form}
				</Drawer>
			) : (
				<Modal open={feedbackShow} onClose={onModalClose}>
					{form}
				</Modal>
			)}
		</>
	);
});

Rating.displayName = 'Rating';
