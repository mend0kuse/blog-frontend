import { ArticleDetails } from 'enteties/Article';
import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	const { id } = useParams<{ id: string }>();

	if (!id) {
		return <div className={cn(styles.articleDetailsPage, {}, className)}>{t('Article not found')}</div>;
	}

	return (
		<div className={cn(styles.articleDetailsPage, {}, className)}>
			<ArticleDetails id={id} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
