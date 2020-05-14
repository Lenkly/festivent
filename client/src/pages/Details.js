import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import SimpleNavigation from '../components/navigation/SimpleNavigation';
import Festival from '../components/Festivals';
import fadeIn from '../animation/fadein';

const Container = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
  margin-bottom: 50px;
`;

export default function Details() {
  return (
    <Content>
      <Container>
        <SimpleNavigation />
        <Festival />
      </Container>
    </Content>
  );
}
