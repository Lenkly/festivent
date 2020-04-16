import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&family=Rubik&display=swap');
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          display: flex;
          height: 100vh;
          color: ${theme.colors.text};
          background: ${theme.colors.background};
          margin: 0;
        }
      `}
    />
  );
}
export default GlobalStyles;
