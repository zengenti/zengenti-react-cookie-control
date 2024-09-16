/// <reference types="react" />
export declare type CookieContextProps = {
    defaultCookiePreferences: {
        analytics: boolean;
        advertising: boolean;
        functional: boolean;
        marketing: boolean;
    };
    analytics: boolean;
    advertising: boolean;
    functional: boolean;
    marketing: boolean;
    isCookieControlVisible: boolean;
    isUpdatePreferencesVisible: boolean;
    doToggleUpdatePreferences: () => void;
    set: (props: {
        analytics: boolean;
        advertising: boolean;
        functional: boolean;
        marketing: boolean;
    }) => void;
};
export declare const CookieContext: import("react").Context<CookieContextProps>;
