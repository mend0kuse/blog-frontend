import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsRecomendations } from '@/features/ArticleDetailsRecomendations';
import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { Text, ThemeText } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slice/articlePageReducer';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { t } = useTranslation('article-details');

	const { className } = props;
	const { id } = useParams<{ id: string }>();

	useDinamycModuleLoader(reducers);

	if (!id) {
		return <Text title={t('Article not found')} theme={ThemeText.ERROR} />;
	}

	return (
		<Page>
			<div className={cn(styles.articleDetailsPage, {}, className)}>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				<ArticleDetailsRecomendations />
				<ArticleComments id={id} />
			</div>
		</Page>
	);
};

export default memo(ArticleDetailsPage);
