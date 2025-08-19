import React from "react";
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
export type CookieModalProps = {
    modal?: {
        title: string;
        description: string;
    };
    config: Record<string, CookieCategoryConfig>;
};
declare const CookieModal: ({ modal, config }: CookieModalProps) => React.JSX.Element | null;
export default CookieModal;
