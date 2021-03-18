import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand Light', sans-serif;
  text-transform: uppercase;
  background: none;
  width: ${(props) => inputText[props.size].width};
  border: none;
  border-bottom: 1px solid #707070;
  cursor: text;
  padding-top: ${(props) => inputText[props.size].padding};
  font-size: ${(props) => inputText[props.size].fontsize};
  &::placeholder {
    font-family: 'Quicksand Light', sans-serif;
    color: #707070;
    text-align: center;
  }
  outline: none;
`;

const inputText = {
  Name: { padding: '30px', fontsize: '34px', width: '100%' },
  User: { padding: '30px', fontsize: '20px', width: '100%' },
};

export default Input;
