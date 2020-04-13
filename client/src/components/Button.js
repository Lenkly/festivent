import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => setPadding(props.size)};
  fontsize: ${(props) => setFontsize(props.size)};
  width: ${(props) => setWidth(props.size)};
  text-transform: uppercase;

  $border: 2px;
  color: #fff;
  background: #1D1D1D;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 1em;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, rgba(255,247,0,1) 0%, rgba(255,145,0,1) 10%, rgba(255,0,132,1) 20%, rgba(255,0,242,1) 30%, rgba(187,0,255,1) 40%, rgba(85,0,255,1) 50%, rgba(0,106,255,1) 60%, rgba(0,204,255,1) 70%, rgba(0,255,106,1) 80%, rgba(89,255,0,1) 90%, rgba(255,247,0,1) 100%));
  }
`;

const buttonSize = {
  Small: { padding: '5px', fontSize: '20px', width: '219px' },
  Medium: { padding: '7px', fontSize: '25px', width: '284px' },
  Large: { padding: '9px', fontSize: '34px', width: '284px' },
};

function setPadding(size) {
  return buttonSize[size].padding;
}

function setFontsize(size) {
  return buttonSize[size].fontSize;
}

function setWidth(size) {
  return buttonSize[size].width;
}

export default Button;
