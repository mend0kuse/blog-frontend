import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cn from '@/shared/lib/classNames/cn';
import { setQueryParamInUrl } from '@/shared/lib/url/setQueryParamInUrl';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import { getArticlesSearchQ } from '../../model/articleSelectors';
import { useArticleActions } from '../../model/articlesSlice';
import styles from './ArticlesSearch.module.scss';

interface ArticlesSearchProps {
	className?: string;
}

export const ArticlesSearch = memo((props: ArticlesSearchProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const { setSearch } = useArticleActions();

	const q = useSelector(getArticlesSearchQ);

	const onChangeSearch = useCallback(
		(q: string) => {
			setSearch(q);
			setQueryParamInUrl({ search: q });
		},
		[setSearch],
	);

	return (
		<Card className={cn(styles.articlesSearch, {}, className)}>
			<Input withoutUpper onChange={onChangeSearch} value={q} placeholder={t('Search')} />
		</Card>
	);
});

ArticlesSearch.displayName = 'ArticlesSearch';
