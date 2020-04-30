import styled from '@emotion/styled';

const Button = styled.button`
${(props) =>
  props.disabled
    ? 'background: none; color: #707070; cursor: not-allowed;'
    : 'cursor: pointer;'}
  font-family: 'Quicksand Book', sans-serif;
  padding: ${(props) => buttonSize[props.size].padding};
  font-size: ${(props) => buttonSize[props.size].fontsize};
  width: ${(props) => buttonSize[props.size].width};
  text-transform: uppercase;
  color: #000;
  background-image: linear-gradient(#f9f9f9, #f9f9f9), linear-gradient(
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
  border: double 2px transparent;
  border-radius: 1rem;
  height: ${(props) => buttonSize[props.size].height};
  }
`;

const buttonSize = {
  Small: {
    padding: '11px 0 6px 0',
    fontsize: '1.25rem',
    width: '13.56rem',
    borderWidth: '13.7rem',
    height: '2.4rem',
  },
  Medium: {
    padding: '15px 0 10px 0',
    fontsize: '1.56rem',
    width: '17.5rem',
    borderWidth: '17.75rem',
    height: '3.25rem',
  },
  Large: {
    padding: '11px 0 6px 0',
    fontsize: '2.125rem',
    width: '17.5rem',
    borderWidth: '17.75rem',
    height: '3.25rem',
  },
};

export default Button;
