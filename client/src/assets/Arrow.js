import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.colors.text};
`;

const Arrow = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 -1.5 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
      <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
    </SVG>
  );
};
export default Arrow;