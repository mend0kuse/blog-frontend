import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
	const { t } = useTranslation('about');
	return <div className='page-wrapper'>{t('About us')}</div>;
};

export default AboutPage;
