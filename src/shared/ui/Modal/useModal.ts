import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

interface useModalProps {
	close: () => void;
	isOpen: boolean;
	animationDelay: number;
}

export const useModal = (props: useModalProps) => {
	const { close, isOpen, animationDelay } = props;

	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const closeHandler = useCallback(() => {
		setIsClosing(true);
		timerRef.current = setTimeout(() => {
			close();
			setIsClosing(false);
		}, animationDelay);
	}, [animationDelay, close]);

	const onEscDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onEscDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onEscDown);
		};
	}, [isOpen, onEscDown]);

	return { closeHandler, isClosing, isMounted };
};
