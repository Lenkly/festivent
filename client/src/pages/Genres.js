import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ChooseGenres from '../components/ChooseGenres';
import fadeIn from '../animation/fadein';

const GenreWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

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
        <GenreWrapper>
          <Text>Which Music Do You Like?</Text>
          <ChooseGenres />
        </GenreWrapper>
      </Form>
    </Content>
  );
}

export default Genres;
