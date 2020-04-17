import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import styled from '@emotion/styled';

const Main = styled.div`
  margin: 20px;
`;

const GlobalStylesDecorator = (storyFn) => (
  <Main>
    <GlobalStyles />
    {storyFn()}
  </Main>
);
addDecorator(GlobalStylesDecorator);
addDecorator(themeDecorator);
configure(require.context('../src/stories', true, /\.stories\.js$/), module);