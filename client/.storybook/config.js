import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import styled from '@emotion/styled';
import themeDecorator from './themeDecorator';

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
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  backgrounds: [
    { name: 'brightmode', value: '#f9f9f9', default: true },
    { name: 'darkmode', value: '#1d1d1d' },
  ],
});
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
