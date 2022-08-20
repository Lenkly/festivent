import React from 'react';
import styled from '@emotion/styled';
import { fadeOut } from '../animation/fades';
import Heart from '../assets/festivent-start.png';
import { FlexContainer } from './layout/Containers';

const AnimatedHeart = styled.img`
  width: 80%;
  height: 80%;
  opacity: 1;
  animation: ${fadeOut} 3s ease-in-out 1 forwards;
  animation-delay: 1s;
`;

const AnimatedTitle = styled.h1`
  font-size: ${(props) => props.theme.fontsize.xxxl};
  letter-spacing: 0.2em;
  text-align: center;
  opacity: 1;
  animation: ${fadeOut} 3s ease-in-out 1 forwards;
  animation-delay: 2s;
`;

const StartAnimation = () => {
  return (
    <FlexContainer
      column
      alignItems="center"
      justifyContent="center"
      width="100%"
      m="110px 0 0"
    >
      <AnimatedHeart src={Heart} />
      <AnimatedTitle>FESTIVENT</AnimatedTitle>
    </FlexContainer>
  );
};

export default StartAnimation;
