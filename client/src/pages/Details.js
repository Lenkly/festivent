import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import SimpleNavigation from '../components/navigation/SimpleNavigation';
import Festival from '../components/Festivals';
import AnimationContainer from '../components/layout/AnimationContainer';

const Container = styled.div`
  margin-bottom: 50px;
`;

export default function Details() {
  return (
    <Content>
      <AnimationContainer>
        <Container>
          <SimpleNavigation />
          <Festival />
        </Container>
      </AnimationContainer>
    </Content>
  );
}
