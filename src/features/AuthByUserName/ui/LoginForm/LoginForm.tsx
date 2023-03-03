import cn from 'shared/lib/classNames/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LoginForm.module.scss';

export const LoginForm: FC = () => {
	const { t } = useTranslation();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className={cn(styles.LoginForm)}>
			<Input
				value={username}
				onChange={setUsername}
				autoFocus
				placeholder='Username'
			/>
			<Input
				value={password}
				onChange={setPassword}
				placeholder='Password'
			/>
			<Button theme={ThemeButton.OUTLINE} className={styles.logBtn}>
				{t('Sign in')}
			</Button>
		</div>
	);
};
