/// <reference types="react" />
import * as react from 'react';
import react__default, { JSX } from 'react';

declare const useCookieControl: () => {
    /** Accept all cookie permissions */
    doAccept: () => void;
    /** Decline all cookie permissions */
    doDecline: () => void;
    /** Default preferences to use if no user preferences have been set */
    defaultPreferences: {
        analytics: boolean;
        advertising: boolean;
        functional: boolean;
        marketing: boolean;
    };
    /** Individual preferences */
    analytics: boolean;
    advertising: boolean;
    functional: boolean;
    marketing: boolean;
    /** Setters for individual preferences */
    setAnalytics: react.Dispatch<react.SetStateAction<boolean>>;
    setAdvertising: react.Dispatch<react.SetStateAction<boolean>>;
    setFunctional: react.Dispatch<react.SetStateAction<boolean>>;
    setMarketing: react.Dispatch<react.SetStateAction<boolean>>;
    /** Visibility flags */
    isUpdatePreferencesVisible: boolean;
    isCookieControlVisible: boolean;
    /** Toggle update preferences UI */
    doToggleUpdatePreferences: () => void;
    /** Save preferences */
    doUpdatePreferences: () => void;
};

/**
 * Get cookie value by key
 */
declare const getCookieValue: (key: string) => string;
/**
 * Set cookie value
 */
declare const setCookieValue: (key: string, value: string, expiresInDays?: number, path?: string) => void;

type ToggleCookieModalProps = {
    className?: string;
    text?: string;
};
declare const ToggleCookieModal: ({ className, text, }: ToggleCookieModalProps) => react__default.JSX.Element | null;

type CookieCategoryConfig = {
    name: string;
    description: string;
    cookies: {
        name: string;
        purpose: string;
        provider: string;
        expiration: string;
    }[];
    required?: boolean;
};
type CookieModalProps = {
    modal?: {
        title: string;
        description: string;
    };
    config: Record<string, CookieCategoryConfig>;
};

type CookiePopupProps = {
    popup: {
        text: string;
    };
};

type CookieProviderProps = CookieModalProps & CookiePopupProps;
declare const withCookieProvider: ({ config, popup }: CookieProviderProps) => (Component: () => JSX.Element) => ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;

export { ToggleCookieModal, getCookieValue, setCookieValue, useCookieControl, withCookieProvider };
