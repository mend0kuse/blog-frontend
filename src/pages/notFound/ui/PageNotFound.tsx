import cn from 'shared/lib/classNames/cn';
import { Page } from 'widgets/Page/Page';

import { type FC, type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageNotFound.module.scss';

interface PageNotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const PageNotFound: FC<PageNotFoundProps> = () => {
	const { t } = useTranslation();
	return (
		<Page>
			<div className={cn(styles.PageNotFound)}>{t('Page not found')}</div>
		</Page>
	);
};
