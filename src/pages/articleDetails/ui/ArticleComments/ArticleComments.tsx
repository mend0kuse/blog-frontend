import { type FC, memo, useCallback } from 'react';

import { useAddArticleCommentMutation, useGetCommentsByArticleIdQuery } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewComment';
import { getErrorString } from '@/shared/api/getError';

interface ArticleCommentsProps {
	id: string;
}

export const ArticleComments: FC<ArticleCommentsProps> = memo((props) => {
	const { id } = props;

	const { data: comments, isFetching, error: fetchingError } = useGetCommentsByArticleIdQuery(id);

	const [addComment, { isLoading: sendingComment, error: sendingError }] = useAddArticleCommentMutation();

	const sendComment = useCallback(
		(value: string) => {
			addComment({ text: value, id });
		},
		[addComment, id],
	);

	const error = fetchingError ?? sendingError;

	return (
		<>
			<AddNewCommentForm disabled={sendingComment} onSend={sendComment} />
			<CommentList error={getErrorString(error)} isLoading={isFetching || sendingComment} comments={comments} />
		</>
	);
});

ArticleComments.displayName = 'ArticleComments';
