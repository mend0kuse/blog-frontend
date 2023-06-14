import { type ListBoxItem, Listbox } from '@/shared/ui/ListBox/ListBox';
import { type SelectHtmlProps } from '@/shared/ui/Select/Select';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../types/Country';

interface CountrySelectProps extends SelectHtmlProps {
	className?: string;
	value?: Country;
	onChange: (val: Country) => void;
}

const options: Array<ListBoxItem<Country>> = [
	{ value: Country.Armenia, content: Country.Armenia },
	{ value: Country.Belarus, content: Country.Belarus },
	{ value: Country.Kazakhstan, content: Country.Kazakhstan },
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = (props) => {
	const { t } = useTranslation('');
	return <Listbox<Country> items={options} label={t('Pick country')} {...props} />;
};
