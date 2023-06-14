import { Page } from '@/widgets/Page/Page';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<>{t('Main Page')}</>
		</Page>
	);
};

export default MainPage;
