import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface CreateArticleProps {
	className?: string;
	isEdit?: boolean;
}

export const CreateArticle: FC<CreateArticleProps> = memo((props) => {
	const { isEdit } = props;
	const { t } = useTranslation();

	return (
		<div>
			<p>{isEdit ? t('Edit article') : t('Create article')}</p>
		</div>
	);
});

CreateArticle.displayName = 'CreateArticle';
