import { keyframes } from '@emotion/core';

export const colorfulBackground = keyframes`
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

export const linearBackground = keyframes`
from {
  background-position: 0;
}
to {
  background-position: 10000px;
}
`;
