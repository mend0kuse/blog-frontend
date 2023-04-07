import { useAppDispatch } from 'app/providers/StoreProvider';
import {
	getArticleData,
	getArticleError,
	getArticleisLoading,
} from 'enteties/Article/model/selectors/articleSelectors';
import { articleReducer } from 'enteties/Article/model/slices/articleSlice';
import { fetchArticleDetails } from 'enteties/Article/services/fetchArticleDetails';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { type ReducersList, useDinamycModuleLoader } from 'shared/hooks/useDinamycModuleLoader';
import cn from 'shared/lib/classNames/cn';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { SizeText, Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AricleBlockType, type ArticleBlock } from '../../model/types/ArticleTypes';
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

const renderBlock = (block: ArticleBlock) => {
	switch (block.type) {
		case AricleBlockType.CODE:
			return <ArticleCodeBlock key={block.id} block={block} />;

		case AricleBlockType.IMAGE:
			return <ArticleImageBlock key={block.id} block={block} />;

		case AricleBlockType.TEXT:
			return <ArticleTextBlock key={block.id} block={block} />;

		default:
			return null;
	}
};

export const ArticleDetails: FC<ArticleProps> = memo((props) => {
	const { className, id } = props;

	const { t } = useTranslation('article-details');

	const dispatch = useAppDispatch();

	useDinamycModuleLoader(reducers);

	const data = useSelector(getArticleData);
	const error = useSelector(getArticleError);
	const isLoading = useSelector(getArticleisLoading);

	useEffect(() => {
		if (_PROJECT_ !== 'storybook') {
			dispatch(fetchArticleDetails(id));
		}
	}, [dispatch, id]);

	if (error) return <Text theme={ThemeText.ERROR} text={t(error)} />;

	if (isLoading) return <ArticleSkeleton />;

	return (
		<div className={cn(styles.article, {}, className)}>
			<Avatar size={200} className={styles.avatar} src={data?.img} />
			<Text title={data?.title} size={SizeText.l} text={data?.subtitle} />

			{/* views */}
			<div className={styles.views}>
				<Icon SVG={EyeIcon} />
				<Text text={data?.views} />
			</div>

			{/* date */}
			<div className={styles.date}>
				<Icon SVG={CalendarIcon} />
				<Text text={data?.createdAt} />
			</div>

			<div className={styles.blocksInner}>{data?.blocks.map(renderBlock)}</div>

		</div>
	);
});

ArticleDetails.displayName = 'ArticleDetails';
