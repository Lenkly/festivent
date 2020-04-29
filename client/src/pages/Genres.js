import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ChooseGenres from '../components/ChooseGenres';

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
        <Text>Which Music Do You Like?</Text>
        <ChooseGenres />
      </Form>
    </Content>
  );
}

export default Genres;
