import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import brightmode from '../src/themes/brightmode';
import GlobalStyles from '../src/components/GlobalStyles';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={brightmode}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
