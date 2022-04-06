import styled, { css } from 'styled-components';

const UpdatePreferencesStyled = styled.div`
  ${({ theme }) => css`
    .zen-cc-up__modal {
      background: ${theme?.background};
      bottom: 0;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.4);
      left: 100%;
      max-width: 90vw;
      overflow: hidden;
      padding: 16px 0;
      position: fixed;
      top: 0;
      transition: transform 400ms ease-in-out;
      width: 350px;
    }

    &.open {
      &::before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
      }
      & > .zen-cc-up__modal {
        transform: translateX(-100%);
      }
    }

    &.closed > .zen-cc-up__modal {
      transform: translateX(0);
    }

    .zen-cc-up__inner {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 16px;
    }

    .zen-cc-up__close {
      text-align: right;
    }

    .zen-cc-up__section {
      border-bottom: 1px solid ${theme?.divideColor};
      padding: 24px 0;
    }

    .zen-cc-up__title {
      color: ${theme?.heading?.color};
      font-family: ${theme?.heading?.fontFamily};
      font-size: ${theme?.heading?.fontSize};
      font-weight: ${theme?.heading?.fontWeight};
      line-height: ${theme?.heading?.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${theme?.text?.color};
      font-family: ${theme?.text?.fontFamily};
      font-size: ${theme?.text?.fontSize};
      font-weight: ${theme?.text?.fontWeight};
      line-height: ${theme?.text?.lineHeight};
      margin-top: 16px;

      a {
        color: ${theme?.linkColor};
      }
    }

    .zen-cc-toggle {
      margin-top: 16px;
    }

    .zen-cc-up__save {
      margin-top: 24px;
    }
  `}
`;

export default UpdatePreferencesStyled;
