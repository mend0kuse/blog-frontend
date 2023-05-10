import EyeIcon from 'shared/assets/icons/eye.svg';
import cn from 'shared/lib/classNames/cn';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { SizeText, Text } from 'shared/ui/Text/Text';

import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AricleBlockType, type Article, type ArticleBlockText, ArticleView } from '../../model/types/ArticleTypes';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
	const { className, article, view } = props;
	const { t } = useTranslation();

	const navigate = useNavigate();

	const redirect = useCallback(() => {
		navigate(`/articles/${article.id}`);
	}, [article.id, navigate]);

	if (view === ArticleView.TILE) {
		return (
			<div onClick={redirect} className={cn(styles.articleListItem, {}, className, styles.tile)}>
				<div className={styles.imgBlock}>
					<img src={article.img} className={styles.img} alt={article.title} />
					<Text text={article.createdAt} className={styles.created} />
				</div>
				<div className={styles.info}>
					<Text className={styles.types} text={article.type.join(', ')} />
					<div className={styles.views}>
						<Text className={styles.viewsCount} text={article.views} />
						<Icon SVG={EyeIcon} />
					</div>
				</div>
				<Text text={article.title} className={styles.title} />
			</div>
		);
	}

	const textBlock = article.blocks.find((i) => i.type === AricleBlockType.TEXT) as ArticleBlockText;

	return (
		<div className={cn(styles.articleListItem, {}, className, styles.list)}>
			<div className={styles.header}>
				<AppLink to={`/profile/${article.user.id}`} className={styles.user}>
					<Avatar size={50} src={article.user.avatar} alt={article.user.username} className={styles.avatar} />
					<Text text={article.user.username} className={styles.username} />
				</AppLink>
				<Text text={article.createdAt} className={styles.created} />
			</div>

			<Text size={SizeText.l} text={article.title} className={styles.title} />
			<Text className={styles.types} text={article.type.join(', ')} />

			<div className={styles.imgBlock}>
				<img src={article.img} className={styles.img} alt={article.title} />
			</div>

			{textBlock && <ArticleTextBlock block={textBlock} className={styles.text} />}

			<div className={styles.footer}>
				<Button onClick={redirect} theme={ThemeButton.OUTLINE}>
					{t('Read More')}
				</Button>
				<div className={styles.views}>
					<Text className={styles.viewsCount} text={article.views} />
					<Icon SVG={EyeIcon} />
				</div>
			</div>
		</div>
	);
});

ArticleListItem.displayName = 'ArticleListItem';
