import React from 'react';
import ButtonStyled from './button.styled';
import { ButtonProps } from './button.type';

const Button = ({ id, label, onClick, type = 'solid' }: ButtonProps) => {
  return (
    <ButtonStyled id={id} className={`zen-cc-button ${type}`} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

export default Button;
