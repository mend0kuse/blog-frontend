import { useAppDispatch } from '@/app/providers/StoreProvider';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from '@/shared/hooks/useInititalEffect';
import cn from '@/shared/lib/classNames/cn';
import { setQueryParamInUrl } from '@/shared/lib/url/setQueryParamInUrl';
import { Select, type SelectOption } from '@/shared/ui/Select/Select';

import { type FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	getArticleSort,
	getArticleSortInited,
	getArticleSortOrder,
} from '../model/selectors/articleSortFieldsSelectors';
import { articleSortFieldsActions, articleSortFieldsReducer } from '../model/slices/articleSortFieldSlice';
import { ArticleSortKey, type ArticleSortOrder } from '../model/types/articleSortFieldTypes';
import styles from './ArticleSortFields.module.scss';

interface ArticleSortFieldsProps {
	className?: string;
}

const reducers: ReducersList = {
	articleSort: articleSortFieldsReducer,
};

export const ArticleSortFields: FC<ArticleSortFieldsProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation('article-details');

	useDinamycModuleLoader(reducers, false);

	const dispatch = useAppDispatch();

	const sort = useSelector(getArticleSort);
	const order = useSelector(getArticleSortOrder);
	const inited = useSelector(getArticleSortInited);

	useInititalEffect(() => {
		if (!inited) {
			dispatch(articleSortFieldsActions.init());
		}
	});

	const onChangeOrder = useCallback(
		(newOrder: ArticleSortOrder) => {
			dispatch(articleSortFieldsActions.setOrder(newOrder));
			setQueryParamInUrl({ order: newOrder });
		},
		[dispatch],
	);

	const onChangeSort = useCallback(
		(newSort: ArticleSortKey) => {
			dispatch(articleSortFieldsActions.setSort(newSort));
			setQueryParamInUrl({ sort: newSort });
		},
		[dispatch],
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
