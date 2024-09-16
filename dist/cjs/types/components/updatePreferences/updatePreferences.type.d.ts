import React from 'react';
export interface IUpdatePreferencesProps {
    summary: string;
    cookies?: React.ReactNode;
}
export declare type UpdatePreferencesProps = {
    content?: string;
    advertising?: IUpdatePreferencesProps;
    analytics?: IUpdatePreferencesProps;
    functional?: IUpdatePreferencesProps;
    marketing?: IUpdatePreferencesProps;
    necessary?: IUpdatePreferencesProps;
};
export declare type CookieSummaryWithToggleProps = {
    isChecked?: boolean;
    label?: string;
    onClick?: () => void;
    summary?: string;
    title?: string;
    cookies?: React.ReactNode;
};
