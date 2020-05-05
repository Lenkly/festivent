import React from 'react';
import styled from '@emotion/styled';
import fadeout from '../animation/fadeout';
import Heart from '../assets/festivent-start.png';

const AnimationContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimatedHeart = styled.img`
  width: 80%;
  height: 80%;
  opacity: 1;
  animation: ${fadeout} 3s ease-in-out 1 normal;
  animation-delay: 1s;
`;

const AnimatedTitle = styled.div`
  text-align: center;
  opacity: 1;
  animation: ${fadeout} 3s ease-in-out 1 normal;
  animation-delay: 2s;
`;

const Title = styled.h1`
  font-family: 'Quicksand Book';
  font-size: 45px;
  letter-spacing: 0.2em;
`;

const StartAnimation = () => {
  return (
    <AnimationContainer>
      <AnimatedHeart src={Heart} />
      <AnimatedTitle>
        <Title>FESTIVENT</Title>
      </AnimatedTitle>
    </AnimationContainer>
  );
};

export default StartAnimation;
