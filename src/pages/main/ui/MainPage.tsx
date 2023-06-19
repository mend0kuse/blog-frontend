import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<>{t('Main Page')}</>
		</Page>
	);
};

export default MainPage;
