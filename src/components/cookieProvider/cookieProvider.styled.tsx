import styled, { css } from 'styled-components';

const CookieProviderStyled = styled.div`
  ${() => css`
    .sr-only {
      height: 1px;
      left: -10000px;
      overflow: hidden;
      position: absolute;
      top: auto;
      width: 1px;
    }
  `}
`;

export default CookieProviderStyled;
