import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import brightmode from '../src/themes/brightmode';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={brightmode}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
