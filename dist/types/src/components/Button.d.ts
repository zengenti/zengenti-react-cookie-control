import React from 'react';
type ButtonProps = {
    className?: string;
    text?: string;
    action?: () => void;
    variant?: 'solid' | 'hollow';
    icon?: string;
    'aria-label'?: string;
};
declare const Button: ({ className, variant, text, icon, action, ...rest }: ButtonProps) => React.JSX.Element;
export default Button;
