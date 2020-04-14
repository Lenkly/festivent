import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  font-family: 'Quicksand Book', sans-serif;
  padding: ${(props) => setPadding(props.size)};
  fontsize: ${(props) => setFontsize(props.size)};
  width: 100%;
  text-transform: uppercase;

  color: #fff;
  background: #1d1d1d;
  background-clip: padding-box;
  border: solid 2px transparent;
  border-radius: 1em;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: 0;
    border-radius: 1em;
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
  Small: { padding: '10px 0 7px 0', fontSize: '1em' },
  Medium: { padding: '11px 0 8px 0', fontSize: '1.25em' },
  Large: { padding: '13px 0 9px 0', fontSize: '1.75em' },
};

function setPadding(size) {
  return buttonSize[size].padding;
}

function setFontsize(size) {
  return buttonSize[size].fontSize;
}

export default Button;
