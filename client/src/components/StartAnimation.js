import React from 'react';
import styled from '@emotion/styled';
import { fadeOut } from '../animation/fades';
import Heart from '../assets/festivent-start.png';

const AnimationContainer = styled.div`
  margin-top: 110px;
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
  animation: ${fadeOut} 3s ease-in-out 1 forwards;
  animation-delay: 1s;
`;

const AnimatedTitle = styled.h1`
  font-family: 'Quicksand';
  font-size: 3rem;
  letter-spacing: 0.2em;
  text-align: center;
  opacity: 1;
  animation: ${fadeOut} 3s ease-in-out 1 forwards;
  animation-delay: 2s;
`;

const StartAnimation = () => {
  return (
    <AnimationContainer>
      <AnimatedHeart src={Heart} />
      <AnimatedTitle>FESTIVENT</AnimatedTitle>
    </AnimationContainer>
  );
};

export default StartAnimation;
