import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/providers/StoreProvider';
import { loginActions } from '@/features/AuthByUserName';
import { getErrorString } from '@/shared/api/getError';
import cn from '@/shared/lib/classNames/cn';
import { type ReducersList, useDinamycModuleLoader } from '@/shared/store/useDinamycModuleLoader';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, ThemeText } from '@/shared/ui/Text';

import { useRegisterMutation } from '../api/registerApi';
import { getRegisterEmail, getRegisterName, getRegisterPassword } from '../model/selectors';
import { registerActions, registerReducer } from '../model/slice';
import styles from './Registration.module.scss';

interface Props {
	closeRegister: () => void;
}

const reducers: ReducersList = {
	register: registerReducer,
};

export const Registration = (props: Props) => {
	const { closeRegister } = props;

	const [register, { isLoading, error, isSuccess }] = useRegisterMutation();

	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const password = useSelector(getRegisterPassword);
	const email = useSelector(getRegisterEmail);
	const name = useSelector(getRegisterName);

	useDinamycModuleLoader(reducers);

	const onPasswordChange = useCallback(
		(value: string) => {
			dispatch(registerActions.setPassword(value));
		},
		[dispatch],
	);

	const onEmailChange = useCallback(
		(value: string) => {
			dispatch(registerActions.setEmail(value));
		},
		[dispatch],
	);

	const onNameChange = useCallback(
		(value: string) => {
			dispatch(registerActions.setName(value));
		},
		[dispatch],
	);

	const handleRegister = async () => {
		const result = await register({ formData: { email, password } });

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (!result.data) {
			return;
		}

		dispatch(loginActions.setPassword(password));
		dispatch(loginActions.setUsername(email));
		closeRegister();
	};

	return (
		<div className={cn(styles.registerForm)}>
			<Text title={t('Register form')} />
			{error && <Text text={t(getErrorString(error))} theme={ThemeText.ERROR} />}
			<Input value={email} onChange={onEmailChange} autoFocus placeholder='Email' />
			<Input value={name} onChange={onNameChange} placeholder='Name' />
			<Input value={password} onChange={onPasswordChange} placeholder='Password' />
			<Button
				theme={ThemeButton.OUTLINE}
				className={styles.registerBtn}
				onClick={handleRegister}
				disabled={isLoading}
			>
				{t('Sign up')}
			</Button>
			<Button theme={ThemeButton.CLEAR} onClick={closeRegister}>
				{t('Already have an account?')}
			</Button>
		</div>
	);
};
