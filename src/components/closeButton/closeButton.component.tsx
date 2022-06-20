import React from 'react';
import CloseButtonStyled from './closeButton.styled';
import { CloseButtonProps } from './closeButton.type';

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.997.997 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z"
          fill="#002033"
        />
      </svg>
      <span className="sr-only">Close cookie banner</span>
    </CloseButtonStyled>
  );
};

export default CloseButton;
