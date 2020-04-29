import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import FestivalMatch from '../components/FestivalMatch';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

const Text = styled.div`
  display: flex;
  line-height: 1.3;
  flex-wrap: wrap;
  font-family: 'Quicksand Light';
  margin-top: 80px;
  margin-bottom: 25px;
`;

const AgainText = styled.div`
  display: flex;
  line-height: 1.3;
  flex-wrap: wrap;
  font-family: 'Quicksand Light';
  font-size: 25px;
  text-align: center;
  margin-bottom: 25px;
`;

function Matchlist() {
  const history = useHistory();

  const nameUser = sessionStorage.getItem('Name') || '[Name]';

  const handleAgainClick = () => {
    sessionStorage.removeItem('Genres');
    history.push('/Genres');
  };

  return (
    <Content>
      <Form>
        <Text>
          {nameUser},
          <br /> These are your matches
        </Text>
        <FestivalMatch />
        <AgainText>
          Still Haven&apos;t Found What You Were Looking For?
        </AgainText>
        <Button onClick={handleAgainClick} size="Medium">
          Match Me Again
        </Button>
      </Form>
    </Content>
  );
}

export default Matchlist;
