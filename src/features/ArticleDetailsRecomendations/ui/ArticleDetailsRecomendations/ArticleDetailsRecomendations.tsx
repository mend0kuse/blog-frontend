import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import cn from '@/shared/lib/classNames/cn';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { useGetArticleRecsQuery } from '../../api/articleDetailsRecomendationsApi';
import styles from './ArticleDetailsRecomendations.module.scss';

interface ArticleDetailsRecomendationsProps {
	className?: string;
}

export const ArticleDetailsRecomendations = memo((props: ArticleDetailsRecomendationsProps) => {
	const { className } = props;
	const { t } = useTranslation('article-details');

	const { isLoading, data: articlesRecs, error } = useGetArticleRecsQuery({});

	if (error) {
		return <Text title={t('Error happend')} />;
	}

	return (
		<VStack gap='8' className={cn(styles.ArticleDetailsRecomendations, {}, className)}>
			<Text className={styles.recsText} title={t('Recommendations')} />
			<ArticleList target={'_blank'} className={styles.recs} articles={articlesRecs} isLoading={isLoading} />
		</VStack>
	);
});

ArticleDetailsRecomendations.displayName = 'ArticleDetailsRecomendations';
