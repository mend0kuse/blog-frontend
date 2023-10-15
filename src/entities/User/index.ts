export { userActions, userReducer } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getUserInit } from './model/selectors/getUserInit';
export { getUserSettings } from './model/selectors/getUserSettings';

export { getUserIsAdmin, getUserIsManager, getUserRoles } from './model/selectors/getUserRole';

export type { User, UserSchema, UserRole } from './model/types/user';
export {
	useAddSettingsMutation,
	useLazyGetUserByIdQuery,
	useGetUserByIdQuery,
	useUpdateProfileMutation,
	useGetNotifsQuery,
	useReadNotifsMutation,
} from './api/userApi';
