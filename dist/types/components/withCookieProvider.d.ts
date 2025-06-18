import { JSX } from 'react';
import { CookieModalProps } from './CookieModal';
import { CookiePopupProps } from './CookiePopup';
export type CookieProviderProps = CookieModalProps & CookiePopupProps;
declare const withCookieProvider: ({ config, popup }: CookieProviderProps) => (Component: () => JSX.Element) => ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;
export default withCookieProvider;
