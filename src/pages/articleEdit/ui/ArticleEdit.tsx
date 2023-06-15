import { type FC } from 'react';

import { CreateArticle } from '@/features/CreateArticle';
import { Page } from '@/widgets/Page/Page';

const ArticleEdit: FC = () => {
	return (
		<Page>
			<CreateArticle isEdit />
		</Page>
	);
};

export default ArticleEdit;
