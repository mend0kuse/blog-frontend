import { type FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SizeText, Text, ThemeText } from '@/shared/ui/Text';

import { useGetArticleData, useGetArticleError, useGetArticleisLoading } from '../../model/selectors/articleSelectors';
import { articleReducer } from '../../model/slices/articleSlice';
import type { Article, ArticleBlockType } from '../../model/types/ArticleTypes';
import { fetchArticleDetails } from '../../services/fetchArticleDetails';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import styles from './Article.module.scss';

interface ArticleProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleReducer,
};

const renderBlocks = (article: Article | undefined, typeBlock: ArticleBlockType) => {
	switch (typeBlock) {
		case 'CODE':
			return (
				<>
					{article?.codeBlocks.map((block) => (
						<ArticleCodeBlock key={block.id} block={block} />
					))}
				</>
			);

		case 'IMAGE':
			return (
				<>
					{article?.imageBlocks.map((block) => (
						<ArticleImageBlock key={block.id} block={block} />
					))}
				</>
			);

		case 'TEXT':
			return (
				<>
					{article?.textBlocks.map((block) => (
						<ArticleTextBlock key={block.id} block={block} />
					))}
				</>
			);

		default:
			return null;
	}
};

export const ArticleDetails: FC<ArticleProps> = memo((props) => {
	const { className, id } = props;

	const { t } = useTranslation('article-details');

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	const data = useGetArticleData();
	const error = useGetArticleError();
	const isLoading = useGetArticleisLoading();

	useEffect(() => {
		if (_PROJECT_ !== 'storybook') {
			dispatch(fetchArticleDetails(id));
		}
	}, [dispatch, id]);

	if (error) return <Text theme={ThemeText.ERROR} text={t(error)} />;

	if (isLoading) return <ArticleSkeleton />;

	return (
		<VStack max className={cn(styles.article, {}, className)}>
			<Avatar size={200} className={styles.avatar} src={data?.preview} />
			<Text title={data?.title} size={SizeText.l} text={data?.subtitle} />

			{/* views */}
			<HStack align='center' gap='8' className={styles.views}>
				<Icon SVG={EyeIcon} />
				<Text text={data?.views} />
			</HStack>

			{/* date */}
			<HStack align='center' gap='8' className={styles.date}>
				<Icon SVG={CalendarIcon} />
				<Text text={data?.createdAt} />
			</HStack>

			<VStack gap='16' max className={styles.blocksInner}>
				{renderBlocks(data, 'CODE')}
				{renderBlocks(data, 'IMAGE')}
				{renderBlocks(data, 'TEXT')}
			</VStack>
		</VStack>
	);
});

ArticleDetails.displayName = 'ArticleDetails';
