export declare enum ICookieTypes {
    Marketing = "marketing",
    Necessary = "necessary",
    Functional = "functional",
    Analytics = "analytics"
}
export interface CookieProps {
    name: string;
    provider: string;
    expiration: string;
    purpose: string;
    type: ICookieTypes;
}
export interface CookieTableProps {
    cookies?: CookieProps[];
    type?: ICookieTypes;
}
