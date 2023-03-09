import { type StateSchema } from 'app/providers/StoreProvider';

import { type AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, Arg, RejectedValue> = (
	arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

export default class TestAsyncThunk<Returned, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>;
	getState: () => StateSchema;
	actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

	constructor(
		actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>,
	) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, undefined);

		return result;
	}
}
