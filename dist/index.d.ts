/// <reference types="react" />
import * as react from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

declare type ToggleUpdatePreferencesProps = {
    className?: string;
    label?: string;
};

declare const ToggleUpdatePreferences: ({ className, label, }: ToggleUpdatePreferencesProps) => JSX.Element | null;

declare const useCookieControl: () => {
    /** Accept all cookie permissions */
    acceptAll: () => void;
    /** Analytics cookies accepted/declined */
    analytics: boolean;
    /** Decline all cookie permissions */
    declineAll: () => void;
    /** Default preferences to use as toggle values if no user preferences have been set */
    defaultCookiePreferences: {
        analytics: boolean;
        functional: boolean;
        marketing: boolean;
    };
    /** Functional cookies accepted/declined */
    functional: boolean;
    /** Marketing cookies accepted/declined */
    marketing: boolean;
    /** Update analytics cookie preference */
    setAnalytics: react.Dispatch<react.SetStateAction<boolean>>;
    /** Update functional cookie preference */
    setFunctional: react.Dispatch<react.SetStateAction<boolean>>;
    /** Update marketing cookie preference */
    setMarketing: react.Dispatch<react.SetStateAction<boolean>>;
    /** Should the update preferences component be displayed */
    showUpdatePreferences: boolean;
    /** Should the cookie control be displayed */
    showCookieControl: boolean;
    /** Toggle visibility of update preferences component */
    toggleShowUpdatePreferences: () => void;
    /** Save cookie preferences */
    updatePreferences: () => void;
};

/**
 * Get cookie value by key
 */
declare const getCookieValue: (key: string) => string;
/**
 * Set cookie value
 */
declare const setCookieValue: (key: string, value: string, expiresInDays?: number | undefined) => void;

declare type CookieControlProps = {
    content?: string;
};

declare type UpdatePreferencesProps = {
    analytics?: string;
    content?: string;
    functional?: string;
    marketing?: string;
    necessary?: string;
};

declare type CookieProviderProps = {
    cookieControl?: CookieControlProps;
    defaultCookiePreferences: {
        analytics: boolean;
        functional: boolean;
        marketing: boolean;
    };
    updatePreferences?: UpdatePreferencesProps;
    theme?: {
        background?: string;
        button?: {
            borderRadius?: string;
            borderWidth?: string;
            borderColor?: string;
            color?: string;
            customStyles?: string | FlattenSimpleInterpolation;
            fontSize?: string;
            lineHeight?: string;
            padding?: string;
            solid?: {
                background?: string;
                color?: string;
                hover?: {
                    background?: string;
                    color?: string;
                };
            };
        };
        containerWidth?: string;
        divideColor?: string;
        heading?: {
            color?: string;
            fontFamily?: string;
            fontSize?: string;
            fontWeight?: string;
            lineHeight?: string;
        };
        iconColor?: string;
        linkColor?: string;
        text?: {
            color?: string;
            fontFamily?: string;
            fontSize?: string;
            fontWeight?: string;
            lineHeight?: string;
        };
        toggle?: {
            off?: {
                background?: string;
                hover?: string;
            };
            on?: {
                background?: string;
                hover?: string;
            };
        };
    };
};

declare const withCookieProvider: ({ cookieControl, defaultCookiePreferences, updatePreferences, theme, }: CookieProviderProps) => (Component: () => JSX.Element) => ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;

export { ToggleUpdatePreferences, getCookieValue, setCookieValue, useCookieControl, withCookieProvider };
