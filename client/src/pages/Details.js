import React, { useState } from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import Festival from '../components/Festivals';
import AnimationContainer from '../components/layout/AnimationContainer';
import SignUp from '../components/modals/SignUp';

const Container = styled.div`
  margin-bottom: 50px;
`;

export default function Details() {
  const [isShowing, setShowing] = useState(false);

  const closeModal = () => {
    setShowing(false);
  };

  const openModal = () => {
    setShowing(!isShowing);
  };

  return (
    <>
      <Content>
        <AnimationContainer>
          <Container>
            <NavigationBar />
            <Festival
              onFavouriteClick={openModal}
              onTicketClick={() =>
                console.log('Tried to escape, the little snitch')
              }
            />
          </Container>
        </AnimationContainer>
      </Content>
      <SignUp showModal={isShowing} closeModal={closeModal} />
    </>
  );
}
