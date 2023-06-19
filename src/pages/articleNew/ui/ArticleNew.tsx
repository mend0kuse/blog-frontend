import { type FC } from 'react';

import { CreateArticle } from '@/features/CreateArticle';
import { Page } from '@/widgets/Page';

const ArticleNew: FC = () => {
	return (
		<Page>
			<CreateArticle />
		</Page>
	);
};

export default ArticleNew;
