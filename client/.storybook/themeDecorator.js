import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { brightmode } from '../src/themes/theme';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={brightmode}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
