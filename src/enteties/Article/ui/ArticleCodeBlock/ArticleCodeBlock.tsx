import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames/cn';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
	className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation()

	return (
		<div className={cn(styles.articleCodeBlock, {}, className)}>

		</div>
	);
}