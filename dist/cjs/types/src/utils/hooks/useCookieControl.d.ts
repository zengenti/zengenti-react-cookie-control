/// <reference types="react" />
export declare const useCookieControl: () => {
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
    setAnalytics: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    /** Update functional cookie preference */
    setFunctional: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    /** Update marketing cookie preference */
    setMarketing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    /** Should the update preferences component be displayed */
    showUpdatePreferences: boolean;
    /** Should the cookie control be displayed */
    showCookieControl: boolean;
    /** Toggle visibility of update preferences component */
    toggleShowUpdatePreferences: () => void;
    /** Save cookie preferences */
    updatePreferences: () => void;
};
