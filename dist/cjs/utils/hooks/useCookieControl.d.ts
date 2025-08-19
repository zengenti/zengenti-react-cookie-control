/// <reference types="react" />
export declare const useCookieControl: () => {
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
    setAnalytics: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setAdvertising: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setFunctional: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setMarketing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    /** Visibility flags */
    isUpdatePreferencesVisible: boolean;
    isCookieControlVisible: boolean;
    /** Toggle update preferences UI */
    doToggleUpdatePreferences: () => void;
    /** Save preferences */
    doUpdatePreferences: () => void;
};
