import { Select, type SelectHtmlProps, type SelectOption } from 'shared/ui/Select/Select';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../types/Currency';

interface CurrencySelectProps extends SelectHtmlProps {
	className?: string;
	value?: Currency;
	onChange: (val: Currency) => void;
}

const options: Array<SelectOption<Currency>> = [
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
	const { t } = useTranslation('');
	return <Select<Currency> options={options} label={t('Pick currency')} {...props} />;
};
