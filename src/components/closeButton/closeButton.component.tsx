import React from 'react';
import CloseButtonStyled from './closeButton.styled';
import { CloseButtonProps } from './closeButton.type';

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <span>Close</span>
    </CloseButtonStyled>
  );
};

export default CloseButton;
