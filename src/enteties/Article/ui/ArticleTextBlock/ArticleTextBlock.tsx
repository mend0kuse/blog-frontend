import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames/cn';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
	className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation()

	return (
		<div className={cn(styles.articleTextBlock, {}, className)}>

		</div>
	);
}