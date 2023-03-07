import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'features/AuthByUserName/model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import {
	loginActions,
	loginReducer,
} from 'features/AuthByUserName/model/slices/loginSlice';
import { loginByUserName } from 'features/AuthByUserName/services/loginByUserName/loginByUserName';
import {
	type ReducersList,
	useDinamycModuleLoader,
} from 'shared/hooks/useDinamycModuleLoader';
import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styles from './LoginForm.module.scss';

const reducers: ReducersList = {
	login: loginReducer,
};

const LoginForm: FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const password = useSelector(getLoginPassword);
	const username = useSelector(getLoginUsername);
	const isLoading = useSelector(getLoginLoading);
	const error = useSelector(getLoginError);

	useDinamycModuleLoader(reducers);

	const onPasswordChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onUsernameChange = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUserName({ username, password }));
	}, [dispatch, username, password]);

	return (
		<div className={cn(styles.LoginForm)}>
			<Text title={t('Auth form')} />
			{error && <Text text={t(error)} theme={ThemeText.ERROR} />}
			<Input
				value={username}
				onChange={onUsernameChange}
				autoFocus
				placeholder='Username'
			/>
			<Input
				value={password}
				onChange={onPasswordChange}
				placeholder='Password'
			/>
			<Button
				theme={ThemeButton.OUTLINE}
				className={styles.logBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Sign in')}
			</Button>
		</div>
	);
};

export default LoginForm;
