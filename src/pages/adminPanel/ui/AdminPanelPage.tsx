import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = () => {
	const { t } = useTranslation('admin-panel');
	return <Page data-testId='AdminPage'>{t('Admin panel')}</Page>;
};

export default AdminPanelPage;
