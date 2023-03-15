import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
	className?: string;
}

const ArticlesPage: FC<ArticlePageProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	// eslint-disable-next-line i18next/no-literal-string
	return <div className={cn(styles.articlesPage, {}, className)}>Articles</div>;
};

export default memo(ArticlesPage);
