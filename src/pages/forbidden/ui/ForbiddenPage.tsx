import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage: FC = () => {
	const { t } = useTranslation('');
	return <Page data-testId='ForbiddenPage'>{t('You dont have permissions')}</Page>;
};

export default ForbiddenPage;
