import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { Article } from '@/entities/Article';
import { ArticleList } from '@/entities/Article';
import cn from '@/shared/lib/classNames/cn';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import styles from './ArticleDetailsRecomendations.module.scss';

interface ArticleDetailsRecomendationsProps {
	className?: string;
	articles: Article[];
	error?: string;
	isLoading: boolean;
}

export const ArticleDetailsRecomendations = memo((props: ArticleDetailsRecomendationsProps) => {
	const { className, articles, isLoading, error } = props;
	const { t } = useTranslation('article-details');

	if (error) {
		return <Text title={t('Error happend')} />;
	}

	return (
		<VStack gap='8' className={cn(styles.ArticleDetailsRecomendations, {}, className)}>
			<Text className={styles.recsText} title={t('Recommendations')} />
			<ArticleList target={'_blank'} className={styles.recs} articles={articles} isLoading={isLoading} />
		</VStack>
	);
});

ArticleDetailsRecomendations.displayName = 'ArticleDetailsRecomendations';
