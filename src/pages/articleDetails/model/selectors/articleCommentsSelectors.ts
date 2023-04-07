import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
export const getArticleCommentsisLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
