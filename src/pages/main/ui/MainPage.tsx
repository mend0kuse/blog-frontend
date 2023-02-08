import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation();

	return <div className='page-wrapper'>{t('Главная страница')}</div>;
};

export default MainPage;
