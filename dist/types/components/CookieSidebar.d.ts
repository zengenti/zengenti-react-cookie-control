import React from 'react';
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
export type CookieSidebarProps = {
    config: Record<string, CookieCategoryConfig>;
    isUpdatePreferencesVisibleOverride?: boolean;
};
declare const CookieSidebar: ({ config, isUpdatePreferencesVisibleOverride }: CookieSidebarProps) => React.JSX.Element | null;
export default CookieSidebar;
