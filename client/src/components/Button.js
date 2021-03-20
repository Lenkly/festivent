import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { linearBackground } from '../animation/backgroundAnimation';

const disabledStyle = css`
  background: none;
  color: #707070;
  border: solid 2px transparent;
  cursor: not-allowed;
`;

const enabledStyle = (props) => css`
  background: linear-gradient(
      ${props.theme.colors.background},
      ${props.theme.colors.background}
    ),
    linear-gradient(
      to right,
      #fff700,
      #ff9100,
      #ff0084,
      #ff00f2,
      #bb00ff,
      #7700ff,
      #006aff,
      #00ccff,
      #00ff6a,
      #59ff00,
      #fff700
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  :hover {
    animation: ${linearBackground} 50s linear infinite;
  }
  color: ${props.theme.colors.text};
  border: double 2px transparent;
  border-radius: 1rem;
  cursor: pointer;
`;

const Button = styled.button`
  ${(props) => (props.disabled ? disabledStyle : enabledStyle(props))};
  font-family: 'Quicksand', sans-serif;
  padding: ${(props) => buttonSize[props.size].padding};
  font-size: ${(props) => buttonSize[props.size].fontsize};
  font-weight: ${(props) => buttonSize[props.size].weight};
  width: ${(props) => buttonSize[props.size].width};
  height: ${(props) => buttonSize[props.size].height};
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

const buttonSize = {
  Small: {
    padding: '0.5rem 0',
    fontsize: '1.25rem',
    weight: '400',
    width: '219px',
    borderWidth: '223px',
    height: 'auto',
  },
  Medium: {
    padding: '0.875rem 0',
    fontsize: '1.5rem',
    weight: '400',
    width: '280px',
    borderWidth: '284px',
    height: 'auto',
  },
  Large: {
    padding: '0.5rem 0',
    fontsize: '2.125rem',
    weight: '400',
    width: '280px',
    borderWidth: '284px',
    height: 'auto',
  },
};

export default Button;
