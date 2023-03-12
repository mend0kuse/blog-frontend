import { type StateSchema } from 'app/providers/StoreProvider';
import axios, { type AxiosStatic } from 'axios';

import { type AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, Arg, RejectedValue> = (
	arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export default class TestAsyncThunk<Returned, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>;
	getState: () => StateSchema;
	actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;
	api: jest.MockedFunctionDeep<AxiosStatic>;

	constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.api = mockedAxios;
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, { api: this.api });

		return result;
	}
}
