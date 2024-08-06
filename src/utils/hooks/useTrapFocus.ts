import { useRef, useEffect } from 'react';

const useFocusTrap = (isActive: boolean, doToggle: () => void) => {
  const elContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elContainerRef && elContainerRef.current) {
      const doHandleFocus = (evt: FocusEvent) => {
        if (elContainerRef && elContainerRef.current && !elContainerRef.current.contains(evt.target as Node)) {
          evt.stopPropagation();
          elContainerRef.current.focus();
        }
      };

      const doHandleKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          doToggle();
        } else if (evt.key === 'Tab') {
          if (elContainerRef && elContainerRef.current) {
            const elFocusableElements = elContainerRef.current.querySelectorAll('a[href], button, textarea, input, select');
            const elFirstElement = elFocusableElements[0] as HTMLElement;
            const elLastElement = elFocusableElements[elFocusableElements.length - 1] as HTMLElement;

            if (evt.shiftKey) {
              if (document.activeElement === elFirstElement) {
                evt.preventDefault();
                if (elLastElement) elLastElement.focus();
              }
            } else {
              if (document.activeElement === elLastElement) {
                evt.preventDefault();
                if (elFirstElement) elFirstElement.focus();
              }
            }
          }
        }
      };

      if (isActive) {
        document.addEventListener('focus', doHandleFocus, true);
        elContainerRef.current.addEventListener('keydown', doHandleKeyDown);

        // Move focus to the first focusable element when it becomes active
        const elFocusableElements = elContainerRef.current.querySelectorAll('a[href], button, textarea, input, select');
        const elFirstElement = elFocusableElements[0] as HTMLElement;
        if (elFirstElement) {
          elFirstElement.focus();
        } else {
          // Fallback to focusing the container if no focusable elements are found
          elContainerRef.current.focus();
        }

        return () => {
          document.removeEventListener('focus', doHandleFocus, true);
          if (elContainerRef && elContainerRef.current) {
            elContainerRef.current.removeEventListener('keydown', doHandleKeyDown);
          }
        };
      }
    }
  }, [isActive, elContainerRef, doToggle]);

  return elContainerRef;
};

export default useFocusTrap;