export { userActions, userReducer } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getUserIsAdmin, getUserIsManager, getUserRoles } from './model/selectors/getUserRole';

export type { User, UserSchema, UserRole } from './model/types/user';
