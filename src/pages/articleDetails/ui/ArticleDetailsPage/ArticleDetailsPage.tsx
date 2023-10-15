import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails, useGetArticleByIdQuery } from '@/entities/Article';
import { ArticleDetailsRecomendations } from '@/features/ArticleDetailsRecomendations';
import { ArticleStats } from '@/features/ArticleStats';
import { getErrorString } from '@/shared/api/getError';
import { Text, ThemeText } from '@/shared/ui/Text';
import { useGetArticleRecsQuery } from '@/widgets/Articles';
import { Page } from '@/widgets/Page';

import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const ArticleDetailsPage = () => {
	const { t } = useTranslation('article-details');

	const { id } = useParams<{ id: string }>();

	const { data: article, isFetching: articleLoading, error: articleError } = useGetArticleByIdQuery(id ?? '');
	const { data: recs, isLoading: recsIsLoading, error: recsError } = useGetArticleRecsQuery();

	if (!id) {
		return <Text title={t('Article not found')} theme={ThemeText.ERROR} />;
	}

	return (
		<Page>
			<ArticleDetailsPageHeader article={article} />
			<ArticleDetails article={article} isLoading={articleLoading} error={getErrorString(articleError)} />
			{article && <ArticleStats isLoading={articleLoading} article={article} />}
			<ArticleDetailsRecomendations
				articles={recs?.articles ?? []}
				isLoading={recsIsLoading || articleLoading}
				error={getErrorString(recsError)}
			/>
			<ArticleComments id={id} />
		</Page>
	);
};

export default memo(ArticleDetailsPage);
