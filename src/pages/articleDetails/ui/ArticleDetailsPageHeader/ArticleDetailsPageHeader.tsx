import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetArticleData } from '@/entities/Article';
import { AppRoutes, getEditPageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/articleDetailsPageSelectors';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
	const { className } = props;
	const { t } = useTranslation('article-details');
	const navigate = useNavigate();

	const canEdit = useSelector(getCanEditArticle);
	const article = useGetArticleData();

	const backToAllHandler = useCallback(() => {
		navigate(AppRoutes.ARTICLES);
	}, [navigate]);

	const editArticleHandler = useCallback(() => {
		if (article?.id) {
			navigate(getEditPageRoute(article.id.toString()));
		}
	}, [article?.id, navigate]);

	return (
		<HStack justify='between' className={cn(styles.articleDetailsPageHeader, {}, className)}>
			<Button onClick={backToAllHandler}>{t('Back to all')}</Button>
			{canEdit && <Button onClick={editArticleHandler}>{t('Edit article')}</Button>}
		</HStack>
	);
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
