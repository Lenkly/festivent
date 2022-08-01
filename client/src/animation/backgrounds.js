import { keyframes } from '@emotion/react';

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

export const colorChange = keyframes`
0% {        
  color: #fff700;
}
10% {
  color: #ff9100;
}
20% {
  color: #ff0084;
}
30% {
  color: #ff00f2;
}
40% {
  color: #bb00ff;
}
50% {
  color: #7700ff;
}  
60% {       
  color: #006aff;
}
70% {       
  color: #00ccff;
}
80% {    
  color: #00ff6a;
}      
90% {    
  color: #59ff00;
}
100% {      
  color: #fff700;
}
`;
