import { Counter } from 'enteties/Counter';
import { Page } from 'shared/ui/Page/Page';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
	const { t } = useTranslation();
	return (
		<Page>
			<>
				{t('Main Page')}
				<Counter />
			</>
		</Page>
	);
};

export default MainPage;
