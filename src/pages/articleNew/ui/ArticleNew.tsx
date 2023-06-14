import { CreateArticle } from '@/features/CreateArticle';
import { Page } from '@/widgets/Page/Page';

import { type FC } from 'react';

const ArticleNew: FC = () => {
	return (
		<Page>
			<CreateArticle />
		</Page>
	);
};

export default ArticleNew;
