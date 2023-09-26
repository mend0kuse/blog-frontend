import { memo } from 'react';

import { Articles, useGetArticles } from '@/widgets/Articles';
import { Page } from '@/widgets/Page';

const ArticlesPage = () => {
	const { nextPageFetch } = useGetArticles();

	return (
		<Page data-testId='ArticlesPage' onScrollEnd={nextPageFetch}>
			<Articles />
		</Page>
	);
};

export default memo(ArticlesPage);
