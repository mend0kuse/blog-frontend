import { type StateSchema } from './../../../../app/providers/StoreProvider/config/StateSchema';

export const getNewCommentText = (state: StateSchema) => state.addNewComment?.text || '';
export const getNewCommentError = (state: StateSchema) => state.addNewComment?.error || '';
