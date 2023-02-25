import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
	const { t } = useTranslation();

	return <div className='page-wrapper'>{t('Main Page')}</div>;
};

export default MainPage;
