import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');
	return <div className='page-wrapper'>{t('About us')}</div>;
};

export default AboutPage;
