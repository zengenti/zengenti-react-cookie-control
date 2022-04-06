/// <reference types="react" />
import { CookieProviderProps } from './cookieProvider.type';
declare const withCookieProvider: ({ cookieControl, defaultCookiePreferences, updatePreferences, theme, }: CookieProviderProps) => (Component: () => JSX.Element) => ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;
export default withCookieProvider;
