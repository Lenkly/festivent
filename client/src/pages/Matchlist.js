import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import FestivalMatch from '../components/FestivalMatch';

const Text = styled.div`
  display: flex;
  line-height: 1.3;
  flex-wrap: wrap;
  font-family: 'Quicksand Light';
  margin-top: 80px;
  margin-bottom: 25px;
`;

function Matchlist() {
  return (
    <Content>
      <Form>
        <Text>
          [Name],
          <br /> These are your matches
        </Text>
        <FestivalMatch />
      </Form>
    </Content>
  );
}

export default Matchlist;
