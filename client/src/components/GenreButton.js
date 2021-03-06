import styled from '@emotion/styled';
import { css } from '@emotion/core';

const nonselectedStyle = (props) => css`
  background: ${props.theme.colors.buttonBackground};
`;

const selectedStyle = css`
  background: transparent;
`;

const GenreButton = styled.button`
  width: 133px;
  height: 44px;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand Book', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  ${(props) => (props.selected ? selectedStyle : nonselectedStyle(props))}
  border-radius: 16px;
  padding-top: 5px;
  margin-top: 10px;
  box-shadow: 0 0 0px 50px ${(props) => props.theme.colors.background};
  cursor: pointer;
`;

export default GenreButton;
