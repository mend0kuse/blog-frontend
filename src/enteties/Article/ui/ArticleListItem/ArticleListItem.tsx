import EyeIcon from 'shared/assets/icons/eye.svg';
import cn from 'shared/lib/classNames/cn';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack } from 'shared/ui/Stack';
import { SizeText, Text } from 'shared/ui/Text/Text';

import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AricleBlockType, type Article, type ArticleBlockText, ArticleView } from '../../model/types/ArticleTypes';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
	const { className, article, view, target } = props;
	const { t } = useTranslation();

	if (view === ArticleView.TILE) {
		return (
			<AppLink to={`/articles/${article.id}`} target={target}>
				<Card className={cn(styles.articleListItem, {}, className, styles.tile)}>
					<div className={styles.imgBlock}>
						<img src={article.img} className={styles.img} alt={article.title} />
						<Text text={article.createdAt} className={styles.created} />
					</div>
					<HStack justify='between' className={styles.info}>
						<Text className={styles.types} text={article.type.join(', ')} />
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

	const textBlock = article.blocks.find((i) => i.type === AricleBlockType.TEXT) as ArticleBlockText;

	return (
		<Card className={cn(styles.articleListItem, {}, className, styles.list)}>
			<HStack justify='between'>
				<AppLink to={`/profile/${article.user.id}`}>
					<HStack gap='16' align='center'>
						<Avatar
							size={50}
							src={article.user.avatar}
							alt={article.user.username}
							className={styles.avatar}
						/>
						<Text text={article.user.username} className={styles.username} />
					</HStack>
				</AppLink>
				<Text text={article.createdAt} className={styles.created} />
			</HStack>

			<Text size={SizeText.l} text={article.title} className={styles.title} />
			<Text className={styles.types} text={article.type.join(', ')} />

			<div className={styles.imgBlock}>
				<img src={article.img} className={styles.img} alt={article.title} />
			</div>

			{textBlock && <ArticleTextBlock block={textBlock} className={styles.text} />}

			<HStack align='center' justify='between' className={styles.footer}>
				<AppLink target={target} to={`/articles/${article.id}`}>
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
