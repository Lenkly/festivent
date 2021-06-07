import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  display: flex;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  background: none;
  width: ${(props) => inputText[props.size].width};
  border: none;
  border-bottom: 1px solid #707070;
  cursor: text;
  padding-top: ${(props) => inputText[props.size].padding};
  font-size: ${(props) => inputText[props.size].fontsize};
  font-weight: ${(props) => inputText[props.size].weight};
  &::placeholder {
    font-family: 'Quicksand', sans-serif;
    font-weight: 300;
    color: #707070;
    text-align: center;
  }
  outline: none;
`;

const inputText = {
  Name: { padding: '30px', fontsize: '1.875rem', weight: '300', width: '100%' },
  User: { padding: '30px', fontsize: '1.25rem', weight: '300', width: '100%' },
};

const Input = React.forwardRef(function Input(props, ref) {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
