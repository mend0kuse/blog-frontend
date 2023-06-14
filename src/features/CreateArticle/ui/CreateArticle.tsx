import cn from '@/shared/lib/classNames/cn';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './CreateArticle.module.scss';

interface CreateArticleProps {
	className?: string;
	isEdit?: boolean;
}

export const CreateArticle: FC<CreateArticleProps> = memo((props) => {
	const { className, isEdit } = props;
	const { t } = useTranslation();

	return (
		<div className={cn(styles.createArticle, {}, className)}>
			<p>{isEdit ? t('Edit article') : t('Create article')}</p>
		</div>
	);
});

CreateArticle.displayName = 'CreateArticle';
