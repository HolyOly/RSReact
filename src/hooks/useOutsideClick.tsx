import { useEffect } from 'react';

export function useOutsideClick(
  ref1: React.RefObject<HTMLElement>,
  // ref2: React.RefObject<HTMLElement>,
  setModalStatus: (val: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(target: Node | null) {
      if (!ref1.current?.contains(target)) {
        console.log('click outside');
        setModalStatus(false);
      }
    }
    document.addEventListener('mousedown', (e) => handleClickOutside(e.target as Node | null));
    return () => {
      document.removeEventListener('mousedown', (e) => handleClickOutside(e.target as Node | null));
    };
  }, [setModalStatus, ref1]);
}
