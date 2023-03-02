import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	target?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
	const { children, target = document.body } = props;
	return createPortal(children, target);
};
