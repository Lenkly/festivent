import React from 'react';
import { Global, css } from '@emotion/core';
import QuicksandLight from '../assets/QuicksandLight.otf';
import QuicksandBook from '../assets/QuicksandBook.otf';
import Rubik from '../assets/Rubik.ttf';
import themes from 'emotion-theming';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
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
          height: 100vh;
          color: ${themes.colors.text};
          background: ${themes.colors.background};
          margin: 0;
        }
      `}
    />
  );
}
export default GlobalStyles;
