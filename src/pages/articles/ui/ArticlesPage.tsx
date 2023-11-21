import { memo } from 'react';

import { Articles } from '@/widgets/Articles';
import { Page } from '@/widgets/Page';

const ArticlesPage = () => {
	return (
		<Page data-testId='ArticlesPage'>
			<Articles />
		</Page>
	);
};

export default memo(ArticlesPage);
