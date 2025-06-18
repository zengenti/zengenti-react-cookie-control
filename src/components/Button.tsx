import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    className?: string;
    text?: string;
    action?: () => void;
    variant?: 'solid' | 'hollow';
    icon?: string;
    'aria-label'?: string;
}

const Button = ({ className, variant = 'solid', text, icon, action, ...rest }: ButtonProps) => {
    return (
        <ButtonStyled 
            className={className} 
            type="button" 
            data-variant={variant} 
            onClick={action}
            {...rest}
        >
            {text && <span className='btn-text'>{text}</span>}
            {icon && <span className='btn-icon' dangerouslySetInnerHTML={{ __html: icon }}/>}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
	font-family: inherit;

	padding: .5rem .75rem;
	background: #5128C3;
	color: #fff;
	border: inherit;

	font-size: .875rem;
	font-weight: 400;
	line-height: 1.5rem;

	border-radius: .25rem;

	&[data-variant="hollow"] {
		background: transparent;
		border: 1px solid #06151E;
		color: #333
	}

	cursor: pointer;

	&:hover {
		opacity: 0.8;
		transition: opacity 0.2s ease-in-out;
	}

	&:focus {
		outline: 3px solid #4c9aff;
		outline-offset: 4px;
	}

	.btn-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
`

export default Button