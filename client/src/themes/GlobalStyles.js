import React from 'react';
import { Global, css } from '@emotion/core';
import QuicksandLight from '../assets/QuicksandLight.otf';
import QuicksandBook from '../assets/QuicksandBook.otf';
import Rubik from '../assets/Rubik.ttf';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: 'Quicksand';
          font-weight: 300;
          src: url('${QuicksandLight}') format('opentype');
        }
        @font-face {
          font-family: 'Quicksand';
          font-weight: 400;
          src: url('${QuicksandBook}') format('opentype');
        }

        @font-face {
          font-family: 'Rubik';
          src: url('${Rubik}') format('truetype');
        }
        body {
          font-family: 'Quicksand';
          font-weight: 400;
          height: 100vh;
          display: flex;
          justify-content: center;
          font-size: 1.875rem;
          text-transform: uppercase;
          color: ${theme.colors.text};
          background: ${theme.colors.background};
          margin: 0;
          transition: all 0.25s linear;
        }
      `}
    />
  );
}
export default GlobalStyles;
