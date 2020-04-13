import React from 'react';
import { Global, css } from '@emotion/core';
//import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Rubik&display=swap');

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          font-size: 34;
          font-family: 'Quicksand', sans-serif;
          color: ${theme.color.text};
          background: ${theme.colors.background};
          margin: 0;
        }
      `}
    />
  );
}
export default GlobalStyles;
