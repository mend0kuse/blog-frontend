import { Page } from '@/widgets/Page/Page';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage: FC = () => {
	const { t } = useTranslation('admin-panel');
	return <Page>{t('Admin panel')}</Page>;
};

export default AdminPanelPage;
