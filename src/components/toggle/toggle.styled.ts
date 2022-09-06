import styled, { css } from 'styled-components';

const ToggleStyled = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    min-height: 24px;
    position: relative;

    input {
      height: 1px;
      left: -10000px;
      margin: -1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      width: 1px;
    }

    label {
      cursor: pointer;
      display: block;
      font-size: 16px;
      line-height: 24px;
      padding-left: 48px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        background: ${theme?.toggle?.off?.background};
        border-radius: 20px;
        height: 24px;
        left: 0;
        outline: 2px solid transparent;
        transition: all 250ms ease-in-out;
        width: 40px;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        height: 16px;
        left: 4px;
        transition: left 200ms ease-in-out;
        width: 16px;
      }
    }

    &.checked {
      label::before {
        background: ${theme?.toggle?.on?.background};
      }
      label::after {
        left: 20px;
      }

      &:hover {
        label::before {
          background: ${theme?.toggle?.on?.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${theme?.toggle?.off?.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: 0 0 0 3px #4c9aff !important;
    }
  `}
`;

export default ToggleStyled;
