import { type CounterSchema } from 'enteties/Counter';
import { type UserSchema } from 'enteties/User';
import { type LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
	counter: CounterSchema;
	login: LoginSchema;
	user: UserSchema;
}
