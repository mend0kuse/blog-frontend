import { type Article, ArticleView } from 'enteties/Article/model/types/ArticleTypes';
import cn from 'shared/lib/classNames/cn';
import { Text } from 'shared/ui/Text/Text';

import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	articles?: Article[];
	view?: ArticleView;
	isLoading: boolean;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.TILE ? 9 : 3)
		.fill(0)
		.map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const { className, isLoading, articles, target, view = ArticleView.TILE } = props;

	const { t } = useTranslation();

	return (
		<div className={cn(styles.articleList, {}, className, styles[view])}>
			{!isLoading && articles?.length === 0 && <Text text={t('Articles not found')} />}
			{articles?.map((article) => (
				<ArticleListItem target={target} article={article} view={view} key={article.id} />
			))}
			{isLoading && getSkeletons(view)}
		</div>
	);
});

ArticleList.displayName = 'ArticleList';
