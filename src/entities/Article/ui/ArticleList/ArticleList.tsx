import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { type ArticleDto, ArticleView } from '../../model/types/ArticleTypes';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
	className?: string;
	articles?: Array<Partial<ArticleDto>>;
	view?: ArticleView;
	isLoading: boolean;
	target?: HTMLAttributeAnchorTarget;
	isNextPageFetching?: boolean;
}

const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.TILE ? 9 : 3)
		.fill(0)
		.map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
	const { className, isLoading, articles, target, view = ArticleView.TILE, isNextPageFetching } = props;

	const { t } = useTranslation();

	const isList = view === ArticleView.LIST;

	const skeletons = getSkeletons(view);

	if (isLoading) {
		return (
			<Flex
				className={className}
				direction={isList ? 'column' : 'row'}
				wrap={isList ? undefined : 'wrap'}
				gap='32'
				max
				data-testid='ArticleList'
			>
				{skeletons}
			</Flex>
		);
	}

	if (!articles || articles.length < 1) {
		return <Text text={t('Articles not found')} />;
	}

	return (
		<Flex
			className={className}
			direction={isList ? 'column' : 'row'}
			wrap={isList ? undefined : 'wrap'}
			gap='32'
			max
			data-testid='ArticleList'
		>
			{articles?.map((article) => (
				<ArticleListItem target={target} article={article} view={view} key={article.id} />
			))}
		</Flex>
	);
});

ArticleList.displayName = 'ArticleList';
