import React from 'react';
import ButtonStyled from './button.styled';
import { ButtonProps } from './button.type';

const Button = ({ label, onClick, type = 'solid' }: ButtonProps) => {
  return (
    <ButtonStyled className={`zen-cc-button ${type}`} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

export default Button;
