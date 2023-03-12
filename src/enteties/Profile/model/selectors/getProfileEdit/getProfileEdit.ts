import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileEdit = (state: StateSchema) => state?.profile?.readonly || false;
