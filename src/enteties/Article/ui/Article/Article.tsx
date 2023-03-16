import { useAppDispatch } from 'app/providers/StoreProvider';
import {
	getArticleData,
	getArticleError,
	getArticleisLoading,
} from 'enteties/Article/model/selectors/articleSelectors';
import { articleReducer } from 'enteties/Article/model/slices/articleSlice';
import { fetchArticleDetails } from 'enteties/Article/services/fetchArticleDetails';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import cn from 'shared/lib/classNames/cn';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import styles from './Article.module.scss';

interface ArticleProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleReducer,
};

export const ArticleDetails: FC<ArticleProps> = (props) => {
	const { className, id } = props;

	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	const data = useSelector(getArticleData);
	const error = useSelector(getArticleError);
	const isLoading = useSelector(getArticleisLoading);

	useEffect(() => {
		dispatch(fetchArticleDetails(id));
	}, [dispatch, id]);

	if (error) return <Text theme={ThemeText.ERROR} text={t(error)} />;

	if (isLoading) return <ArticleSkeleton />;

	return <div className={cn(styles.article, {}, className)}>{data && <>{data.title}</>}</div>;
};
