import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<Page data-testId='MainPage'>
			<>{t('Main Page')}</>
		</Page>
	);
};

export default MainPage;
