import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import Festival from '../components/Festivals';
import AnimationContainer from '../components/layout/AnimationContainer';
import Button from '../components/Button';

const Container = styled.div`
  margin-bottom: 50px;
`;

export default function Details() {
  return (
    <Content>
      <AnimationContainer>
        <Container>
          <NavigationBar />
          <Festival />
        </Container>
        <Button size="Small" onClick={() => alert('added to favourites')}>
          Favourite
        </Button>
      </AnimationContainer>
    </Content>
  );
}
