/// <reference types="react" />
export declare type ToggleProps = {
    id: string;
    isChecked: boolean;
    label: string;
    onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
