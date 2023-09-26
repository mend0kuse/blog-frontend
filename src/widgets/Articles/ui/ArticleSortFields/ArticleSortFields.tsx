import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cn from '@/shared/lib/classNames/cn';
import { setQueryParamInUrl } from '@/shared/lib/url/setQueryParamInUrl';
import { Select, type SelectOption } from '@/shared/ui/Select';

import { getArticleSort, getArticleSortOrder } from '../../model/articleSelectors';
import { useArticleActions } from '../../model/articlesSlice';
import type { ArticleSortOrder } from '../../model/articlesTypes';
import { ArticleSortKey } from '../../model/articlesTypes';
import styles from './ArticleSortFields.module.scss';

interface ArticleSortFieldsProps {
	className?: string;
}

export const ArticleSortFields = memo((props: ArticleSortFieldsProps) => {
	const { className } = props;
	const { t } = useTranslation('article-details');

	const sort = useSelector(getArticleSort);
	const order = useSelector(getArticleSortOrder);

	const { setOrder, setSort } = useArticleActions();

	const onChangeOrder = useCallback(
		(newOrder: ArticleSortOrder) => {
			setOrder(newOrder);
			setQueryParamInUrl({ order: newOrder });
		},
		[setOrder],
	);

	const onChangeSort = useCallback(
		(newSort: ArticleSortKey) => {
			setSort(newSort);
			setQueryParamInUrl({ sort: newSort });
		},
		[setSort],
	);

	const orderOptions = useMemo<Array<SelectOption<ArticleSortOrder>>>(() => {
		return [
			{
				content: t('asc'),
				value: 'asc',
			},
			{
				content: t('desc'),
				value: 'desc',
			},
		];
	}, [t]);

	const sortOptions = useMemo<Array<SelectOption<ArticleSortKey>>>(() => {
		return [
			{
				content: t('createdAt'),
				value: ArticleSortKey.CREATED,
			},
			{
				content: t('by title'),
				value: ArticleSortKey.TITLE,
			},
			{
				content: t('by views'),
				value: ArticleSortKey.VIEWS,
			},
		];
	}, [t]);

	return (
		<div className={cn(styles.articleSortFields, {}, className)}>
			<Select<ArticleSortKey> label={t('sort by')} options={sortOptions} onChange={onChangeSort} value={sort} />
			<Select<ArticleSortOrder> label={t('by')} options={orderOptions} onChange={onChangeOrder} value={order} />
		</div>
	);
});

ArticleSortFields.displayName = 'ArticleSortFields';
