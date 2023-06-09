import { Page } from 'widgets/Page/Page';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const ForbiddenPage: FC = () => {
	const { t } = useTranslation('');
	return <Page>{t('You dont have permissions')}</Page>;
};

export default ForbiddenPage;
