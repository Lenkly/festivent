import { keyframes } from '@emotion/core';

const colorfulBackground = keyframes`
  // from {
  //   background-position-x: 0px;
  // }
  // to {
  //   background-position-x: 10000px;
  // }

  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export default colorfulBackground;
