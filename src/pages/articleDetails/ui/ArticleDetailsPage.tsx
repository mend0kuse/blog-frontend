import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	// eslint-disable-next-line i18next/no-literal-string
	return <div className={cn(styles.articleDetailsPage, {}, className)}>ArticleDetails</div>;
};

export default memo(ArticleDetailsPage);
