import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileFormData = (state: StateSchema) => state?.profile?.formData || null;
