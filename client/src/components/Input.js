import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  text-align: center;
  color: white;
  font-family: 'Quicksand Book', sans-serif;
  text-transform: uppercase;
  background: #1d1d1d;
  width: ${(props) => inputText[props.size].width};
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
  Name: { padding: '6px', fontsize: '24px', width: '256px' },
  User: { padding: '5px', fontsize: '20px', width: '305px' },
};

export default Input;
