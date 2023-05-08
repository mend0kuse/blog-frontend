import { type Country } from 'enteties/Country';
import { type Currency } from 'enteties/Currency';

export interface Profile {
	id?: string;
	first?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}
