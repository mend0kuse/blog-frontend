import { type StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterPassword = (state: StateSchema) => state?.register?.password || '';
export const getRegisterEmail = (state: StateSchema) => state?.register?.email || '';
export const getRegisterName = (state: StateSchema) => state?.register?.name || '';
