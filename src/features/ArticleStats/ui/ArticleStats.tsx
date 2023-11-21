import { useTranslation } from 'react-i18next';

import { type ArticleDto, useDislikeMutation, useLikeMutation } from '@/entities/Article';
import { getErrorString } from '@/shared/api/getError';
import { Button } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Text, ThemeText } from '@/shared/ui/Text';

import styles from './ArticleStats.module.scss';

interface Props {
	article: ArticleDto;
	isLoading: boolean;
}

export const ArticleStats = (props: Props) => {
	const { t } = useTranslation('article-details');

	const {
		article: { ArticleStats, id },
		isLoading: isLoadingArticle,
	} = props;

	const [like, { error: likeError, isLoading: likeLoading }] = useLikeMutation();
	const [dislike, { error: dislikeError, isLoading: dislikeLoading }] = useDislikeMutation();

	const likeHandle = async () => await like(id.toString());
	const dislikeHandle = async () => await dislike(id.toString());

	const isLoading = likeLoading || dislikeLoading;
	const error = likeError ?? dislikeError;

	if (isLoadingArticle) {
		return (
			<HStack className={styles.wrapper} gap='8'>
				<Skeleton height={50} width={100} />
				<Skeleton width={100} height={50} />
			</HStack>
		);
	}

	return (
		<HStack className={styles.wrapper} gap='8'>
			{error && <Text theme={ThemeText.ERROR} text={getErrorString(error)} />}
			<Button disabled={isLoading} onClick={likeHandle}>
				{ArticleStats.likes} {t('Like')}
			</Button>
			<Button disabled={isLoading} onClick={dislikeHandle}>
				{ArticleStats.dislikes} {t('Dislike')}
			</Button>
		</HStack>
	);
};
