import cn from '@/shared/lib/classNames/cn';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';

import { type FC, type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageNotFound.module.scss';

interface PageNotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const PageNotFound: FC<PageNotFoundProps> = () => {
	const { t } = useTranslation();
	return (
		<Page>
			<HStack align='center' justify='center' className={cn(styles.PageNotFound)}>
				{t('Page not found')}
			</HStack>
		</Page>
	);
};
