import { type ListBoxItem, Listbox } from '@/shared/ui/ListBox/ListBox';
import { type SelectHtmlProps } from '@/shared/ui/Select/Select';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../types/Currency';

interface CurrencySelectProps extends SelectHtmlProps {
	className?: string;
	value?: Currency;
	onChange: (val: Currency) => void;
}

const options: Array<ListBoxItem<Currency>> = [
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
	const { t } = useTranslation('');
	return <Listbox<Currency> label={t('Pick currency')} items={options} {...props} />;
};
