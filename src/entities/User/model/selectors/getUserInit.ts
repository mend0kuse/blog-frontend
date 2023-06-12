import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserInit = (state: StateSchema) => state.user._init;
