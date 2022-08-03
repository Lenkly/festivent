import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyles(props) {
  return (
    <Global
      {...props}
      styles={(theme) => css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          color: ${theme.colors.text};
          background: ${theme.colors.background};
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          text-rendering: optimizeLegibility;
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

        h2,
        h3,
        button,
        input {
          font-family: 'Quicksand';
          font-weight: 400;
          text-transform: uppercase;
          margin: 0;
        }

        h2 {
          font-size: 1.875rem;
          line-height: 1.3;
        }

        h3 {
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}
    />
  );
}
export default GlobalStyles;
