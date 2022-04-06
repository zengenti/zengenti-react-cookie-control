import { FlattenSimpleInterpolation } from 'styled-components';
import { CookieControlProps } from '../cookieControl/cookieControl.type';
import { UpdatePreferencesProps } from '../updatePreferences/updatePreferences.type';
export declare type CookieProviderProps = {
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
