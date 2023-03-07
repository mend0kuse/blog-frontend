import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';

import { type FC, Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { onClose, open } = props;
	return (
		<Portal>
			<Modal onClose={onClose} lazy open={open}>
				<Suspense fallback={<Loader />}>
					<LoginFormAsync />
				</Suspense>
			</Modal>
		</Portal>
	);
};
