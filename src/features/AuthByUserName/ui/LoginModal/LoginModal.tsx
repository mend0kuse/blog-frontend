import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';

import { type FC, Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { onClose, open } = props;

	return (
		<Modal onClose={onClose} open={open}>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	);
};
