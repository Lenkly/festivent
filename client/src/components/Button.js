import styled from '@emotion/styled';
import { css } from '@emotion/core';

const disabledStyle = css`
  background: none;
  color: #707070;
  border: solid 2px transparent;
  cursor: not-allowed;
`;

const enabledStyle = (props) => css`
  background-image: linear-gradient(
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
  color: ${props.theme.colors.text};
  border: double 2px transparent;
  border-radius: 1rem;
  cursor: pointer;
`;

const Button = styled.button`
  ${(props) => (props.disabled ? disabledStyle : enabledStyle(props))};
  font-family: 'Quicksand Book', sans-serif;
  padding: ${(props) => buttonSize[props.size].padding};
  font-size: ${(props) => buttonSize[props.size].fontsize};
  width: ${(props) => buttonSize[props.size].width};
  text-transform: uppercase;
  height: ${(props) => buttonSize[props.size].height};
  cursor: pointer;
`;

const buttonSize = {
  Small: {
    padding: '9px 0',
    fontsize: '20px',
    width: '219px',
    borderWidth: '223px',
    height: '39px',
  },
  Medium: {
    padding: '13px 0',
    fontsize: '25px',
    width: '280px',
    borderWidth: '284px',
    height: '52px',
  },
  Large: {
    padding: '9px 0',
    fontsize: '34px',
    width: '280px',
    borderWidth: '284px',
    height: '52px',
  },
};

export default Button;
