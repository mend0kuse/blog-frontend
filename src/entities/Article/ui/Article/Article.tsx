import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import cn from '@/shared/lib/classNames/cn';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SizeText, Text, ThemeText } from '@/shared/ui/Text';

import { renderBlocks } from '../../lib/renderBlocks';
import type { Article } from '../../model/types/ArticleTypes';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import styles from './Article.module.scss';

interface ArticleProps {
	className?: string;
	article: Article | undefined;
	error?: string;
	isLoading: boolean;
}

export const ArticleDetails = memo((props: ArticleProps) => {
	const { className, article, isLoading, error } = props;

	const { t } = useTranslation('article-details');

	if (error) return <Text theme={ThemeText.ERROR} text={t(error)} />;

	if (isLoading) return <ArticleSkeleton />;

	return (
		<VStack max className={cn(styles.article, className)}>
			<Avatar size={200} className={styles.avatar} src={article?.preview} />
			<Text title={article?.title} size={SizeText.l} text={article?.subtitle} />

			{/* views */}
			<HStack align='center' gap='8' className={styles.views}>
				<Icon SVG={EyeIcon} />
				<Text text={article?.views} />
			</HStack>

			{/* date */}
			<HStack align='center' gap='8' className={styles.date}>
				<Icon SVG={CalendarIcon} />
				<Text text={article?.createdAt} />
			</HStack>

			<VStack gap='16' max className={styles.blocksInner}>
				{renderBlocks(article, 'CODE')}
				{renderBlocks(article, 'IMAGE')}
				{renderBlocks(article, 'TEXT')}
			</VStack>
		</VStack>
	);
});

ArticleDetails.displayName = 'ArticleDetails';
