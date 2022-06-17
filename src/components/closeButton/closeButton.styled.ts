import styled from 'styled-components';

const CloseButtonStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 3px #4c9aff !important;
  }

  &::before {
    color: ${props => props.theme?.iconColor};
    content: '\\2716';
    display: block;
    font-size: 32px;
    line-height: 40px;
  }

  span {
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
  }
`;

export default CloseButtonStyled;
