import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import cn from '@/shared/lib/classNames/cn';

import { useGetArticleRatingQuery, useSubmitArticleRatingMutation } from '../../api/articleRatingApi';
import styles from './ArticleRating.module.scss';

interface ArticleRatingProps {
	className?: string;
	id: string;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
	const { className, id } = props;
	const { t } = useTranslation('article-details');

	const authData = useSelector(getUserAuthData);

	const { data: userRating } = useGetArticleRatingQuery({ articleId: id, userId: authData?.id });
	const [submitRating] = useSubmitArticleRatingMutation();

	const rateArticle = useCallback(
		(starsCount: number, feedback?: string) => {
			try {
				submitRating({
					userId: authData?.id ?? '',
					articleId: id,
					rate: starsCount,
					feedback,
				});
			} catch (e) {
				console.log(e);
			}
		},
		[authData?.id, id, submitRating],
	);

	const onCancelHandler = useCallback(
		(stars: number) => {
			rateArticle(stars);
		},
		[rateArticle],
	);

	const onSubmitHandler = useCallback(
		(stars: number, feedback?: string) => {
			rateArticle(stars, feedback);
		},
		[rateArticle],
	);

	return (
		<Rating
			initialRating={userRating?.[0]?.rate}
			className={cn(styles.ArticleRating, {}, className)}
			onCancel={onCancelHandler}
			onSubmit={onSubmitHandler}
			title={userRating?.[0] ? t('Thank you for review') : t('Rate article')}
			feedbackTitle={t('Please write a review')}
			hasFeedback
		/>
	);
});

ArticleRating.displayName = 'ArticleRating';
