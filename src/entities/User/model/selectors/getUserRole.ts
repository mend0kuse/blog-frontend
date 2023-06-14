import { type StateSchema } from '@/app/providers/StoreProvider';

import { createSelector } from '@reduxjs/toolkit';

export const getUserRoles = (state: StateSchema) => state.user.authData?.role;
export const getUserIsManager = createSelector(getUserRoles, (roles) => roles?.includes('Manager'));
export const getUserIsAdmin = createSelector(getUserRoles, (roles) => roles?.includes('Admin'));
