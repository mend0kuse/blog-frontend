import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';

import { type FC } from 'react';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { onClose, open } = props;
	return (
		<Portal>
			<Modal onClose={onClose} open={open}>
				<LoginForm />
			</Modal>
		</Portal>
	);
};
