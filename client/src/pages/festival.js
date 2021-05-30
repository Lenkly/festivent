import React, { useState } from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import FestivalDetail from '../components/FestivalDetail';
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

  const ticketmockup = () => {
    console.log('This needs to Link to external source');
    alert(
      'Look, this is awkward, but... did you really think there are tickets sold for festivals in 2020?'
    );
  };

  return (
    <>
      <Content>
        <AnimationContainer>
          <Container>
            <NavigationBar />
            <FestivalDetail
              onFavouriteClick={openModal}
              onTicketClick={ticketmockup}
            />
          </Container>
        </AnimationContainer>
      </Content>
      <SignUp showModal={isShowing} closeModal={closeModal} />
    </>
  );
}
