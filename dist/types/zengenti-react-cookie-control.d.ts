/// <reference types="react" />
import * as react from 'react';
import react__default, { JSX } from 'react';

declare const useCookieControl: () => {
    /** Accept all cookie permissions */
    doAccept: () => void;
    /** Decline all cookie permissions */
    doDecline: () => void;
    /** Default preferences to use as toggle values if no user preferences have been set */
    defaultPreferences: {
        analytics: boolean;
        advertising: boolean;
        functional: boolean;
        marketing: boolean;
    };
    /** Analytics cookies accepted/declined */
    analytics: boolean;
    /** Advertising cookies accepted/declined */
    advertising: boolean;
    /** Functional cookies accepted/declined */
    functional: boolean;
    /** Marketing cookies accepted/declined */
    marketing: boolean;
    /** Update analytics cookie preference */
    setAnalytics: react.Dispatch<react.SetStateAction<boolean>>;
    /** Update advertising cookie preference */
    setAdvertising: react.Dispatch<react.SetStateAction<boolean>>;
    /** Update functional cookie preference */
    setFunctional: react.Dispatch<react.SetStateAction<boolean>>;
    /** Update marketing cookie preference */
    setMarketing: react.Dispatch<react.SetStateAction<boolean>>;
    /** Should the update preferences component be displayed */
    isUpdatePreferencesVisible: boolean;
    /** Should the cookie control be displayed */
    isCookieControlVisible: boolean;
    /** Toggle visibility of update preferences component */
    doToggleUpdatePreferences: () => void;
    /** Save cookie preferences */
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
    isUpdatePreferencesVisibleOverride?: boolean;
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
