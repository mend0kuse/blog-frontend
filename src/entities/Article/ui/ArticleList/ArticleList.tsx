import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { type Article, ArticleView } from '../../model/types/ArticleTypes';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

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

	const isList = view === ArticleView.LIST;

	return (
		<Flex
			className={className}
			direction={isList ? 'column' : 'row'}
			wrap={isList ? undefined : 'wrap'}
			gap='32'
			max
		>
			{!isLoading && articles?.length === 0 && <Text text={t('Articles not found')} />}
			{articles?.map((article) => (
				<ArticleListItem target={target} article={article} view={view} key={article.id} />
			))}
			{isLoading && getSkeletons(view)}
		</Flex>
	);
});

ArticleList.displayName = 'ArticleList';
