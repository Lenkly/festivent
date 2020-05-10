import styled from '@emotion/styled';

const Button = styled.button`
  ${(props) =>
    props.disabled
      ? 'background: none; color: #707070; border: solid 2px #1d1d1d; cursor: not-allowed;'
      : 'background-image: linear-gradient(#1d1d1d, #1d1d1d), linear-gradient(to right, #fff700, #ff9100, #ff0084, #ff00f2, #bb00ff, #7700ff, #006aff, #00ccff, #00ff6a, #59ff00, #fff700); background-origin: border-box; background-clip: padding-box, border-box; color: #fff; border: double 2px transparent; border-radius: 1rem; cursor: pointer;'}
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
    padding: '9px 0 8px 0',
    fontsize: '1.25rem',
    width: '13.56rem',
    borderWidth: '13.7rem',
    height: '2.4rem',
  },
  Medium: {
    padding: '13px 0 12px 0',
    fontsize: '1.56rem',
    width: '17.5rem',
    borderWidth: '17.75rem',
    height: '3.25rem',
  },
  Large: {
    padding: '9px 0 8px 0',
    fontsize: '2.125rem',
    width: '17.5rem',
    borderWidth: '17.75rem',
    height: '3.25rem',
  },
};

export default Button;
