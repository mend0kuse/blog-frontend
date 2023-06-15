import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewComment';
import { useInititalEffect } from '@/shared/hooks/useInititalEffect';
import cn from '@/shared/lib/classNames/cn';

import {
	getArticleCommentsError,
	getArticleCommentsisLoading,
} from '../../model/selectors/articleDetailsPageSelectors';
import { getArticleComments } from '../../model/slice/articleCommentsSlice';
import { addArticleComment } from '../../services/addArticleComment';
import { fetchCommentsByArticleId } from '../../services/fetchArticleComments';
import styles from './ArticleComments.module.scss';

interface ArticleCommentsProps {
	className?: string;
	id: string;
}

export const ArticleComments: FC<ArticleCommentsProps> = memo((props) => {
	const { className, id } = props;

	const dispatch = useAppDispatch();

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

	return (
		<div className={cn(styles.articleComments, {}, className)}>
			<AddNewCommentForm onSend={sendComment} />
			<CommentList error={error} isLoading={isLoading} comments={comments} />
		</div>
	);
});

ArticleComments.displayName = 'ArticleComments';
