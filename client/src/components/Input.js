import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  text-align: center;
  color: black;
  font-family: 'Quicksand Book', sans-serif;
  text-transform: uppercase;
  background: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #707070;
  cursor: text;
  padding: ${(props) => inputText[props.size].padding};
  font-size: ${(props) => inputText[props.size].fontsize};
  &::placeholder {
    font-family: 'Quicksand Light', sans-serif;
    color: #707070;
    text-align: center;
  }
`;

const inputText = {
  Name: { padding: '6px', fontsize: '1.56rem' },
  User: { padding: '5px', fontsize: '1.25rem' },
};

export default Input;