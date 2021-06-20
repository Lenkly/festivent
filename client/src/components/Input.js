import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  display: flex;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  background: none;
  width: ${(props) => inputText[props.size].width};
  border: none;
  border-bottom: 1px solid #707070;
  cursor: text;
  line-height: ${(props) => inputText[props.size].lineheight};
  padding-top: ${(props) => inputText[props.size].padding};
  font-size: ${(props) => inputText[props.size].fontsize};
  font-weight: ${(props) => inputText[props.size].weight};
  &::placeholder {
    font-weight: 300;
    color: #707070;
    text-align: center;
  }
  outline: none;
`;

const inputText = {
  Name: {
    padding: '25px',
    fontsize: '1.875rem',
    weight: '300',
    width: '100%',
    lineheight: '1.3',
  },
  User: {
    padding: '20px',
    fontsize: '1.25rem',
    weight: '300',
    width: '100%',
    lineheight: '1.5',
  },
};

export const Input = React.forwardRef(function Input(props, ref) {
  return <StyledInput ref={ref} {...props} />;
});

export const SettingsInput = styled(Input)`
  display: flex;
  width: 100%;
  text-align: left;
  &::placeholder {
    text-align: left;
  }
`;
