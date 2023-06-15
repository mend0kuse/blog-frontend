import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from '@/shared/hooks/useInititalEffect';
import cn from '@/shared/lib/classNames/cn';
import { setQueryParamInUrl } from '@/shared/lib/url/setQueryParamInUrl';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';

import { getArticlesSearchInit, getArticlesSearchQ } from '../model/selectors/articlesSearchSelectors';
import { articlesSearchActions, articlesSearchReducer } from '../model/slices/articleSearchSlice';
import styles from './ArticlesSearch.module.scss';

interface ArticlesSearchProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesSearch: articlesSearchReducer,
};

export const ArticlesSearch: FC<ArticlesSearchProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation();

	useDinamycModuleLoader(reducers, false);

	const dispatch = useAppDispatch();

	const q = useSelector(getArticlesSearchQ);
	const inited = useSelector(getArticlesSearchInit);

	useInititalEffect(() => {
		if (!inited) {
			dispatch(articlesSearchActions.init());
		}
	});

	const onChangeSearch = useCallback(
		(q: string) => {
			dispatch(articlesSearchActions.setSearch(q));
			setQueryParamInUrl({ search: q });
		},
		[dispatch],
	);

	return (
		<Card className={cn(styles.articlesSearch, {}, className)}>
			<Input withoutUpper onChange={onChangeSearch} value={q} placeholder={t('Search')} />
		</Card>
	);
});

ArticlesSearch.displayName = 'ArticlesSearch';
