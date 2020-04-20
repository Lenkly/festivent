import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';

const Content = styled.div`
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 0px 35px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Quicksand Light';
  margin-top: 80px;
`;

function Genres() {
  return (
    <Content>
      <Form>
        <Text>Which Music Do You Like?</Text>
        <Button size="Match" />
      </Form>
    </Content>
  );
}

export default Genres;
