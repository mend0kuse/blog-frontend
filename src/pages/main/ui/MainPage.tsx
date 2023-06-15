import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Rating } from '@/entities/Rating';
import { Page } from '@/widgets/Page/Page';

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<>
				{t('Main Page')}
				<Rating title='Оцените статью' hasFeedback feedbackTitle='Напишите отзыв' />
			</>
		</Page>
	);
};

export default MainPage;
