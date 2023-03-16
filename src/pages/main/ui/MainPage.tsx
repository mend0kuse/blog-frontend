import { Counter } from 'enteties/Counter';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
	const { t } = useTranslation();
	return (
		<>
			{t('Main Page')}
			<Counter />
		</>
	);
};

export default MainPage;
