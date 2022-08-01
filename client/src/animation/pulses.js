import { keyframes } from '@emotion/react';

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
     transform: scale(1.1); 
  }
  100% {
    transform: scale(1);
  }
`;

export const getBiggerAndShorter = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.3, 1.3);
  }
`;
//for checked animation: getBiggerAndShorter 0.3s ease-in-out;

export const getShorterAndBigger = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(0.8, 0.8);
  }
`;
//for uncheck animation: getShorterAndBigger 0.3s ease-in-out;
