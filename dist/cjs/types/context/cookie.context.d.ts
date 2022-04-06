/// <reference types="react" />
export declare type CookieContextProps = {
    analytics: boolean;
    defaultCookiePreferences: {
        analytics: boolean;
        functional: boolean;
        marketing: boolean;
    };
    functional: boolean;
    marketing: boolean;
    set: (props: {
        analytics: boolean;
        functional: boolean;
        marketing: boolean;
    }) => void;
    showCookieControl: boolean;
    showUpdatePreferences: boolean;
    toggleShowUpdatePreferences: () => void;
};
export declare const CookieContext: import("react").Context<CookieContextProps>;
