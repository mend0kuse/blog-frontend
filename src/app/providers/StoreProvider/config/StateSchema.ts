import { type CounterSchema } from 'enteties/Counter';
import { type UserSchema } from 'enteties/User';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
}
