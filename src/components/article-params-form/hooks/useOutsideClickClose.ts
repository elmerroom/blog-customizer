import { useEffect } from 'react';

export const useOutsideClickClose = (
	ref: React.RefObject<HTMLElement>,
	isOpen: boolean,
	onClose: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				ref.current &&
				event.target instanceof Node &&
				!ref.current.contains(event.target)
			) {
				onClose();
			}
		};

		// Добавляем слушатель событий на document
		document.addEventListener('mousedown', handleClickOutside);

		// Удаляем слушатель при размонтировании компонента
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose, ref]);
};
