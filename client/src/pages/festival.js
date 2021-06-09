import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getFestivalbyId } from '../api/getFestival';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import AnimationContainer from '../components/layout/AnimationContainer';
import ArtistButton from '../components/ArtistButton';
import calculateIconValue from '../lib/calculateIconValue';
import SignUp from '../components/modals/SignUp';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { colorfulBackground } from '../animation/backgrounds';
import Ticket from '../assets/Ticket';
import Favourite from '../assets/Favourite';
import FestivalDetailHeader from '../components/FestivalDetailHeader';
// import { useParams } from 'react-router-dom';

/* STYLES */

const LineUpHeader = styled.div`
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

const LineUp = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(
    145deg,
    rgba(255, 247, 0, 0.5),
    rgba(255, 145, 0, 0.5),
    rgba(255, 0, 132, 0.5),
    rgba(255, 0, 242, 0.5),
    rgba(187, 0, 255, 0.5),
    rgba(85, 0, 255, 0.5),
    rgba(0, 106, 255, 0.5),
    rgba(0, 204, 255, 0.5),
    rgba(0, 255, 106, 0.5),
    rgba(89, 255, 0, 0.5),
    rgba(255, 247, 0, 0.5)
  );
  background-size: 400%;
  animation: ${colorfulBackground} 10s ease infinite;
  animation-delay: 0s;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;
const Cell = styled.div`
  padding: 2px;
  overflow: hidden;
`;
const Fill = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.colors.background};
`;

const CTAButton = styled.button`
  width: auto;
  height: 20px;
  background: none;
  text-align: center;
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
`;

/* CONTENT */

export default function Details() {
  const [isShowing, setShowing] = useState(false);
  // const festivalName = useParams();
  // const { status, data: festival } = useQuery(festivalName, getFestival(festivalName));
  const { status, data: festivaldata } = useQuery('festivals', getFestivalbyId);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  if (festivaldata.length > 0) {
    Object.defineProperty(festivaldata[0], 'quote', {
      value: sessionStorage.getItem('selectedFestivalQuote'),
      writable: true,
    });
  }

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
          <div style={{ marginBottom: '50px' }}>
            <NavigationBar />
            {festivaldata
              // .filter((festival) => festival.id === festivalId)
              .map((festival) => (
                <div key={festival.id}>
                  <FestivalDetailHeader
                    color={calculateIconValue(festival.quote)}
                    quote={festival.quote}
                    name={festival.name}
                    date={festival.date}
                    venue={festival.venue}
                    place={festival.place}
                    description={festival.description}
                  />
                  <LineUpHeader>Line-Up</LineUpHeader>
                  <LineUp>
                    {festival.artists.sort().map((artist) => (
                      <React.Fragment key={artist}>
                        <Cell>
                          <ArtistButton>{artist}</ArtistButton>
                        </Cell>
                        <Fill />
                      </React.Fragment>
                    ))}
                  </LineUp>
                </div>
              ))}
            <div style={{ paddingTop: '43px' }}>
              <CTAButton onClick={openModal}>
                <Favourite />
                &ensp;Add to Favourites
              </CTAButton>
              <CTAButton onClick={ticketmockup}>
                <Ticket />
                &ensp;Buy Tickets
              </CTAButton>
            </div>
          </div>
        </AnimationContainer>
      </Content>
      <SignUp renderOnModal showModal={isShowing} closeModal={closeModal} />
    </>
  );
}
