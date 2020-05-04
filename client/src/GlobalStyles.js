import React from 'react';
import { Global, css } from '@emotion/core';
import QuicksandLight from './assets/QuicksandLight.otf';
import QuicksandBook from './assets/QuicksandBook.otf';
import Rubik from './assets/Rubik.ttf';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        @font-face {
            font-family: 'Quicksand Light';
            src: url('${QuicksandLight}') format('opentype');
          }
          @font-face {
            font-family: 'Quicksand Book';
            src: url('${QuicksandBook}') format('opentype');
          }
          @font-face {
            font-family: 'Rubik';
            src: url('${Rubik}') format('truetype');
          }
        body {
          font-family: 'Quicksand Book';
          height: 100vh;
          font-size: 34px;
          text-transform: uppercase;
          color: white;
          background: #1d1d1d;
          margin: 0;
        }
      `}
    />
  );
}
export default GlobalStyles;

/* ${theme.colors.background};
${theme.colors.text}
(theme) => */
