import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames/cn';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
	className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation()

	return (
		<div className={cn(styles.articleImageBlock, {}, className)}>

		</div>
	);
}