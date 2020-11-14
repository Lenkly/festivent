import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ChooseGenres from '../components/ChooseGenres';
import AnimationContainer from '../components/layout/AnimationContainer';

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Quicksand Light';
  margin-top: 80px;
  margin-bottom: 25px;
`;

function Genres() {
  return (
    <Content>
      <Form>
        <AnimationContainer>
          <Text>Which Music Do You Like?</Text>
          <ChooseGenres />
        </AnimationContainer>
      </Form>
    </Content>
  );
}

export default Genres;
