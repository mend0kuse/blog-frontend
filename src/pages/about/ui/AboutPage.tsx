import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AboutPage: FC = () => {
	const { t } = useTranslation('about');
	return <Page data-testId='AboutPage'>{t('About us')}</Page>;
};

export default AboutPage;
