import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticleDetails, ArticleList } from 'enteties/Article';
import { CommentList } from 'enteties/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import cn from 'shared/lib/classNames/cn';
import { Button } from 'shared/ui/Button/Button';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
	getArticleCommentsError,
	getArticleCommentsisLoading,
	getArticleRecomendationsIsLoading,
} from '../model/selectors/articleDetailsPageSelectors';
import { getArticleComments } from '../model/slice/articleCommentsSlice';
import { articleDetailsPageReducer } from '../model/slice/articlePageReducer';
import { getArticleDetailsRecomendations } from '../model/slice/articleRecomendationsSlice';
import { addArticleComment } from '../services/addArticleComment';
import { fetchCommentsByArticleId } from '../services/fetchArticleComments';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props;

	const { t } = useTranslation('article-details');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	useDinamycModuleLoader(reducers);

	useInititalEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecomendations());
	});

	const comments = useSelector(getArticleComments.selectAll);
	const recomendations = useSelector(getArticleDetailsRecomendations.selectAll);

	const isLoading = useSelector(getArticleCommentsisLoading);
	const error = useSelector(getArticleCommentsError);

	const isLoadingRecs = useSelector(getArticleRecomendationsIsLoading);

	const sendComment = useCallback(
		(value: string) => {
			dispatch(addArticleComment(value));
		},
		[dispatch],
	);

	const backToAllHandler = useCallback(() => {
		navigate(`/articles`);
	}, [navigate]);

	if (!id) {
		return <Text title={t('Article not found')} theme={ThemeText.ERROR} />;
	}

	return (
		<Page>
			<div className={cn(styles.articleDetailsPage, {}, className)}>
				<Button onClick={backToAllHandler}>{t('Back to all')}</Button>
				<ArticleDetails id={id} />
				<Text className={styles.recsText} title={t('Recommendations')} />
				<ArticleList
					target={'_blank'}
					className={styles.recs}
					articles={recomendations}
					isLoading={isLoadingRecs}
				/>
				<AddNewCommentForm onSend={sendComment} />
				<CommentList error={error} isLoading={isLoading} comments={comments} />
			</div>
		</Page>
	);
};

export default memo(ArticleDetailsPage);
