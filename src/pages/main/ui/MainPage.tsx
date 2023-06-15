import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Page } from '@/widgets/Page/Page';

const MainPage: FC = () => {
	const { t } = useTranslation();

	const [asd, setAsd] = useState<number>();

	const onStarClick = (number: number) => {
		setAsd(number);
	};

	return (
		<Page>
			<>
				{t('Main Page')}
				<StarRating selectedRating={asd} onClick={onStarClick} />
				<svg />
			</>
		</Page>
	);
};

export default MainPage;
