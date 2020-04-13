import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  text-align: center;
  color: white;
  font-family: 'Quicksand Book', sans-serif;
  text-transform: uppercase;
  background: #1d1d1d;
  width: 100%;
  border-bottom: 1px solid #707070;
  cursor: text;
  padding: ${(props) => setPadding(props.size)};
  fontsize: ${(props) => setFontsize(props.size)};
  &::placeholder {
    font-family: 'Quicksand Light', sans-serif;
    color: white;
    text-align: center;
  }
`;

const inputText = {
  Name: { padding: '6px', fontSize: '24px' },
  User: { padding: '5px', fontSize: '20px' },
};

function setPadding(size) {
  return inputText[size].padding;
}

function setFontsize(size) {
  return inputText[size].fontSize;
}

export default Input;
