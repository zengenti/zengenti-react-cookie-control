import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  ${({ theme }) =>
    theme.button.customStyles
      ? css`
          ${theme.button.customStyles}
        `
      : css`
          background: none;
          border-radius: 2px;
          border: ${theme?.button?.borderWidth} solid
            ${theme?.button?.borderColor};
          color: ${theme?.button?.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${theme?.button?.fontSize};
          font-weight: ${theme?.button?.fontWeight};
          line-height: ${theme?.button?.lineHeight};
          margin: 0px;
          padding: ${theme?.button?.padding};
          text-decoration: none;
          transition: all 300ms ease 0s;

          &.solid {
            background: ${theme?.button?.solid?.background};
            color: ${theme?.button?.solid?.color};

            &:hover {
              background: ${theme?.button?.solid?.hover?.background};
              color: ${theme?.button?.solid?.hover?.color};
            }
          }

          &.hollow {
            &:hover {
              box-shadow: ${theme?.button?.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}
`;

export default ButtonStyled;
