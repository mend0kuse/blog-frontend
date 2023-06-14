import { type StateSchema } from '@/app/providers/StoreProvider';

export const getChosenCategory = (state: StateSchema) => state.articlesCategories?.chosenCategory;
export const getCategoriesInited = (state: StateSchema) => state.articlesCategories?._inited;
