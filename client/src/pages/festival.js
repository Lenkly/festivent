import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getFestivalbyId } from '../api/getFestival';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import AnimationContainer from '../components/layout/AnimationContainer';
import calculateIconValue from '../lib/calculateIconValue';
import SignUp from '../components/modals/SignUp';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Ticket from '../assets/Ticket';
import Favourite from '../assets/Favourite';
import FestivalDetailHeader from '../components/FestivalDetailHeader';
import CTAButton from '../components/CTAButton';
import Checkbox from '../components/Checkbox';
// import { useParams } from 'react-router-dom';
import FestivalLineup from '../components/FestivalDetailLineup';
import usePersistentState from '../hooks/usePersistentState';

/* STYLES */

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 43px;
`;

/* CONTENT */

function Details({ userLoggedIn }) {
  const [isShowing, setShowing] = useState(false);
  // const { festivalId } = useParams();
  // const { status, data: festival } = useQuery(festivalName, getFestival(festivalName));
  const { status, data: festivaldata } = useQuery('festivals', getFestivalbyId);
  const [selectedGenres] = usePersistentState('SelectedGenres', []);

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

  const allGenres = festivaldata.map((festival) =>
    festival.genres.map((item) => item)
  );

  const selects = allGenres[0].map((item) => {
    const temp = new Object();
    temp.name = item;
    temp.selected = selectedGenres.includes(item);
    return temp;
  });

  return (
    <>
      <Content>
        <AnimationContainer>
          <div style={{ marginBottom: '50px' }}>
            <NavigationBar />
            {festivaldata.map((festival) => (
              <div key={festival.id}>
                <FestivalDetailHeader
                  color={calculateIconValue(festival.quote)}
                  quote={festival.quote}
                  name={festival.name}
                  date={festival.date}
                  venue={festival.venue}
                  place={festival.place}
                  description={festival.description}
                  genres={selects}
                />
                <FestivalLineup artists={festival.artists} />
              </div>
            ))}
            <ButtonContainer>
              {userLoggedIn ? (
                <Checkbox
                  label="Add to Favourites"
                  icon={<Favourite />}
                  onClick={openModal}
                />
              ) : (
                <CTAButton onClick={openModal}>
                  <Favourite />
                  &ensp;Add to Favourites
                </CTAButton>
              )}
              <CTAButton onClick={ticketmockup}>
                <Ticket />
                &ensp;Buy Tickets
              </CTAButton>
            </ButtonContainer>
          </div>
        </AnimationContainer>
      </Content>
      <SignUp renderOnModal showModal={isShowing} closeModal={closeModal} />
    </>
  );
}

Details.propTypes = {
  userLoggedIn: PropTypes.bool,
};

export default Details;
