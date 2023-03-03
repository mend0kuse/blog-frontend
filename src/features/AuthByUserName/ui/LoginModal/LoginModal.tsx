import { Modal } from 'shared/ui/Modal/Modal';

import { type FC } from 'react';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { onClose, open } = props;
	return (
		<Modal onClose={onClose} open={open}>
			<LoginForm />
		</Modal>
	);
};
