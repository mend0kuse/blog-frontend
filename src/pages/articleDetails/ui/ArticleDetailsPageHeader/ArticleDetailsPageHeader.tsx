import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { type ArticleDto, useDeleteArticleMutation } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { AppRoutes } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
	className?: string;
	article: ArticleDto | undefined;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
	const { className, article } = props;

	const { t } = useTranslation('article-details');
	const navigate = useNavigate();

	const auth = useSelector(getUserAuthData);

	const canEdit = auth?.id === article?.User.id;
	const canDelete = canEdit || auth?.role === 'admin';

	const [deleteArticle, { isLoading }] = useDeleteArticleMutation();

	const backToAllHandler = useCallback(() => {
		navigate(AppRoutes.MAIN);
	}, [navigate]);

	const deleteArticleHandler = useCallback(async () => {
		if (!article) {
			return;
		}

		const result = await deleteArticle(article.id);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (result.data) {
			backToAllHandler();
		}
	}, [article, backToAllHandler, deleteArticle]);

	return (
		<HStack justify='between' className={cn('', className)}>
			<Button disabled={isLoading} onClick={backToAllHandler}>
				{t('Back to all')}
			</Button>
			<HStack gap='8'>
				{canDelete && (
					<Button disabled={isLoading} onClick={deleteArticleHandler}>
						{t('Delete article')}
					</Button>
				)}
			</HStack>
		</HStack>
	);
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
