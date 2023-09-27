import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';

export interface Profile {
	id?: number;
	userId?: number;
	name?: string;
	surname?: string;
	username?: string;
	age?: string;
	avatar?: string;
	currency?: Currency;
	country?: Country;
}
