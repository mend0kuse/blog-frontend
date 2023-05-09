import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type AddNewCommentSchema } from './../types/addNewCommentSchema';

const initialState: AddNewCommentSchema = {};

export const addNewCommentSlice = createSlice({
	name: 'addNewComment',
	initialState,
	reducers: {
		setText(state: AddNewCommentSchema, action: PayloadAction<string>) {
			state.text = action.payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { reducer: addNewCommentReducer } = addNewCommentSlice;
export const { actions: addNewCommentActions } = addNewCommentSlice;
