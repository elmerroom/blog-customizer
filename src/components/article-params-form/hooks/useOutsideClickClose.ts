import { useEffect } from 'react';

export const useOutsideClickClose = (
	ref: React.RefObject<HTMLElement>,
	isOpen: boolean,
	onClose: () => void
) => {
	useEffect(() => {
		if (!isOpen) return;
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current &&
				event.target instanceof Node &&
				!ref.current.contains(event.target)
			) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose, ref]);
};
