import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleType } from '@/entities/Article';
import cn from '@/shared/lib/classNames/cn';
import { setQueryParamInUrl } from '@/shared/lib/url/setQueryParamInUrl';
import { Card, CardTheme } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

import { getChosenCategory } from '../../model/articleSelectors';
import { useArticleActions } from '../../model/articlesSlice';
import type { ArticleCategory } from '../../model/articlesTypes';
import styles from './ArticleCategories.module.scss';

interface ArticleCategoriesProps {
	className?: string;
}

export const ArticleCategories = memo((props: ArticleCategoriesProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const { setChosenCategory } = useArticleActions();

	const chosenCategory = useSelector(getChosenCategory);

	const onClickHandler = useCallback(
		(newCategory: ArticleCategory) => {
			return () => {
				setChosenCategory(newCategory);
				setQueryParamInUrl({ category: newCategory });
			};
		},
		[setChosenCategory],
	);

	const categories = useMemo<ArticleCategory[]>(() => {
		const result: ArticleCategory[] = ['all'];
		return result.concat(Object.values(ArticleType));
	}, []);

	return (
		<HStack gap='16' className={cn(styles.articleCategories, {}, className)}>
			{categories.map((category) => (
				<Card
					className={styles.category}
					onClick={onClickHandler(category)}
					theme={chosenCategory === category ? CardTheme.PRIMARY : CardTheme.OUTLINED}
					key={category}
				>
					{t(category)}
				</Card>
			))}
		</HStack>
	);
});

ArticleCategories.displayName = 'ArticleCategories';
