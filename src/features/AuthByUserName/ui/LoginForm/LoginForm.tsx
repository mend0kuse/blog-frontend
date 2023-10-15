import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, ThemeText } from '@/shared/ui/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginEmail } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { loginByUserName } from '../../services/loginByUserName';
import styles from './LoginForm.module.scss';

const reducers: ReducersList = {
	login: loginReducer,
};

interface Props {
	openRegister?: () => void;
}

const LoginForm = (props: Props) => {
	const { openRegister } = props;

	const { t } = useTranslation();
	const dispatch = useDispatch();

	const password = useSelector(getLoginPassword);
	const email = useSelector(getLoginEmail);
	const isLoading = useSelector(getLoginLoading);
	const error = useSelector(getLoginError);

	useDinamycModuleLoader(reducers, false);

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
		dispatch(loginByUserName({ email, password }));
	}, [dispatch, email, password]);

	return (
		<div className={cn(styles.LoginForm)}>
			<Text title={t('Auth form')} />
			{error && <Text text={t(error)} theme={ThemeText.ERROR} />}
			<Input value={email} onChange={onUsernameChange} autoFocus placeholder='Email' />
			<Input value={password} onChange={onPasswordChange} placeholder='Password' />
			<Button theme={ThemeButton.OUTLINE} className={styles.logBtn} onClick={onLoginClick} disabled={isLoading}>
				{t('Sign in')}
			</Button>
			<Button theme={ThemeButton.CLEAR} onClick={openRegister}>
				{t('No account?')}
			</Button>
		</div>
	);
};

export default LoginForm;
