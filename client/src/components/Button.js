import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  font-family: 'Quicksand Book', sans-serif;
  padding: ${(props) => buttonSize[props.size].padding};
  font-size: ${(props) => buttonSize[props.size].fontsize};
  width: ${(props) => buttonSize[props.size].width};
  text-transform: uppercase;
  color: #000;
  background: #f9f9f9;
  background-clip: padding-box;
  border: none;
  border-radius: 1rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: ${(props) => buttonSize[props.size].borderWidth};
    height: ${(props) => buttonSize[props.size].height};
    top: 50%;
    transform: translateY(-50%);
    left: -0.5%;
    z-index: -1;
    margin: 0;
    border-radius: 1rem;
    background: linear-gradient(
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
