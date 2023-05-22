import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticleType } from 'enteties/Article';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import cn from 'shared/lib/classNames/cn';
import { setQueryParamInUrl } from 'shared/lib/url/setQueryParamInUrl';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { HStack } from 'shared/ui/Stack';

import { type FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getCategoriesInited, getChosenCategory } from '../model/selectors/articleCategoriesSelectors';
import { articleCategoriesActions, articleCategoriesReducer } from '../model/slices/articleCategoriesSlice';
import { type ArticleCategory } from '../model/types/articleCategories';
import styles from './ArticleCategories.module.scss';

interface ArticleCategoriesProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesCategories: articleCategoriesReducer,
};

export const ArticleCategories: FC<ArticleCategoriesProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers, false);

	const chosenCategory = useSelector(getChosenCategory);
	const inited = useSelector(getCategoriesInited);

	useInititalEffect(() => {
		if (!inited) {
			dispatch(articleCategoriesActions.init());
		}
	});

	const onClickHandler = useCallback(
		(newCategory: ArticleCategory) => {
			return () => {
				dispatch(articleCategoriesActions.setChosenCategory(newCategory));
				setQueryParamInUrl({ category: newCategory });
			};
		},
		[dispatch],
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
