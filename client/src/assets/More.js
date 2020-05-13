import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.colors.text};
`;

const More = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 -1.5 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </SVG>
  );
};
export default More;
