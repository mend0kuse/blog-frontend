import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getArticlePageRoute, getProfilePageRoute } from '@/shared/config/routes/routes';
import cn from '@/shared/lib/classNames/cn';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { SizeText, Text } from '@/shared/ui/Text';

import { type Article, ArticleView } from '../../model/types/ArticleTypes';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view, target } = props;
	const { t } = useTranslation();

	const types = article.types.map((el) => el.name).join(', ');

	if (view === ArticleView.TILE) {
		return (
			<AppLink data-testid='ArticleListItem' to={getArticlePageRoute(article.id.toString())} target={target}>
				<Card className={cn(styles.articleListItem, {}, className, styles.tile)}>
					<div className={styles.imgBlock}>
						<AppImage
							loader={<Skeleton height={300} width={'100%'} />}
							src={article.preview}
							className={styles.img}
							alt={article.title}
						/>
						<Text text={article.createdAt} className={styles.created} />
					</div>
					<HStack justify='between' className={styles.info}>
						<Text className={styles.types} text={types} />
						<HStack align='center' gap='4'>
							<Text className={styles.viewsCount} text={article.views} />
							<Icon SVG={EyeIcon} />
						</HStack>
					</HStack>
					<Text text={article.title} className={styles.title} />
				</Card>
			</AppLink>
		);
	}

	return (
		<Card data-testid='ArticleListItem' className={cn(styles.articleListItem, {}, className, styles.list)}>
			<HStack justify='between'>
				<AppLink to={getProfilePageRoute(article.User.id)}>
					<HStack gap='16' align='center'>
						<Avatar
							size={50}
							src={article.User.avatar}
							alt={article.User.email}
							className={styles.avatar}
						/>
						<Text text={article.User.profile.username ?? article.User.email} className={styles.username} />
					</HStack>
				</AppLink>
				<Text text={article.createdAt} className={styles.created} />
			</HStack>

			<Text size={SizeText.l} text={article.title} className={styles.title} />
			<Text className={styles.types} text={types} />

			<div className={styles.imgBlock}>
				<AppImage
					loader={<Skeleton height={200} width={200} />}
					src={article.preview}
					className={styles.img}
					alt={article.title}
				/>
			</div>

			{article.textBlocks.length > 0 && (
				<ArticleTextBlock block={article.textBlocks[0]} className={styles.text} />
			)}

			<HStack align='center' justify='between' className={styles.footer}>
				<AppLink target={target} to={getArticlePageRoute(article.id.toString())}>
					<Button theme={ThemeButton.OUTLINE}>{t('Read More')}</Button>
				</AppLink>
				<HStack gap='8' align='center' className={styles.views}>
					<Text className={styles.viewsCount} text={article.views} />
					<Icon SVG={EyeIcon} />
				</HStack>
			</HStack>
		</Card>
	);
});

ArticleListItem.displayName = 'ArticleListItem';
