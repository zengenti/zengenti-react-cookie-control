/// <reference types="react" />
declare const useFocusTrap: (isActive: boolean, doToggle: () => void) => import("react").RefObject<HTMLDivElement | null>;
export default useFocusTrap;
