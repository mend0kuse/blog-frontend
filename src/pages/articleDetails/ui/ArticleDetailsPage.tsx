import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticleDetails } from 'enteties/Article';
import { CommentList } from 'enteties/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import { useInititalEffect } from 'shared/hooks/useInititalEffect';
import cn from 'shared/lib/classNames/cn';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleCommentsError, getArticleCommentsisLoading } from '../model/selectors/articleCommentsSelectors';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { addArticleComment } from '../services/addArticleComment';
import { fetchCommentsByArticleId } from '../services/fetchArticleComments';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { id } = useParams<{ id: string }>();

	useDinamycModuleLoader(reducers);

	useInititalEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	const comments = useSelector(getArticleComments.selectAll);

	const isLoading = useSelector(getArticleCommentsisLoading);
	const error = useSelector(getArticleCommentsError);

	const sendComment = useCallback(
		(value: string) => {
			dispatch(addArticleComment(value));
		},
		[dispatch],
	);

	if (!id) {
		return <Text title={t('Article not found')} theme={ThemeText.ERROR} />;
	}

	return (
		<div className={cn(styles.articleDetailsPage, {}, className)}>
			<ArticleDetails id={id} />
			<AddNewCommentForm onSend={sendComment} />
			<CommentList error={error} isLoading={isLoading} comments={comments} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
