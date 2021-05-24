import { keyframes } from '@emotion/core';

const pulse = keyframes`
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

export default pulse;
