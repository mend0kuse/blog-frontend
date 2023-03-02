import { counterReducer } from 'enteties/Counter';

import { type CounterSchema } from './../types/counterSchema';
import { counterActions } from './counterSlice';

describe('counterSlice', () => {
	test('decrement', () => {
		const state: CounterSchema = {
			value: 10,
		};
		expect(counterReducer(state, counterActions.decrement())).toEqual({
			value: 9,
		});
	});

	test('increment', () => {
		const state: CounterSchema = {
			value: 10,
		};
		expect(counterReducer(state, counterActions.increment())).toEqual({
			value: 11,
		});
	});

	test('with empty state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1,
		});
	});
});
