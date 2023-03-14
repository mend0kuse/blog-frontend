import { Select, type SelectHtmlProps, type SelectOption } from 'shared/ui/Select/Select';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../types/Country';

interface CountrySelectProps extends SelectHtmlProps {
	className?: string;
	value?: string;
	onChange?: (val: string) => void;
}

const options: SelectOption[] = [
	{ value: Country.Armenia, content: Country.Armenia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = (props) => {
	const { t } = useTranslation('');
	return <Select options={options} label={t('Pick country')} {...props} />;
};
