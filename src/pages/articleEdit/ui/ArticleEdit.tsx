import { CreateArticle } from 'features/CreateArticle';
import { Page } from 'widgets/Page/Page';

import { type FC } from 'react';

const ArticleEdit: FC = () => {
	return (
		<Page>
			<CreateArticle isEdit />
		</Page>
	);
};

export default ArticleEdit;
