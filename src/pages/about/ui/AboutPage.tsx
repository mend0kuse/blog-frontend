import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
	const { t } = useTranslation('about');
	return <>{t('About us')}</>;
};

export default AboutPage;
