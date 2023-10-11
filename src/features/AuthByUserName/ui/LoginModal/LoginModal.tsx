import { Suspense } from 'react';

import { Registration } from '@/features/Registration';
import { useToggler } from '@/shared/lib/useToggler';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const { onClose, open } = props;

	const { setFalse: closeRegister, setTrue: openRegister, value: isRegister } = useToggler();

	return (
		<Modal onClose={onClose} open={open}>
			<Suspense fallback={<Loader />}>
				{isRegister ? (
					<Registration closeRegister={closeRegister} />
				) : (
					<LoginFormAsync openRegister={openRegister} />
				)}
			</Suspense>
		</Modal>
	);
};
