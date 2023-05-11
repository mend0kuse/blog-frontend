import { type Article, ArticleView } from 'enteties/Article/model/types/ArticleTypes';
import cn from 'shared/lib/classNames/cn';

import { type FC, memo } from 'react';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	articles?: Article[];
	view?: ArticleView;
	isLoading: boolean;
}

const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.TILE ? 9 : 3)
		.fill(0)
		.map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const { className, isLoading, articles, view = ArticleView.TILE } = props;

	return (
		<div className={cn(styles.articleList, {}, className, styles[view])}>
			{articles?.map((article) => (
				<ArticleListItem article={article} view={view} key={article.id} />
			))}
			{isLoading && (
				<div className={cn(styles.articleList, {}, className, styles[view])}>{getSkeletons(view)}</div>
			)}
		</div>
	);
});

ArticleList.displayName = 'ArticleList';
