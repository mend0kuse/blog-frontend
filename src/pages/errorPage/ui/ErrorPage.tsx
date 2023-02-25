import { Button } from 'shared/ui/Button/Button';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorPage: FC = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div>
			<p>{t('Error happens')}</p>
			<Button onClick={reloadPage}>{t('Reload Page')}</Button>
		</div>
	);
};
