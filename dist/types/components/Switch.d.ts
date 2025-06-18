import React from 'react';
interface SwitchProps {
    className?: string;
    label: string;
    id: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    action?: (v: boolean) => void;
}
export declare const Switch: ({ className, label, id, action, disabled, defaultChecked, }: SwitchProps) => React.JSX.Element;
export {};
