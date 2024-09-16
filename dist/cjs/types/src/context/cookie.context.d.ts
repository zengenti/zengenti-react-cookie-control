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
    showCookieControl: boolean;
    showUpdatePreferences: boolean;
    toggleShowUpdatePreferences: () => void;
    set: (props: {
        analytics: boolean;
        advertising: boolean;
        functional: boolean;
        marketing: boolean;
    }) => void;
};
export declare const CookieContext: import("react").Context<CookieContextProps>;
