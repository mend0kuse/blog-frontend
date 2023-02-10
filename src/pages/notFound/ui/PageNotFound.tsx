import cn from 'shared/lib/classNames/cn';

import { type FC, type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageNotFound.module.scss';

interface PageNotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const PageNotFound: FC<PageNotFoundProps> = () => {
	const { t } = useTranslation();
	return <div className={cn(styles.PageNotFound)}>{t('Page not found')}</div>;
};
