/**
 * Get all cookies as key/value pairs
 */
export declare const getCookies: () => {
    [key: string]: string;
};
/**
 * Get cookie value by key
 */
export declare const getCookieValue: (key: string) => string;
/**
 * Clear cookie value by key
 */
export declare const clearCookie: (key: string) => void;
/**
 * Set cookie value
 */
export declare const setCookieValue: (key: string, value: string, expiresInDays?: number | undefined, path?: string | undefined) => void;
