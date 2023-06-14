import { Button } from '@/shared/ui/Button/Button';
import { Page } from '@/widgets/Page/Page';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorPage: FC = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<Page>
			<div>
				<p>{t('Error happens')}</p>
				<Button onClick={reloadPage}>{t('Reload Page')}</Button>
			</div>
		</Page>
	);
};
