import React from 'react';
import styled from '@emotion/styled';
import { linearBackground } from '../animation/backgrounds';

const Text = styled.p`
  background: linear-gradient(
    to right,
    #fff700 0,
    #ff9100 10%,
    #ff0084 20%,
    #ff00f2 30%,
    #bb00ff 40%,
    #7700ff 50%,
    #006aff 60%,
    #00ccff 70%,
    #00ff6a 80%,
    #59ff00 90%,
    #fff700 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  animation: ${linearBackground} 50s linear infinite;
`;

function Loading() {
  return (
    <div style={{ paddingTop: '200px' }}>
      <Text>Loading...</Text>
    </div>
  );
}

export default Loading;
