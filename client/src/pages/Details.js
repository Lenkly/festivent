import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import Festival from '../components/Festivals';
import AnimationContainer from '../components/layout/AnimationContainer';

const Container = styled.div`
  margin-bottom: 50px;
`;

export default function Details() {
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
            <Festival
              onFavouriteClick={() =>
                alert(
                  'Sorry to tell you, but this function is currently unavailable'
                )
              }
              onTicketClick={ticketmockup}
            />
          </Container>
        </AnimationContainer>
      </Content>
    </>
  );
}
